import { styled } from 'styled-components';

export const StyledKanbanColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* The header of the column, basically title and the icons */
  & > div:first-of-type {
    display: grid;
    grid-template-columns: min-content auto min-content 1fr repeat(2, min-content);
    align-items: center;
    gap: 1rem;

    & > img {
      width: 1.15rem;
    }

    /* Wrapped the first image in dev, to be able to add a pseudo element that indicates user availability */
    & > div:first-of-type {
      position: relative;

      &::before {
        display: ${({ $isGroupedByUser }) => $isGroupedByUser ? 'block' : 'none'};
        content: '';
        position: absolute;
        bottom: -1px;
        right: -1px;
        height: 0.5rem;
        width: 0.5rem;
        background: ${({ $isUserAvailable }) => $isUserAvailable ? 'green' : 'grey'};
        border-radius: 50%;
      }

      & > img {
        width: 1.15rem;
        display: block;
      }
    }

    /* Title of the column */
    & > h4 {
      font-weight: 500;
    }

    & > p {
      color: #9a9494;
    }
  }

  /* The bottom div that renders the tickets */
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

