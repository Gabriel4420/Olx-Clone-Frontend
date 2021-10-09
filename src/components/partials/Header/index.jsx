import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea, Container } from './styles'
import { isLogged, doLogout } from '../../../helpers/AuthHandler'
const Header = () => {
  let logged = isLogged()

  const handleLogout = () => {
    doLogout()
    window.location.href = '/'
  }
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
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
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
                <li>
                  <Link to="/" className="button">
                    veja os anuncios
                  </Link>
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
