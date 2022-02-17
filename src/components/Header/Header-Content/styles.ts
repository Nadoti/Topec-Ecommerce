import styled from "styled-components";

export const Container = styled.section`

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      max-width: 700px;
      margin-left: 5rem;

      h1 {
        font-size: 3rem;
        font-weight: 300;
        color: var(--gray-300);

        span {
          color: var(--green-500);
        }
      }
    }

    ul {
      margin: 40px 50px auto auto;
    }
  }

  .content-product {
    margin-top: 4rem;
    h2 {
      font-size: 15rem;
      color: var(--black-700);
      font-family: roboto;
      font-weight: 400;
    }
  }

  .content {
    display: flex;
    margin-top: 3rem;
  }

  .content-info {
    margin-top: 10rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid white;
    cursor: pointer;

    span {
      color: white;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 20px;
      margin-left: 10px;
    }
  }

  .content-details {
    display: block;
    text-align: center;
    margin-right: 5rem;

    h3 {
      font-size: 3rem;
      font-weight: 400;
      color: var(--gray-600);
      margin-bottom: .5rem;
    }

    span {
      font-size: 1.125rem;
      color: var(--black-300);
    }

    button {
      font-size: 1.5rem;
      padding: 15px 30px;
      border: none;
      border-radius: 5px;
      background: var(--green-300);
      margin-top: 2rem;
      font-family: roboto;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }


  
`

