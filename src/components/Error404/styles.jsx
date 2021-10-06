import styled from 'styled-components'
import Image from '../../Assets/Images/404.png'
import Cover from '../../Assets/Images/OLX.jpg'
export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 50px auto;
  text-align: center;
  font: 13px/22px 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
  color: #000;
`

export const Box = styled.div`
  background: url(${Image}) no-repeat 0 0;

  height: 343px;
  margin-bottom: 25px;
  padding-bottom: 50px;
`
export const CoverPanel = styled.div`
  background: transparent url(${Cover}) repeat 1055px bottom;
  height: 343px;
  margin-left: 1px;
  position: relative;
  width: 99.5%;
  z-index: -1;

  animation-name: pan;
  animation-duration: 40s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  -webkit-animation-name: pan;
  -webkit-animation-duration: 40s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  @keyframes pan {
    0% {
      background-position: 1338px bottom;
    }
    100% {
      background-position: left bottom;
    }
  }

  @-webkit-keyframes pan {
    0% {
      background-position: 1338px bottom;
    }
    100% {
      background-position: left bottom;
    }
  }
`
