import React from "react";
import Helmet from "react-helmet";
import { Switch, Route } from "react-router-dom";

import { allSocialJson } from "../data/social";

import { Section, SectionTitle, ContactOptions } from "./Section";
import Hero from "./Hero";
import HeroText from "./HeroText";
import Social from "./Social";
import Layout from "./Layout";
import Tarifs from "./Tarifs";
import Galerie from "./Galerie";

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
            <ContactOptions>
              <h3 className="info">06 79 12 91 48</h3>
              <h3>ou</h3>
              <h3 className="info">06 75 79 52 86</h3>
            </ContactOptions>
            <p>
              Coupe Transforme et vends <br /> bois de chauffage. Bois bûches
              coupée de 2 ans. <br /> <br />
              Chargement sur place (Orée d'Anjou) <br />
              ou possibilité de livraison <br />
              Devis gratuit.
            </p>
            <Galerie maxImages={3} />
          </Section>
          <Section dark id="tarifs">
            <SectionTitle>Tarifs</SectionTitle>
            <Tarifs />
          </Section>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
