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
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 1px 10px #999;
  margin-bottom: 20px;
  padding: 10px;
`
export const AdImage = styled.div`
  height: 320px;
  width: 320px;
  img {
    width: 100%;
  }
  margin-right: 20px;
  .each-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 320px;
  }
`
export const Fake = styled.div`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
`
export const AdInfo = styled.div`
  flex: 1;
`
export const AdName = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 40px;
  margin-top: 20px;
  small {
    font-size: 15px;
    font-weight: 400;
    color: #999;
  }
`
export const AdDescription = styled.p`
  color: #999;
`
export const RightSide = styled.div`
  width: 250px;

  .price span {
    color: red;
    display: block;
    font-size: 27px;
    font-weight: bold;
  }

  .contactSellerLink {
    background-color: blue;
    color: white;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-bottom: 20px;
  }

  .createdBy small {
    display: block;
    color: #999;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
  }
`
