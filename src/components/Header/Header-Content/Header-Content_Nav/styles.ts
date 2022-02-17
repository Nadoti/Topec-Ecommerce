import styled from "styled-components";

export const Lista = styled.ul`

  li {
    cursor: pointer;
    font-size: 1.125rem;
    color: var(--gray-700);
    position: relative;
    z-index: 1;

    & + li {
      margin-top: 2rem;
    }

    &.active::before {
      content: '';
      width: 40px;
      height: 9px;
      background: var(--green-800);
      position: absolute;
      bottom: 0;
      z-index: -1;
    }

    &:hover::before {
      content: '';
      width: 40px;
      height: 9px;
      background: var(--green-800);
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

`