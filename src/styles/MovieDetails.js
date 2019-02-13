import styled from 'styled-components';

export const MovieDetails = styled.div`
  @media (max-width: 767px) {
    transform: translateY(-10rem);
  }
`;

export const MovieWrapper = styled.div`
  position: relative;
  padding-top: 60vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0 5% 0;
  }
  > div {
    margin-left: 20px;
    @media (max-width: 767px) {
      margin: 0;
    }
  }
  img {
    position: relative;
    top: -5rem;
    height: 250px;
    width: 200px;
    object-fit: cover;

    @media (max-width: 767px) {
      top: -12rem;
      height: 200px;
      width: 0px;
    }
  }
`;
