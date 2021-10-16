import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import AdItem from '../../components/partials/AdItem'
import { PageContainer } from '../../components/MainComponents'
import {
  PageArea,
  LeftSide,
  Box,
  AdImage,
  AdInfo,
  AdName,
  AdDescription,
  RightSide,
  Fake,
} from './styles'
import useApi from '../../helpers/OlxApi'

const AdPage = () => {
  const api = useApi()

  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [adInfo, setAdInfo] = useState({})

  useEffect(() => {
    const getAdInfo = async (id) => {
      const json = await api.getAd(id, true)
      setAdInfo(json)
      setLoading(false)
    }
    getAdInfo(id)
  }, [id])

  const formatDate = (date) => {
    let cDate = new Date(date)

    let months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ]
    let cDay = cDate.getDate()
    let cMonth = cDate.getMonth()
    let cYear = cDate.getFullYear()
    return `${cDay} de ${months[cMonth]} de ${cYear}`
  }

  return (
    <PageContainer>
      <PageArea>
        <LeftSide>
          <Box>
            <AdImage>
              {loading && <Fake height={300} />}
              {adInfo.images && (
                <Slide>
                  {adInfo.images.map((img, k) => (
                    <div key={k} className="each-slide">
                      <img src={img} alt="" />
                    </div>
                  ))}
                </Slide>
              )}
            </AdImage>
            <AdInfo>
              <AdName>
                {loading && <Fake height={20} />}
                {adInfo.title && <AdName>{adInfo.title}</AdName>}
                {adInfo.dateCreated && (
                  <small>criado em {formatDate(adInfo.dateCreated)}</small>
                )}
              </AdName>
              <AdDescription>
                {loading && <Fake height={100} />}
                {adInfo.description}
                <hr />
                {adInfo.views && <small>Visualizações : {adInfo.views}</small>}
              </AdDescription>
            </AdInfo>
          </Box>
        </LeftSide>
        <RightSide>
          <Box>
            {loading && <Fake height={20} />}
            {adInfo.priceNegotiable && 'Preço Negociavel'}
            {!adInfo.priceNegotiable && adInfo.price && (
              <div className="price">
                Preço: <span>R$ {adInfo.price}</span>
              </div>
            )}
          </Box>
          <Box>
            {loading && <Fake height={50} />}
            {adInfo.userInfo && (
              <div style={{ display: 'Flex', flexDirection: 'column' }}>
                <a
                  href={`mailto:${adInfo.userInfo.email}`}
                  target="_blank"
                  className="contactSellerLink"
                >
                  Fale com o vendedor
                </a>
                <div className="createdBy">
                  <strong>{adInfo.userInfo.name}</strong>
                  <small>Email: {adInfo.userInfo.email}</small>
                  <small> Estado: {adInfo.stateName}</small>
                </div>
              </div>
            )}
          </Box>
        </RightSide>
        {console.log(`${adInfo.others}`)}
        {adInfo.others && (
          <>
            <h2> Outras ofertas do vendedor</h2>
            <div className="list">
              {adInfo.others.map((i, k) => (
                <AdItem key={k} data={i} />
              ))}
            </div>
          </>
        )}
      </PageArea>
    </PageContainer>
  )
}

export default AdPage
