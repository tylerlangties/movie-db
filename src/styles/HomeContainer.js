import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 6rem 1rem 1rem;
  max-width: 90vw;
  margin: 0 auto;
  .row-header-title {
    display: flex;
    justify-content: flex-start;
    h2 {
      color: #e5e5e5;
      padding: 0 2rem;
      margin: 0;
    }
  }
  img {
    display: inline;
    transition: transform 200ms ease;
    z-index: 100;
    @media (min-width: 1000px) {
      &:hover {
        transform: scale(1.1);
      }
    }
    @media (max-width: 776px) {
      img {
        width: 100px;
      }
    }
  }
  @media (max-width: 996px) {
    max-width: 95vw;
  }
`;
