import React from "react";
import Helmet from "react-helmet";
import { Switch, Route } from "react-router-dom";

import { allSocialJson } from "../data/social";

import { Section, SectionTitle } from "./Section";
import Hero from "./Hero";
import HeroText from "./HeroText";
import Social from "./Social";
import Layout from "./Layout";
import Tarifs from "./Tarifs";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Helmet title="Bigeard, Bois et Buches">
            <html lang="fr" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
          </Helmet>
          <Hero>
            <HeroText />
            <Social edges={allSocialJson} />
          </Hero>
          <Section dark>
            <SectionTitle>Nos services</SectionTitle>
            <p>
              Coupe Transforme et vends <br /> bois de chauffage. Bois bûches
              coupée de 2 ans. <br /> <br />
              Chargement sur place (Orée d'Anjou) <br />
              ou possibilité de livraison <br />
              Devis gratuit.
            </p>
          </Section>
          <Section dark id="tarifs">
            <SectionTitle>Tarifs</SectionTitle>
            <Tarifs />
          </Section>
        </Route>
        <Route exact path="/tp">
          <Helmet title="tps">
            <html lang="fr" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
          </Helmet>
          <Section dark>
            <SectionTitle>Nos services</SectionTitle>
            <p>
              Coupe Transforme et vends <br /> bois de chauffage. Bois bûches
              coupée de 2 ans. <br /> <br />
              Chargement sur place (Orée d'Anjou) <br />
              ou possibilité de livraison <br />
              Devis gratuit.
            </p>
          </Section>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
