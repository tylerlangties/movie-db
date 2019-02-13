import React from 'react';
import SearchForm from './SearchForm';
import { HeaderWrapper } from '../styles/HeaderWrapper';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    color: 'transparent'
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ color: 'rgba(0, 0, 0, 0.90' });
    } else {
      this.setState({ color: 'transparent' });
    }
  };

  render() {
    return (
      <div>
        <HeaderWrapper style={{ backgroundColor: this.state.color }}>
          <div className="header-content">
            <div className="navigation-left">
              <Link to="/">
                <h2 className="header-title">Movie DB</h2>
              </Link>
              <ul>
                <li>
                  <Link to="/">
                    <p className="header-title">Home</p>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/featured-shows">
                    <p className="header-title">TV Shows</p>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/now-trending">
                    <p className="header-title">Now Trending</p>
                  </Link>
                </li>
              </ul>
            </div>
            <SearchForm />
          </div>
        </HeaderWrapper>
        {/* <MobileNav>
          <ul className="mobile-nav__item-list">
            <li className="mobile-nav__item">
              <Link to="/">
                <p className="header-title">Home</p>
              </Link>
            </li>
            <li className="mobile-nav__item">
              <Link to="/">
                <p className="header-title">TV Shows</p>
              </Link>
            </li>
            <li className="mobile-nav__item">
              <Link to="/now-trending">
                <p className="header-title">Now Trending</p>
              </Link>
            </li>
          </ul>
        </MobileNav> */}
      </div>
    );
  }
}

export default Header;

// const MobileNav = styled.nav`
//   width: 30rem;
//   height: 100vh;
//   max-width: 90%;
//   position: fixed;
//   left: 0;
//   top: 0;
//   background: white;
//   z-index: 10;
//   padding: 2rem 1rem 1rem 2rem;
//   transform: translateX(-100%);
//   transition: transform 0.3s ease-out;

//   .mobile-nav.open {
//     transform: translateX(0);
//   }

//   .mobile-nav__item-list {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     margin: 0;
//     padding: 0;
//   }

//   .mobile-nav__item {
//     margin: 1rem;
//     padding: 0;
//   }

//   .mobile-nav__item a {
//     text-decoration: none;
//     color: black;
//     font-size: 1.5rem;
//     padding: 0.5rem 2rem;
//   }

//   .mobile-nav__item a:active,
//   .mobile-nav__item a:hover,
//   .mobile-nav__item a.active {
//     background: #00695c;
//     color: white;
//     border-radius: 3px;
//   }

//   #side-menu-toggle {
//     border: 1px solid white;
//     font: inherit;
//     padding: 0.5rem;
//     display: block;
//     background: transparent;
//     color: white;
//     cursor: pointer;
//   }

//   #side-menu-toggle:focus {
//     outline: none;
//   }

//   #side-menu-toggle:active,
//   #side-menu-toggle:hover {
//     color: #ffeb3b;
//     border-color: #ffeb3b;
//   }

//   .backdrop {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 5;
//     display: none;
//   }
// `;
