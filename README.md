```markdown

# Mini Réseau Social – Backend  



## Description  

API RESTful pour l'application Mini Réseau Social, construite avec Node.js, Express et MongoDB.  



## Technologies  

- Node.js  

- Express  

- MongoDB (via Mongoose)  

- JWT 



## Prérequis  

- Node.js (version 20 ou plus récent)  

- MongoDB (local ou en ligne, ex : MongoDB Atlas)  



## Installation  

1. Clonez le dépôt :  

   ```bash

   git clone https://github.com/ibtissemkraiem/Social-Media-App-Backend.git

   cd Social-Media-App-Backend



2. Installez les dépendances :



npm install





3. Configurez les variables d’environnement dans un fichier .env :



PORT=5000

DATABASE_URL=mongodb+srv://[utilisateur]:[motdepasse]@cluster.mongodb.net/test

JWT_SECRET=your_secret_key





4. Lancez le serveur :



node server.js



L’API sera disponible sur : http://localhost:5000.



Endpoints
• POST /api/users/login : Login

• POST /api/users/login : Register

• GET /api/posts : Récupérer tous les posts

• POST /api/posts : Ajouter un nouveau post

• POST /api/posts/:id/like : Liker un post

• POST /api/posts/:id/comment : Ajouter un commentaire


