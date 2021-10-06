import styled from 'styled-components'

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 10px;
    padding: 0px;
    box-shadow: 0px 7px 18px #333;
    margin: 0;

    .area {
      display: flex;
      align-items: center;
      padding: 15px;
      width: 100%;
      max-width: 500px;
      margin: 0;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 50px;
        font-weight: bold;
        font-size: 14px;
      }
      .area--input {
        flex: 2;

        input {
          display: flex;

          width: 100%;
          font-size: 15px;

          padding: 10px;
          outline: 0;
          border: 1px solid #999;
          border-radius: 30px;
          transition: all ease 1s;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }
        .checkbox {
          margin-left: -120px;
        }
        button {
          background-color: #0089ff;
          border: 0;
          outline: 0;
          padding: 10px;
          border-radius: 5px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;

          &:hover {
            background-color: #006fce;
          }
        }
      }
    }
  }
`
