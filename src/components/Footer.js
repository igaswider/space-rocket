import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav--ul">
          <li className="footer__nav--li footer__nav--first-li">
            follow spacex
          </li>
          <span className="footer__nav--orn">|</span>
          <li className="footer__nav--li">
            <a href="/">twitter</a>
          </li>
          <li className="footer__nav--li">
            <a href="/">youtube</a>
          </li>
          <li className="footer__nav--li">
            <a href="/">flickr</a>
          </li>
          <li className="footer__nav--li">
            <a href="/">instagram</a>
          </li>
        </ul>
      </nav>
      <div className="footer__right">
        <p className="footer__right--par">
          2018 space exploration technologies corp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
