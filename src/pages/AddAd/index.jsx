import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import {
  ErrorMessage,
  PageContainer,
  PageTitle,
} from '../../components/MainComponents'
import { PageArea } from './styles'
import useApi from '../../helpers/OlxApi'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { useEffect } from 'react'
const AddAd = () => {
  const api = useApi()
  const fileField = useRef()
  const history = useHistory()
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [negotiable, setNegotiable] = useState(false)
  const [desc, setDesc] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories()
      setCategories(cats)
    }
    getCategories()
  }, [api])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setDisabled(true)
    setError('')
    let errors = []

    !title.trim() && errors.push('sem titulo')
    !category && errors.push('Sem Categoria')

    if (errors.length === 0) {
      const fdata = new FormData()
      fdata.append('title', title)
      fdata.append('price', price)
      fdata.append('priceneg', negotiable)
      fdata.append('desc', desc)
      fdata.append('cat', category)

      if (fileField.current.files.length > 0) {
        for (let i = 0; i < fileField.current.files.lenght; i++) {
          fdata.append('img', fileField.current.files[i])
        }
      }

      const json = await api.addAd(fdata)

      !json.error ? history.push(`/ad/${json.id}`) : setError(json.error)
    } else {
      setError(errors.join('\n'))
    }

    setDisabled(false)
  }

  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
  })

  return (
    <PageContainer>
      <PageTitle>Adicionar Anuncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Titulo</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Categoria</div>
            <div className="area--input">
              <select
                disabled={disabled}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option>selecione uma categoria</option>
                {categories &&
                  categories.map((i) => (
                    <option key={i._id} value={i._id}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Preço</div>
            <div className="area--input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$ "
                disabled={disabled || negotiable}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Preço Negociavel</div>
            <div className="area--input">
              <input
                id="negotiable"
                type="checkbox"
                disabled={disabled}
                checked={negotiable}
                onChange={(e) => setNegotiable(!negotiable)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title">Descrição</div>
            <div className="area--input">
              <textarea
                disabled={disabled}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              ></textarea>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Imagens (1 ou mais) </div>
            <div className="area--input">
              <input type="file" disabled={disabled} multiple ref={fileField} />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Adicionar Anuncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}

export default AddAd
