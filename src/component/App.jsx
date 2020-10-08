import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { allSocialJson } from "../data/social";

import { Section, SectionTitle, ContactOptions } from "./Section";
import Hero from "./Hero";
import HeroText from "./HeroText";
import Social from "./Social";
import Layout from "./Layout";
import Tarifs from "./Tarifs";
import Galerie from "./Galerie";
import LinkButton from "./LinkButton";

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Helmet title="Bigeard, Bois et Buches">
              <html lang="fr" />
              <meta
                name="description"
                content="bigeard bois et buches, Coupe Transforme et vend
                  bois de chauffage. Bois bûches coupée de 2 ans.
                  Chargement sur place (Orée d'Anjou 49530)
                  ou possibilité de livraison"
              />
            </Helmet>
            <Hero>
              <HeroText />
              <Social edges={allSocialJson} />
            </Hero>
            <Section dark>
              <ContactOptions>
                <h3 className="info">06 79 12 91 48</h3>
                <h3>ou</h3>
                <h3 className="info">06 75 79 52 86</h3>
              </ContactOptions>
              <LinkButton edges={allSocialJson}>Envoyer un email</LinkButton>
              <LinkButton call={"06 79 12 91 48"}>Appeler</LinkButton>
              <SectionTitle>Nos services</SectionTitle>
              <p>
                Coupe Transforme et vend <br /> bois de chauffage. Bois bûches
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
            <Section>
              <SectionTitle>Bigeard TP</SectionTitle>
              <p>
                3B c'est aussi
                <br /> du terrassement, de l'assainissement individuel
                <br />
                De la préparation paysagère <br /> ainsi que de la location de
                tractopelle/tracteur remorque avec chauffeur
              </p>
              <Galerie maxImages={5} />
            </Section>
          </Route>
        </Switch>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
