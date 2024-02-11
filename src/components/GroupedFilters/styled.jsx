import { styled } from 'styled-components';

export const StyledGroupFilters = styled.div`
  position: relative;
  box-shadow: 0 0 1px 2px rgba(0,0,0,0.1);
  border-radius: 6px;
  width: 8em;

  /* The grouped filter root, opens a popup of sub filters */
  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.3rem;
    width: 100%;
    padding: 0.35rem 0.7rem;

    /* Icon on the left */
    & > img {
      width: 1rem;
    }

    /* Name of the root filter */
    & p {
      font-weight: 500;
    }

    /* Icon on right of the root filter name */
    & > p + img {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(deg)'};
      transition: transform 0.1s ease-out;
    }
  }

  /* The popup containing the sub-filters of this root filter */
  & > div:nth-of-type(2) {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 3rem;
    padding: 1.5rem 1.5rem;
    background: #f8f8f9;
    border-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    display: grid;
    gap: 1rem 5rem;
    grid-template-columns: repeat(2, max-content);
    align-items: center;

    /* Name / Title of the sub-filter */
    & > p {
      font-weight: 500;
      color: #737376;
    }

    @media only screen and (max-width: 370px) {
      gap: 1rem 2rem;
    }
  }

  @media (hover: hover) {
    & > div:first-of-type:hover {
      cursor: pointer;
      background: #efecec;
    }
  }
`;
