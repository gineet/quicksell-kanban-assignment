import { styled } from 'styled-components';

export const StyledSelect = styled.div`
  --border-color: rgba(0, 0, 0, 0.15);

  position: relative;
  border: 1px solid var(--border-color);
  font-size: 1rem;
  width: 8em;
  background: #fff;
  border-radius: 0.3rem;

  & p {
    font-weight: 500;
  }

  /* First Div - Displays the selected option along with caret icon */
  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.3rem;
    width: 100%;
    padding: 0.25rem 0.5rem;

    /* Caret icon */
    & > img {
      width: 1rem;
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(deg)'};
      transition: transform 0.1s ease-out;
    }
  }

  /* Second Div - contains all the options as its children */
  & > div:nth-of-type(2) {
    position: absolute;
    z-index: 100;
    left: -5px;
    top: 2.5rem;
    width: calc(100% + 10px);
    background: white;
    border-radius: 0.3rem;
    border: 1px solid var(--border-color);

    & > :not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
  }

  /* All the individual options of this select dropdown */
  & > div:nth-of-type(2) > div {
    padding: 0.35rem 0.7rem;
  }

  @media (hover: hover) {
    & > div:first-of-type:hover,
    & > div:nth-of-type(2) > div:hover {
      cursor: pointer;
      background: #efecec;
    }
  }
`;
