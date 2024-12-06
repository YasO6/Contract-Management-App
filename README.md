# Gestion Simplifiée de Contrats d’Assurance

## Description

Une application web permettant de gérer des contrats d'assurance avec une interface utilisateur simple. Elle inclut des fonctionnalités de création, modification et suppression de contrats d'assurance et de clients, le tout dans une architecture basée sur le stack PERN (PostgreSQL, Express, React, Node.js).

### Fonctionnalités

- **Gestion des contrats :**
  - Création, modification et suppression de contrats d’assurance (CRUD).
  - Chaque contrat comprend un numéro unique, un type d’assurance (santé, auto, habitation), une date de début et de fin, et une prime annuelle.
  
- **Gestion des clients :**
  - Ajout, modification et suppression de clients (CRUD).
  - Chaque client a un identifiant unique, un nom, une adresse, et une liste de contrats associés.

- **Interface Utilisateur :**
  - Interface intuitive pour visualiser la liste des contrats par client.
  - Tableau affichant les informations principales sur les contrats.

---

## Stack Technique

- **Frontend :** React.js, avec le template Argon Design System React pour une interface moderne et esthétique.
- **Backend :** Node.js avec Express pour la logique métier et les API REST.
- **Base de données :** PostgreSQL pour le stockage et la gestion des données.
- **Gestion des environnements :** dotenv


## Prérequis

- **Node.js** et **npm** installés (pour le backend et le frontend).
- **PostgreSQL** configuré et en cours d'exécution.

Si vous n'avez pas encore ces outils, vous pouvez les installer comme suit :
- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

# Vérifiez les installations avec les commandes suivantes :

```bash
node -v
npm -v
psql --version
``` 
# Installation
1. Cloner le dépôt

 - git clone <https://github.com/YasO6/Contract-Management-App.git>
 - cd <Contract-Management-App>

2. Installer les dépendances

## Backend :

```bash
cd server
npm install
```
## Frontend :

```bash
cd client/argon-design-system-react-master
npm install

```

3. Configurer la base de données PostgreSQL

Créez une base de données appelée "gsca-app" ou modifiez les paramètres dans le fichier .env comme décrit ci-dessous.
Exécutez les migrations ou créez manuellement les tables nécessaires.

4. Configurer les variables d'environnement
Dans le dossier server, créez un fichier .env avec les informations suivantes :

```bash

DB_HOST=localhost
DB_PORT=5432
DB_NAME=gsca_app
DB_USER=postgres
DB_PASSWORD=db-password
```

# Lancer l'application

## Démarrez le backend :

```bash

cd server
npm start

```

## Démarrez le frontend :

```bash
cd client/argon-design-system-react-master
npm start
```

Ouvrez votre navigateur et accédez à http://localhost:3000 pour utiliser l'application.


