import { useEffect, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';

import logo from '@/assets/logo.svg';
import hamburger from '@/assets/icon-hamburger.svg';
import hamburgerClose from '@/assets/icon-close.svg';

import headerData from '@/data/header.json';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    if (isDesktop && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }

    const body = document.body;
    const shouldScrollLock = !isDesktop && isMobileNavOpen;

    body.classList.toggle('no-scroll', shouldScrollLock);

    return () => body.classList.remove('no-scroll');
  }, [isDesktop, isMobileNavOpen]);

  const handleClick = () => {
    setIsMobileNavOpen((curr) => !curr);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav container">
          <div className="header__menu-item header__menu-item--logo">
            <a href="#" className="header__logo">
              <img src={logo} alt="manage logo" />
            </a>
          </div>
          <div className="header__menu-item header__menu-item--nav">
            {headerData.map((item, index) => (
              <a href={item.link} key={index} className="header-menu-link">
                {item.label}
              </a>
            ))}
          </div>
          <div className="header__menu-item header__menu-item--buttons">
            <a href="#" className="button button--primary">
              Get Started
            </a>
            <button className="header__hamburger" onClick={handleClick}>
              <img
                src={!isMobileNavOpen ? hamburger : hamburgerClose}
                alt="hamburger"
              />
            </button>
          </div>
        </nav>
      </header>
      <div className="nav-modal" aria-hidden={!isMobileNavOpen}>
        <div className="nav-modal__container">
          {headerData.map((item, index) => (
            <a href={item.link} key={index} className="nav-modal-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
