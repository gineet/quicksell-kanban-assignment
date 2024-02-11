import { styled } from 'styled-components';

export const StyledKanban = styled.div`  
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* Header containing the grouped filters */
  & > header {
    padding: 1.5rem 2.5rem;
  }

  /* Main body that renders the board */
  & > main {
    flex: 1;
    background: #f8f8f9;
    display: flex;
    padding: 3rem 2.5rem;
    gap: 3rem;
    overflow-x: scroll;

    /* Specifying the widths of the Kanban Columns that are rendered */
    & > div {
      flex: 0 0 calc(20% - 2.5rem);
    }
  }

  @media only screen and (max-width: 1600px) {
    & > header {
      padding: 1.5rem 2rem;
    }
    
    & > main {
      padding: 3rem 2rem;
      gap: 2.5rem;

      & > div {
        flex: 0 0 calc(25% - 1.75rem);
      }
    }
  }

  @media only screen and (max-width: 1290px) {
    & > header {
      padding: 1.5rem 2rem;
    }
    
    & > main {
      padding: 2.5rem 2rem;
      gap: 2.25rem;

      & > div {
        flex: 0 0 calc(33% - 1rem); 
      }
    }
  }

  @media only screen and (max-width: 950px) {
    & > header {
      padding: 1.5rem;
    }
    
    & > main {
      padding: 2.5rem 1.5rem;
      gap: 1.5rem;

      & > div {
        flex: 0 0 calc(50% - 0.75rem);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    & > header {
      padding: 1.5rem;
    }

    & > main {
      padding: 2.5rem 1.5rem;

      & > div {
        flex: 0 0 100%;
      }
    }
  }
`;
