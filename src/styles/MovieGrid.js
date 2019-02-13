import styled from 'styled-components';

export const MovieGrid = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  max-width: 1650px;
  @media (max-width: 1450px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0.5rem;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.5rem;
  }
  img {
    display: inline;
    transition: transform 200ms ease;
    z-index: 100;
    @media (min-width: 776px) {
      &:hover {
        transform: scale(1.1);
      }
    }
    /* @media (max-width: 776px) {
      transform: scale(0.6);
    } */
  }
`;
