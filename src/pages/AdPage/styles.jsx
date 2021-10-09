import styled from 'styled-components'

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;
`
export const LeftSide = styled.div`
  flex: 1;
  margin-right: 20px;
`
export const Box = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 1px 10px #999;
  margin-bottom: 20px;
  padding: 10px;
`
export const AdImage = styled.div``
export const Fake = styled.div`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
`
export const AdInfo = styled.div`
  padding: 10px;
`
export const AdName = styled.div`
  color: #000;
`
export const AdDescription = styled.div``
export const RightSide = styled.div`
  width: 250px;
`
