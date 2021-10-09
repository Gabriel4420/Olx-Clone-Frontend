import styled from 'styled-components'

export const Item = styled.div`
  a {
    display: block;
    border: 1px solid #ccc;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
  }
`
export const ItemImage = styled.div`
  width: 100%;
  border-radius: 5px;
  img {
    max-height: 200px;
  }
`
export const ItemName = styled.div`
  color: #000;
  font-weight: bold;
`
export const ItemPrice = styled.div`
  color: #000;
`
