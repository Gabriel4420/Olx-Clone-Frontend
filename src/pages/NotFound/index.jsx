import { ReactNode } from 'react'

import { Container, Animation } from './styles'
import Video from '../../Assets/Videos/Loop.mp4'
function NotFound() {
  return (
    <Container>
      <h1>Page NotFound</h1>

      <img src={Video} />
    </Container>
  )
}

export default NotFound
