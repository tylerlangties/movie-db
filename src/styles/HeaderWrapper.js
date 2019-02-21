import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  transition: background-color 250ms ease-in;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  margin: 0 auto;
  height: 56px;
  z-index: 200;
  padding: 0 3rem 0 2rem;
  .header-title {
    color: white;
    margin: 0;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    text-decoration: none;
    text-transform: uppercase;
  }
  .header-content {
    width: 100%;
    ul {
      margin: 0;
    }
    a {
      text-decoration: none;
    }
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1650px;
    padding: 0 1rem;
    @media (max-width: 950px) {
      /* display: none; */
    }
  }
  .navigation-left {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      list-style: none;
      li {
        a {
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
          font-size: 0.75rem;
          text-decoration: none;
        }
      }
    }
  }
`;
