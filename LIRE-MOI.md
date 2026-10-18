# Modifier le portfolio

Ouvrir **index.html** dans un navigateur pour consulter le site. Ouvrir ce dossier entier dans VS Code pour le modifier.

## Où modifier quoi ?

- `index.html` : présentation personnelle, recherche de stage et liste des projets
- `projets/nom-du-projet/index.html` : texte et figures de chaque projet
- `projets/nom-du-projet/assets/` : images de ce projet
- `documents/Quentin_Le_Tanou_CV.pdf` : CV proposé au téléchargement
- `style.css` : présentation de l’accueil ; chaque projet possède également son propre style

## Modifier un texte

Les commentaires `<!-- SECTION : ... -->` permettent de retrouver une partie. Le texte d’un paragraphe se trouve entre `<p>` et `</p>`. Les titres sont entre `<h1>`, `<h2>` ou `<h3>` et leur balise de fermeture. Les légendes sont entre `<figcaption>` et `</figcaption>`.

Modifier seulement le texte, enregistrer avec Ctrl+S, puis actualiser le navigateur avec Ctrl+R. Les retours à la ligne du fichier servent à faciliter la lecture du code ; le navigateur répartit automatiquement le texte selon la largeur de l’écran.

Pour ajouter un paragraphe, copier un bloc `<p>...</p>`. Pour changer une image, modifier **src** et **data-image** avec le même chemin, puis actualiser sa légende et son texte **alt**. Ne pas renommer les dossiers sans modifier les liens correspondants.

## CV et publication

Le PDF inclus est la version 6 disponible dans cette conversation. Il contient encore la mention « lien à compléter » pour le portfolio. Remplacer le PDF par ta version finale en conservant le même nom de fichier permet de garder les liens existants.

Le site fonctionne localement et n’est pas publié. Ce dossier contient les huit projets retenus ; Abaqus reste archivé séparément. La publication pourra porter sur tout le contenu de ce dossier.

Les versions autonomes précédentes restent dans les dossiers portfolio-... à côté de celui-ci. À partir de maintenant, modifier de préférence les fichiers de **portfolio-site** : c’est la version réunie du site. Ne pas relancer les anciens générateurs sur des pages retouchées manuellement.
