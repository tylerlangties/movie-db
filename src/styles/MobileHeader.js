import styled from 'styled-components';

export const MobileHeader = styled.div`
  transition: background-color 300ms ease-in;
  color: white;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  height: 56px;
  padding: 0 3rem;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  .nav-button {
    i {
      font-size: 1.5rem;
      &:hover {
        cursor: pointer;
        color: #e5e5e5;
      }
    }
  }
  .open {
    transform: translateX(0px) !important;
  }
  .mobile_nav {
    height: 100%;
    right: 0;
    transition: all 300ms ease-in-out;
    transform: translateX(500px);
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    .mobile_nav__header {
      padding-left: 2rem;
      i {
        margin-left: 1rem;
        &:hover {
          color: #e5e5e5;
          cursor: pointer;
        }
      }
    }
    .mobile_nav__list {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .mobile_nav__list-item {
        padding: 2rem;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #e5e5e5;
    }
  }
`;
