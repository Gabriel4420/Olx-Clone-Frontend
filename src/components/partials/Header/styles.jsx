import styled from 'styled-components'

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;
`
export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;

  a {
    text-decoration: none;
  }

  .Logo {
    flex: 1;
    display: flex;
    align-items: center;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 32px;
      font-weight: bold;
    }
    .logo-1 {
      color: #8304db;
    }
    .logo-2 {
      color: #8cfb99;
    }
    .logo-3 {
      color: #fc7304;
    }
  }

  nav {
    padding: 10px 10px;
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }

    li {
      margin: 20px;
      a,
      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        color: #000;
        font-size: 18px;
        text-decoration: none;
        &:hover {
          color: #999;
        }

        &.button {
          background-color: #ff8100;
          border-radius: 5px;
          color: white;
          padding: 10px;
        }
        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }
`
