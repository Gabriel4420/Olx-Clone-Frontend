import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
  OthersArea,
  BreadCrumb,
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
  }, [id, api])

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
      {adInfo.category && (
        <BreadCrumb>
          Você esta aqui :<Link to="/">Home</Link>/
          <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>/
          <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>/
          {adInfo.title}
        </BreadCrumb>
      )}

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
                  rel="noreferrer"
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
      </PageArea>
      <OthersArea>
        {adInfo.others && (
          <>
            <h2> Outras ofertas do vendedor</h2>
            <div className="list">
              {adInfo.others
                .filter((item, idx) => idx < 4)
                .map((i, k) => (
                  <AdItem key={k} data={i } />
                ))}
            </div>
          </>
        )}
      </OthersArea>
    </PageContainer>
  )
}

export default AdPage
