import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    getAdInfo()
  }, [])

  return (
    <PageContainer>
      <PageArea>
        <LeftSide>
          <Box>
            <AdImage>{loading && <Fake height={300} />}</AdImage>
            <AdInfo>
              <AdName>
                {loading && <Fake height={20} />}
                {adInfo.title && <AdName>{adInfo.title}</AdName>}
              </AdName>
              <AdDescription>{loading && <Fake height={100} />}</AdDescription>
            </AdInfo>
          </Box>
        </LeftSide>
        <RightSide>
          <Box>{loading && <Fake height={20} />}</Box>
          <Box>{loading && <Fake height={50} />}</Box>
        </RightSide>
      </PageArea>
    </PageContainer>
  )
}

export default AdPage
