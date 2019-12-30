import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import text from '../i18n/da';
import styles from './index.module.css';

const Index = () => {
  return (
    <Layout>
      <div className={styles.top}>
        <div className="container">
          <img className={styles.logo} src="/earth.svg" />
          <h1>{text.title}</h1>
          <h3 className={styles.subTitle}>{text.subtitle}</h3>
        </div>
        <div className={styles.ctas}>
          <Button>Støt som person</Button>
          <Button stroke>Støt som organisation</Button>
        </div>
      </div>
      <section className={styles.carousels}>
        <h4>Støttet af</h4>
        <div className={styles.carousel}>
          {/* All images are #000 black */}
          <a href="https://www.klimabevaegelsen.dk/" target="blank">
            <img src="/supporters/350.svg" height="90" />
          </a>
          <a href="https://www.dgsb.dk/" target="blank">
            <img src="/supporters/dgs.png" width="150" height="80" />
          </a>
          <a href="https://citizensclimatelobby.org/" target="blank">
            <img src="/supporters/ccl.png" width="131" height="100" />
          </a>
        </div>
        <h4>Nævnt i</h4>
        <div className={styles.carousel}>
          <a
            href="https://www.information.dk/debat/2019/09/saet-afgifter-paa-former-klimabelastning-giv-pengene-tilbage-befolkningen"
            target="blank"
          >
            <img
              style={{ marginTop: 0 /* Fix alignment with logo */ }}
              src="/media/information.svg"
              height="30"
            />
          </a>
          <a
            href="https://www.berlingske.dk/videnskab/derfor-er-en-klimaskat-verdens-bedste-klimaloesning-og-noget-naer-umulig"
            target="blank"
          >
            <img src="/media/berlingske.svg" height="30" />
          </a>
          <a
            href="https://www.zetland.dk/historie/soNVDq4b-ae6XddK5-15a74"
            target="blank"
          >
            <img src="/media/zetland.png" height="30" />
          </a>
          <a
            href="https://jyllands-posten.dk/debat/breve/ECE11492645/S%C3%A5dan-bliver-man-husket-i-historieb%C3%B8gerne-Dan-J%C3%B8rgensen/"
            target="blank"
          >
            <img src="/media/jp.svg" height="30" />
          </a>
        </div>
      </section>
      <section className={styles.brief}>
        <h2>Kort om verdens bedste klimaplan</h2>
        <div className={styles.briefItems}>
          <div className={styles.briefItem}>
            <p>Loremp ipsum</p>
          </div>
          <div className={styles.briefItem}>
            <p>Loremp ipsum</p>
          </div>
          <div className={styles.briefItem}>
            <p>Loremp ipsum</p>
          </div>
        </div>
      </section>
      <section className="container">
        <h2>FAQ</h2>
        {text.faq.map(([question, answer], i) => (
          <div key={i}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Index;
