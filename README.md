# Midi technique - Micronaut et Quarkus

<p align="center"><img src="https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus/blob/master/slides/src/images/micronaut-github.jpg" width="50%" /></p>
<p align="center"><img src="https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus/blob/master/slides/src/images/quarkus-github.png" width="50%" /></p>

Ce dépôt contient les [slides](https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus/blob/master/slides) et la [démo](https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus/blob/master/demo) du midi technique effectué le mercredi 11 septembre 2019 chez Gfi Informatique.

Dans un premier temps, une présentation des frameworks __Micronaut__ et __Quarkus__ a été effectuée.

Une démo a été présentée pour créer des applications back simples dans chacun de ces deux frameworks.

Les supports peuvent être librement modifiés et réutilisés. Les slides ont également été [exportés au format PDF](https://github.com/fdelbrayelle/midi-tech-micronaut-quarkus/blob/master/slides/presentation.pdf).

## Étapes de la démo (GraalVM)

- Montrer le contenu du répertoire bin d'installation de GraalVM 19.2.0 : `ll $GRAALVM_HOME/bin`
- Se déplacer dans le dossier de la démo GraalVM : `cd demo/graalvm`
- Builder le projet : `mvn clean package` et le lancer pour le présenter : `java -jar target/graalvm-0.0.1-SNAPSHOT.jar`
- Générer une image native du projet avec `$GRAALVM_HOME/bin/native-image -jar target/graalvm-0.0.1-SNAPSHOT.jar`
- Lancer le projet avec `./graalvm-0.0.1-SNAPSHOT`

## Étapes de la démo (Micronaut)

- Se déplacer dans le dossier de la démo : `cd demo`
- Créer un projet Micronaut via la commande suivante basée sur [SDKMAN](https://sdkman.io/install) : `mn create-app fr.delbrayelle.micronaut -b maven` (Gradle peut également être utilisé, il l'est par défaut). Micronaut peut être mis à jour avec `sdk install micronaut`.
- Montrer la possibilité de créer des fédérations de projets avec `mn create-federation` pour rassembler des projets dans un même dossier
- Montrer la possibilité de lister les services à ajouter avec `mn profile-info service` et de montrer l'aide avec `mn help` (les projets existants peuvent être modifiés avec d'autres commandes comme `mn create-bean`, `mn create-controller`, ...)
- Se déplacer dans le dossier du projet : `cd micronaut`
- Ouvrir le projet dans un IDE : `idea . &`
- Ajouter une classe "GreetController" dans le package "micronaut" avec deux méthodes pour saluer : une en GET et une en POST (montrer les annotations @Controller, @Inject, @Get et @Post, possibilité également de faire du non bloquant en retournant des Mono et Flux de Reactor ou des Observable de RxJava). Il est possible d'indiquer ce que l'on consomme ou produit avec @Consumes ou @Produces. 
- Ajouter une classe service "GreetingService" dans le package "micronaut" (montrer l'annotation @Singleton)
- Ajouter une classe client "GreetingClient" dans le package "micronaut" (montrer l'annotation @Client) et une classe "GreetingClientTest" pour tester l'approche déclarative (noter l'usage du serveur embarqué EmbeddedServer)
- Ajouter une nouvelle classe de test GreetControllerTest annotée avec `@MicronautTest` et utilisant un `RxHttpClient` pour réaliser l'appel.
- Compiler avec `mvn compile` et lancer l'application avec `gio open http://localhost:8080/hello`
- Montrer l'approche programmatique en ajoutant une classe client "ConcreteGreetingClient"

Et la même chose mais en construisant une image native :

- Se déplacer dans le dossier de la démo : `cd demo`
- Créer un projet Micronaut via la commande suivante basée sur [SDKMAN](https://sdkman.io/install) : `mn create-app micronaut-graalvm --features graal-native-image -b maven`
- Montrer les différences avec la feature GraalVM : dépendances "svm" et "micronaut-graal", Dockerfile adapté...
- Packager l'application avec `./mvnw package` et créer l'image native avec `$GRAALVM_HOME/bin/native-image --no-server -cp target/micronaut-graalvm-0.1.jar`
- Lancer l'application avec `./micronaut-graalvm` et constater le temps de démarrage très bas

## Étapes de la démo (Quarkus)

- Se déplacer dans le dossier de la démo : `cd demo`
- Générer un nouveau projet Quarkus grâce à l'artifact maven suivant :

```
mvn io.quarkus:quarkus-maven-plugin:0.21.2:create \
    -DprojectGroupId=fr.delbrayelle \
    -DprojectArtifactId=quarkus \
    -DclassName="org.acme.quickstart.GreetingResource" \
    -Dpath="/hello"
```

- Montrer ce que contient le pom.xml ainsi que les deux Dockerfile (un pour la JVM classique, un pour GraalVM et les images natives)
- Ouvrir la classe "GreetingResource" générée via la commande maven
- Lancer l'application avec `./mvnw compile quarkus:dev` (permet en plus d'écouter un debugger sur le port 5005 par défaut)
- Vérifier que la ressource répond correctement avec `gio open http://localhost:8080/hello` ou `curl http://localhost:8080/hello`
- Montrer l'unique fichier de configuration "application.properties" (préconisation d'y placer toute la configuration)
- Créer un nouveau service "GreetingService" avec l'annotation @ApplicationScoped et l'injecter avec [@Inject](https://quarkus.io/blog/quarkus-dependency-injection/) dans la ressource pour l'utiliser dans un nouveau endpoint
- Vérifier (sans relancer la commande maven) que la ressource répond correctement avec `gio open http://localhost:8080/hello/greeting/Gfi` ou `curl http://localhost:8080/hello/greeting/Gfi` (l'application est rechargée à chaud)
- Ouvrir la classe de tests "GreetingResourceTest" (l'annotation [@QuarkusTest](https://quarkus.io/guides/tests-with-coverage-guide) permet de demander à JUnit de lancer l'application avant les tests)
- Packager l'application avec `./mvnw package` et lancer l'application avec `java -jar target/quarkus-1.0-SNAPSHOT-runner.jar`
- Vérifier que la ressource répond correctement avec `gio open http://localhost:8080/hello` ou `curl http://localhost:8080/hello`

Et la même chose mais en construisant une image native :

- Créer un exécutable natif avec `./mvnw package -Pnative` et le tester en le lançant : `./target/quarkus-1.0-SNAPSHOT-runner` (constater le temps de démarrage très bas)
- Vérifier que la ressource répond correctement avec `gio open http://localhost:8080/hello` ou `curl http://localhost:8080/hello`

En complément :

- Montrer le [générateur d'applications Quarkus](https://code.quarkus.io/) qui permet comme [Spring Initializr](https://start.spring.io/) de générer un squelette d'applications avec des dépendances choisies
- Lister les extensions Quarkus qu'il est possible d'ajouter avec `./mvnw quarkus:list-extensions` (il s'agit de simples dépendances dans le pom)
- En ajouter une pour voir avec `./mvnw quarkus:add-extension -Dextensions="hibernate-validator"`
- Il est possible de générer une application via JHipster uniquement avec le front (et donc sans back Spring Boot) avec `jhipster --skip-server`. Une [démonstration](https://github.com/devoxx/quarkusHipster) qu'il est possible de faire appel à un back développé en Quarkus et lancé via une image native a été faite par Stephan Janssen au Devoxx.
