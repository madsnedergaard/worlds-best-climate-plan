import React from 'react';
import { Link } from 'gatsby';
import text from '../../i18n/da';
import Separator from '../../components/Separator';
import styles from './index.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <Separator color="#F0F0F0" variant={2} />
    <div className="container-large">
      <div className="cols">
        <div className="col">
          <h4>Navigation</h4>
          <Link to="/">{text.title}</Link>
          <Link to="/the-plan">{text.moreAboutThePlan}</Link>
          <Link to="/behind-the-plan">{text.behindThePlan}</Link>
          <Link to="/privacy-policy">{text.cookiePrivacyPolicy}</Link>
        </div>
        <div className="col">
          <h4>{text.footer.organisations}</h4>
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
        <div className="col">
          <h4>{text.footer.contact}</h4>
          <a href="mailto:kontakt@verdensbedsteklimaplan.dk">
            kontakt@verdensbedsteklimaplan.dk
          </a>
        </div>
      </div>
      <p className={styles.copyright}>&copy; Verdens Bedste Klimaplan 2020</p>
    </div>
  </div>
);

export default Footer;
