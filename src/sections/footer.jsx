import { FooterBanner } from '@/components/footer-banner';
import { Newsletter } from '@/components/newsletter';

import { ApplicationLogo } from '@/components/icons/application-logo';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import { PinterestIcon } from '@/components/icons/pinterest-icon';
import { TwitterIcon } from '@/components/icons/twitter-icon';
import { YoutubeIcon } from '@/components/icons/youtube-icon';

import footerData from '@/data/footer.json';

function Footer() {
  return (
    <footer className="footer">
      <FooterBanner />
      <div className="container">
        <div className="contact-row">
          <div className="footer__newsletter">
            <Newsletter />
          </div>
          <div className="footer__nav">
            <div className="left">
              {footerData.primary.map((item, index) => (
                <a href={item.link} key={index} className="footer-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="right">
              {footerData.secondary.map((item, index) => (
                <a href={item.link} key={index} className="footer-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__socials">
              <a
                href="#"
                className="footer-social-link"
                aria-label="facebook link"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="youtube link"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="twitter link"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="pinterest link"
              >
                <PinterestIcon />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="instagram link"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="footer__logo">
              <ApplicationLogo variant="light" />
            </div>
          </div>
          <p className="footer__copyright">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
