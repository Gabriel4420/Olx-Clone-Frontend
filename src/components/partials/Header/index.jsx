import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea, Container } from './styles'
import { isLogged } from '../../../helpers/AuthHandler'
const Header = () => {
  let logged = true /* isLogged() */
  return (
    <HeaderArea>
      <Container>
        <div className="Logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged ? (
              <>
                <li>
                  <Link to="/my-account" >
                    Minha Conta
                  </Link>
                </li>
                <li>
                  <Link to="/loggout" >
                    Sair
                  </Link>
                </li>
                <li>
                  <Link to="/post-ads" className="button">
                    Poste um anúncio
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Container>
    </HeaderArea>
  )
}

export default Header
