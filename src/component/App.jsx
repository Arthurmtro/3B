import React from "react";
import Helmet from "react-helmet";
import { Switch, Route } from "react-router-dom";

import { allSocialJson } from "../data/social";

import ImageForest from "../assets/wood.jpg";

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
          <Hero Image={ImageForest}>
            <HeroText homePage={true} />
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
