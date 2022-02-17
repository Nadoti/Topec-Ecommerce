import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  text-align: center;
  padding-top: 5rem;
  border-right: 1px solid var(--gray-900);

  ul {
    margin-top: 6rem;
  }

  li {
    & + li {
      margin-top: 3rem;
    }

    a {
      color: var(--gray-400);
      font-size: 1.5rem;
    }
  }
`