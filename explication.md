# API piscines

## Explications

Ce projet est une API developpée avec ExpressJs, nodeJs, MongoDB et Redis qui permet d'effectuer des opérations sur des piscines publiques.

## Structure du projet

Le projet se découpe en plusieurs dossiers :

- controller : il gère la logique de l'API et communique avec une base de donnée MongoDB.
- Model : il définit la structure des données à utiliser.

Le fichier database crée une instance de la base de donnée MongoDB afin de le réutiliser dans le projet.
Le fichier router liste les routes à atteindre.

## Liste des routes et test des routes

GET /piscines => liste toutes les piscines
GET /piscine/:nom => liste une piscine spécifique grâce à son nom
POST /piscines => ajoute une piscine en précisant le nom, l'adresse et le téléphone.
PATCH /piscines/:nom => modifie une piscine en précisant les champs à modifier dans la requête.
DELETE /piscines/:nom => supprimer la piscine de la base de données liée à son nom.

Les routes sont testées avec un fichier api.http

## Méthodes

Les méthodes liées aux routes sont les suivantes :

- findAll() afin de récupérer toutes les routes
- findById() afin de récupérer un enregistrement avec son nom
- create() afin de créer un enregistrement
- update() afin de mettre à jour l'enregistrement
- delete() afin de supprimer l'enregistrement

## Mise en cache

La base de données Redis permet de mettre en cache les données des requêtes afin d'optimiser le rendu des données et d'éviter de refaire des appels vers la base.
Le cache est appelé dans les routes.


### TODO 

- Vérifier API REST structures
- Mise en place du cache Redis
- Séparation des différents élements de l'API REST (SOC)