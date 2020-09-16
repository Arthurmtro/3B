import React from "react";
import { Switch, Route } from "react-router-dom";

import { allSocialJson } from "../data/social";

import { Section, SectionTitle } from "./Section";
import Hero from "./Hero";
import HeroText from "./HeroText";
import Social from "./Social";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
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
            <p>image ou dessin des tarifs</p>
          </Section>
        </Route>
        <Route exact path="/tp">
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
