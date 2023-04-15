# START POSTRGRES
> Démarer postgres
>`sudo /etc/init.d/postgresql start`

>Pour vous connecter à une base de données PostgreSQL en utilisant l'utilisateur "postgres"
`psql -U postgres -d nom_de_la_base_de_donnees`

> injecter la base de donée dans notre  base create_db crée avec l'utilisateur
`psql -U yves -d create_db -f data\film_db.sql ` 
>attention au `\` qui est en `Windows`


>Les status de tout les services
`service --status-all`
>le status du service postgres
``sudo service postgresql status``

>acceder a notre base de donée en ligne de commande
``psql -U yves -d db_films``

## Definition des notions

>Un `contrôleur` en JavaScript est un bloc de code qui est responsable de la logique métier d'une application web. Il est généralement utilisé dans les frameworks JavaScript tels que AngularJS ou ReactJS pour gérer les interactions entre la vue et le modèle de données.