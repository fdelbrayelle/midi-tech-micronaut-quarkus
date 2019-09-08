// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Notes,
  Appear,
  Code
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#fd8224',
    quaternary: '#CECECE',
    quinary: 'yellow'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  tux: require("./images/tux.png"),
  micronaut: require("./images/micronaut.png"),
  quarkus: require("./images/quarkus.png"),
  graalvm: require("./images/graalvm.png"),
  stgraal: require("./images/stgraal.png"),
  quarkusBenchmark: require("./images/quarkus-benchmark.png"),
  fromMonolith: require("./images/from-monolith.png"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Midi tech
          </Heading>
          <Text margin="10px 0 0" textColor="quinary" size={1} fit bold>
            Micronaut et Quarkus : l'avenir du monde Java ?
          </Text>
          <Text margin="200px 0 0" textColor="primary" textSize="24" bold>
            François Delbrayelle (@fdelbrayelle)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Bienvenue !
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Midis techniques S03E05</ListItem>
            <Appear><ListItem margin="30px 0 0">Vous aussi vous pouvez en faire ;-) !</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Présentation puis démo</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0" textColor="green" bold>Sondage : qui connaît GraalVM, Micronaut et/ou Quarkus ?</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>Mon dernier avant mon départ</li>
              <li>Rappel des précédents sujets : Java 13 sort ce mois-ci (septembre 2019) !</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Vers l'infini et... ?
          </Heading>
          <Image margin="75px 75px" src={images.fromMonolith}></Image>
          <Notes>
            <ul>
              <li>Exemple : 1 monolithe ~ 20 microservices ~ 200 functions</li>
              <li>Pour les microservices la taille mémoire compte plus que le temps de démarrage. C’est l’inverse pour les fonctions</li>
              <li>Pour les fonctions serverless d’autres langages que Java sont aujourd’hui mieux adaptés : Node, Go voire Python</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image margin="75px 175px" src={images.graalvm}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Virtual Machine universelle</ListItem>
            <Appear><ListItem margin="30px 0 0">Polyglotte : Java, Kotlin,  JS, Python...</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Oracle (https://github.com/oracle/graal)</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Licence GPLv2 (Community Edition)</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Version 19.2.0 (août 2019)</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>Version majeure 19.0 considéré comme mature depuis sa sortie par ses développeurs en mai 2019</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <Appear><ListItem margin="60px 0 0">Extension de la JVM</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Compilation JVM et AOT</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Élimination du code mort</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0" textColor="green" bold>AOT = permet images natives</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0" textColor="red" bold>Expérimental</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Le Saint-GraalVM ?
          </Heading>
          <Image margin="75px 300px" src={images.stgraal} height="600px"></Image>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image margin="75px 175px" src={images.micronaut}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Framework polyglotte (Java, Kotlin, Groovy)</ListItem>
            <Appear><ListItem margin="30px 0 0">Développé par OCI (objectcomputing.com)</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Licence Apache 2.0</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">https://github.com/micronaut-projects</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Version 1.2.1 (6 septembre 2019)</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>OCI a fait Grails</li>
              <li>170 issues, 26 releases, 147 contributeurs</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Caractéristiques
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Temps de démarrage fortement réduit</ListItem>
            <Appear><ListItem margin="30px 0 0">Empreinte mémoire minimale</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Adapté aux microservices et au serverless</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Injection de dépendances + AOP - reflection = adapté pour images natives GraalVM</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Reprend le meilleur de Spring Boot (auto-configuration) et Grails (convention over configuration)</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Commande <Code>mn</Code></ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>OCI a fait Grails (framework MVC un peu à la Ruby on Rails mais avec Groovy)</li>
              <li>Empreinte mémoire faible du fait de que les classes sont compilées en avance</li>
              <li>Temps de compilation et de lancement très réduits = adapté au serverless (ou tout du moins commence à s'adapter)</li>
              <li>Injection de dépendance à la compilation et non au runtime comme beaucoup de frameworks utilisant la reflection et les proxies</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image margin="75px 175px" src={images.quarkus}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Supersonic Subatomic Java</ListItem>
            <Appear><ListItem margin="30px 0 0">Développé par Red Hat</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Licence Apache 2.0</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">https://github.com/quarkusio/quarkus</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Version 0.21.2 (5 septembre 2019)</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>576 issues, 30 releases, 144 contributeurs</li>
              <li>mvn compile quarkus:dev (pour le développement), pourquoi subatomic subsonic java ?</li>
              <li>Temps de démarrage rapide, faible empreinte mémoire, applications légères</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Image margin="0 0" src={images.quarkusBenchmark} width="200%"></Image>
          <Notes>
            <ul>
              <li>Taille RSS (Resident Set Size ~ RAM) : Quarkus + GraalVM = 13 Mo ; Quarkus + OpenJDK = 74 Mo ; Cloud-native stack traditionnelle : 150 Mo</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Kubernetes native, container first</ListItem>
            <Appear><ListItem margin="30px 0 0">Adapté à GraalVM</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Compatible avec les librairies</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Unifie impératif et réactif</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Expérience de développement améliorée</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>Temps de démarrage rapide, faible empreinte mémoire, applications légères</li>
              <li>Adapté au 12factor : éviter de s'occuper des services annexes et se concentrer sur le code pour mieux le scaler (déléguer cela à des backends externes), formats déclaratifs pour l'automatisation des installations/déploiements, minimiser les divergences entre environnements, ... 12factor.net</li>
              <li>"Joie du développeur" de coder dans cet écosystème : configuration unifiée dans un seul fichier, live reload, ...</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Démo !</Heading>
          <Image margin="75px 325px" src={images.tux} height="300px"></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
          https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus/tree/master/demo
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            En conclusion
          </Heading>
          <List>
            <ListItem margin="60px 0 0">GraalVM prêt pour la production...</ListItem>
            <Appear><ListItem margin="30px 0 0">...mais images natives expérimentales</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Micronaut et Quarkus tirent la communauté</ListItem></Appear>
            <Appear><ListItem margin="30px 0 0">Énormément de contributions en open-source</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Liens utiles
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Micronaut : https://micronaut.io/</ListItem>
            <ListItem margin="30px 0 0">Micronaut pour GraalVM : https://docs.micronaut.io/latest/guide/index.html#graal</ListItem>
            <ListItem margin="30px 0 0">Quarkus : https://quarkus.io/</ListItem>
            <ListItem margin="30px 0 0">Micronaut (DevFest juin 2019) : https://youtu.be/dsuANdSstX0</ListItem>
            <ListItem margin="30px 0 0">Quarkus (DevFest juin 2019) : https://youtu.be/u3OibzgB9uI</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Merci !</Heading>
          <Image margin="75px 325px" src={images.tux} height="300px"></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
          https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus
          </Text>
          <Notes>
            Faire un ROTI (de 0 à 5) !
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
