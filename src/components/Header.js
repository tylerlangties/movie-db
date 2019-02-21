import React from 'react';
import SearchForm from './SearchForm';
import { HeaderWrapper } from '../styles/HeaderWrapper';
import { MobileHeader } from '../styles/MobileHeader';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    color: 'transparent',
    navIsOpen: false,
    windowWidth: null
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  navToggleClickHandler = () => {
    this.setState(prevState => {
      return { navIsOpen: !prevState.navIsOpen };
    });
  };

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
    console.log(this.state.windowWidth);
  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ color: 'rgba(0, 0, 0, 0.90' });
    } else {
      this.setState({ color: 'transparent' });
    }
  };

  render() {
    const { windowWidth } = this.state;

    let mobile_nav = 'mobile_nav';
    if (this.state.navIsOpen) {
      mobile_nav = 'mobile_nav open';
    }
    return windowWidth >= 992 ? (
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
      </div>
    ) : (
      <MobileHeader style={{ backgroundColor: this.state.color }}>
        <div>
          <Link to="/">
            <h3 className="mobile-heading">MDB</h3>
          </Link>
        </div>
        <div className="nav-button" onClick={this.navToggleClickHandler}>
          <i className="fas fa-bars" />
        </div>
        <div className={mobile_nav}>
          <h3 className="mobile_nav__header">
            <Link to="/">Movie DB</Link>
            <i
              onClick={this.navToggleClickHandler}
              className="far fa-times-circle"
            />
          </h3>
          <ul className="mobile_nav__list">
            <li className="mobile_nav__list-item">
              <Link to="/" onClick={this.navToggleClickHandler}>
                Home
              </Link>
            </li>
            <li className="mobile_nav__list-item">
              <Link to="/featured-shows" onClick={this.navToggleClickHandler}>
                TV Shows
              </Link>
            </li>
            <li className="mobile_nav__list-item">
              <Link to="/now-trending" onClick={this.navToggleClickHandler}>
                Now Trending
              </Link>
            </li>
          </ul>
        </div>
      </MobileHeader>
    );
  }
}

export default Header;
