import React from 'react'
import { Link } from 'react-router-dom'
import { Item, ItemImage, ItemName, ItemPrice } from './styles'

const AdItem = (props) => {
  let price = ''

  props.data.priceNegotiable
    ? (price = 'Preço Negociável')
    : (price = `R$ ${props.data.price}`)

  return (
    <Item className="adItem">
      <Link to={`/ad/${props.data.id}`}>
        <ItemImage>
          <img src={props.data.image} alt="" />
        </ItemImage>
        <ItemName>{props.data.title}</ItemName>
        <ItemPrice>{price}</ItemPrice>
      </Link>
    </Item>
  )
}

export default AdItem
