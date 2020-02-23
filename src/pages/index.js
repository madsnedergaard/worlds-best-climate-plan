import React from 'react';
import classNames from 'classnames';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ModalContext } from '../components/SupportModal';
import text from '../i18n/da';
import styles from './index.module.css';
import Separator from '../components/Separator';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { Link } from 'gatsby';

const theme = {
  offwhite: '#fbf2e6',
  offblack: '#032120',
};

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: ${props => (props.light ? theme.offwhite : theme.offblack)};
`;

const FeaturedSupporters = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${theme.offwhite};
  > * {
    margin: 0 0.5rem;
  }
`;
const Box = styled.div`
  margin: 1.25rem auto;
  max-width: 800px;
  border-radius: 2px;
  background-color: #fbf2e6;
  padding: 3rem 5rem 5rem;
  color: #141c1c;
  text-align: left;
  p {
    line-height: 1.5;
  }
  h2 {
    color: #141c1c;
    margin-bottom: 2rem;
  }
  a {
    color: ${theme.offblack};
  }
`;

const Index = () => {
  return (
    <Layout>
      <SEO title="Verdens Bedste klimaplan" description="" />
      <section className={classNames(styles.top, styles.frontpageTop)}>
        <div className={styles.topBackgroundImageOverlay} />
        <div className="container-large">
          <h1 className={styles.title}>Støt en ny dansk klimaskat</h1>
          <Subtitle light>
            Danmark skal have en afgift på varer der ødelægger klimaet.
            <br />
            Forureneren betaler og pengene gives tilbage til borgerne.
          </Subtitle>
          <ModalContext.Consumer>
            {openModal => (
              <div className={styles.ctas}>
                <Button onClick={openModal} large>
                  Skriv under nu&nbsp;&nbsp;✍️
                </Button>
              </div>
            )}
          </ModalContext.Consumer>
          <FeaturedSupporters>
            <strong>12/2-2020</strong>
            <p>LEGO, 3F og YouSee støtter Verdens Bedste Klimaplan</p>
            <Link>Se alle støtter</Link>
          </FeaturedSupporters>
          <Box>
            <h2>Der er brug for handling nu</h2>
            <p>
              Klimaforandringer har store konsekvenser for mennesker i hele
              verden i de næste årtier. I Danmark og i EU mærker vi allerede
              begyndende vejrforandringer og flygtningestrømme som er skabt af
              klimaændringerne.
            </p>
            <p>
              Det betyder at vores verden bliver mere usikker, og der er risiko
              for at det går ud over de svageste i samfundet. Derfor vil vi have
              en retfærdig klimaafgift som lader forureneren betale og giver
              pengene tilbage til dem, der bliver mest udsat i vores samfund.
            </p>
            <p>
              Klimaafgiften hjælper os også med at omstille det danske samfund
              til at forurene mindre. Vi skal reducere vores CO2-udledning med
              70 procent inden 2030, og for at vi kan nå det mål er der brug for
              gennemgribende tiltag. En bred klimaafgift vil gøre, at vi
              danskere gennem vores forbrug vil udlede mindre CO2. Det er en
              effektiv måde at skabe forandring.
            </p>
            <img src="/signature.png" alt="" />
            <p>Martin Collignon, stifter</p>
            <Link>Mød resten af holdet →</Link>
          </Box>
        </div>
      </section>
      <section>
        <div className={`container-large ${styles.section}`}>
          <h1>Sådan virker det</h1>
          <Subtitle>
            Danmark skal have en afgift på varer der ødelægger klimaet.
            <br />
            Forureneren betaler og pengene gives tilbage til borgerne.
          </Subtitle>
          <p>[HOW-IT-WORKS-BLOCK]</p>
        </div>
      </section>
      <section className={`container-large green ${styles.section}`}>
        <h1>[SUPPORTED-BY-BLOCK]</h1>
      </section>
      <section
        className={`container-large ${[styles.section, styles.carousels].join(
          ' '
        )}`}
      >
        <h1>[MENTIONED-IN-NEWS-BLOCK]</h1>
        <div className={styles.carousel}>
          <a
            href="https://www.information.dk/debat/2019/09/saet-afgifter-paa-former-klimabelastning-giv-pengene-tilbage-befolkningen"
            target="blank"
          >
            <img
              style={{ marginTop: 0 /* Fix alignment with logo */ }}
              src="/media/information.svg"
              height="24"
            />
          </a>
          <a
            href="https://www.berlingske.dk/videnskab/derfor-er-en-klimaskat-verdens-bedste-klimaloesning-og-noget-naer-umulig"
            target="blank"
          >
            <img src="/media/berlingske.svg" height="24" />
          </a>
          <a
            href="https://www.zetland.dk/historie/sekd5yZD-aOMNamWw-a2949"
            target="blank"
          >
            <img src="/media/zetland.png" height="24" />
          </a>
          {/* <a
                href="https://jyllands-posten.dk/debat/breve/ECE11492645/S%C3%A5dan-bliver-man-husket-i-historieb%C3%B8gerne-Dan-J%C3%B8rgensen/"
                target="blank"
              >
                <img src="/media/jp.svg" height="24" />
              </a> */}
          <a
            href="https://politiken.dk/klima/art7458992/S%C3%A5dan-bliver-markedsmekanismerne-og-den-frie-konkurrence-medspillere-i-klimakampen"
            target="blank"
          >
            <img src="/media/politiken.svg" height="18" />
          </a>
        </div>
      </section>

      <section className={`container-large  ${styles.section}`}>
        <h1>[SIGN-BLOCK]</h1>
      </section>
    </Layout>
  );
};

export default Index;
