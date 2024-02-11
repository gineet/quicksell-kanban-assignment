import { styled } from 'styled-components';

export const StyledTicketCard = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   border-radius: 8px;
   background: white;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
   padding: 0.75rem 1.25rem;

   /* Contains the Ticket ID and a photo of the assigned user */
   & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p {
      color: #9a9494;
      font-weight: 500;
      font-size: 0.9rem;
    }

    & img {
      width: 1.15rem;
      display: block;
    }
   }

   /* Ticket title styles */
   & > h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: .5rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
   }

   /* The last row that shows an icon and the associated tags */
   & > div:last-of-type {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    & img {
      width: 0.9rem;
      display: block;
    }

    /* Icon wrapper */
    & > div:first-of-type {
      padding: 4px;
      border-radius: 4px;
      background: #f0ecec;
    }

    /* Tags */
    & > p {
      font-size: 0.8rem;
      border: 1px solid rgb(205 205 205);
      padding: 0.15rem 0.25rem;
      border-radius: 5px;
    }
   }
`;