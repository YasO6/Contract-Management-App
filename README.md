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

- **Frontend :** React.js
- **Backend :** Node.js avec Express
- **Base de données :** PostgreSQL
- **Gestion des environnements :** dotenv


## Prérequis

- **Node.js** et **npm** installés (pour le backend et le frontend).
- **PostgreSQL** configuré et en cours d'exécution.

Si vous n'avez pas encore ces outils, vous pouvez les installer comme suit :
- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)


## Installation

### 1. Installation du Backend (server)

1. Clonez le projet
2. Configuration de l'environnement
Vous devez configurer les variables d'environnement pour le backend et le frontend.


