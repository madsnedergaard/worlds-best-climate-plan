import React from 'react';
import { Link } from 'gatsby';
import styles from './index.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={`container-large ${styles.footerInner}`}>
      <div className={`cols ${styles.footerCols}`}>
        <div className={`col ${styles.footerCol}`}>
          <Link to="/">Hjem</Link>
          <Link to="/the-plan">Om planen</Link>
          <Link to="/">Støtter</Link>
          <Link to="/behind-the-plan">Om os</Link>
        </div>
        <div className={`col ${styles.footerCol}`}>
          <a href="https://www.klimabevaegelsen.dk/" target="blank">
            Klimabevægelsen
          </a>
          <a href="https://www.dgsb.dk/" target="blank">
            Den Grønne Studenter Bevægelse
          </a>
          <a href="https://citizensclimatelobby.org/" target="blank">
            Citizen&apos;s Climate Lobby
          </a>
        </div>
        <div className={`col ${styles.footerCol}`}>
          <a href="mailto:kontakt@verdensbedsteklimaplan.dk">
            kontakt@verdensbedsteklimaplan.dk
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
