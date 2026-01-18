# Guide de Personnalisation du Site

Ce document vous guide pour personnaliser le contenu du site, notamment les informations des membres de l'équipe.

## 📸 Ajouter les Photos des Candidats

### Étape 1 : Préparer vos photos

1. Placez toutes les photos des candidats dans le dossier `imgs/`
2. Nommez-les de manière claire : `prenom-nom.jpg` (ex: `jean-dupont.jpg`)
3. Format recommandé : JPEG ou PNG
4. Taille recommandée : 800x800 pixels minimum (carré de préférence)

### Étape 2 : Modifier le fichier script.js

Ouvrez le fichier `script.js` et localisez l'objet `window.memberData` (vers la ligne 162).

Pour chaque membre, modifiez les informations :

```javascript
leader: {
    name: "Jean DUPONT",                    // Nom complet du candidat
    role: "Tête de liste",                  // Position sur la liste
    expertise: "Urbanisme et développement durable",  // Domaine d'expertise
    photo: "imgs/jean-dupont.jpg",          // Chemin vers la photo
    bio: `
        <p><strong>Parcours professionnel :</strong> 
        Jean Dupont est ingénieur en urbanisme depuis 15 ans. Il a travaillé 
        sur de nombreux projets de rénovation urbaine...</p>
        
        <p><strong>Engagement associatif :</strong> 
        Membre actif de l'association "Ferney en Transition" depuis 2018, 
        il a porté plusieurs initiatives citoyennes...</p>
        
        <p><strong>Vision pour Ferney-Voltaire :</strong> 
        "Je crois en une ville où il fait bon vivre, où chacun trouve sa place..."</p>
    `
}
```

### Étape 3 : Mettre à jour les cartes dans liste.html

Dans le fichier `liste.html`, mettez à jour les informations visibles sur les cartes :

```html
<div class="member-card clickable-card" onclick="openMemberModal('member2')">
    <div class="member-photo">
        <div class="photo-placeholder">
            <span class="initials">JD</span>  <!-- Initiales du candidat -->
        </div>
    </div>
    <div class="member-info">
        <h3 class="member-name">Jean DUPONT</h3>  <!-- Nom -->
        <p class="member-role">Position 2</p>     <!-- Position -->
        <p class="member-expertise">Expertise : Urbanisme</p>  <!-- Expertise courte -->
        <p class="click-info">👆 Cliquez pour en savoir plus</p>
    </div>
</div>
```

## 🎨 Personnaliser les Images de Fond

Les images de fond sont définies inline dans les fichiers HTML :

### Dans index.html :

```html
<!-- Hero Section (statue de Voltaire) -->
<section class="hero" style="background: linear-gradient(...), url('imgs/votre-image.jpg')...">

<!-- About Section (jardins du château) -->
<section class="about-section" style="background: linear-gradient(...), url('imgs/votre-image.jpg')...">
```

**Ajuster la transparence** : 
- Modifiez les valeurs rgba dans le linear-gradient
- `rgba(44, 90, 160, 0.9)` : le dernier chiffre (0.9) contrôle la transparence
- Plus le chiffre est proche de 1, plus l'overlay est opaque
- Plus il est proche de 0, plus l'image de fond est visible

## 📝 Modifier les Textes

### Page d'accueil (index.html)

- **Titre principal** : Ligne 35-40
- **Description des priorités** : Section "priorities-section"
- **Texte "À propos"** : Section "about-section"

### Page Programme (programme.html)

Chaque section du programme est dans une `<div class="programme-card">`.
Modifiez le contenu des sections :
- `<h2>` : Titre de la priorité
- `<div class="programme-description">` : Description générale
- `<ul>` dans `.programme-measures` : Liste des mesures

### Page Liste (liste.html)

Modifiez les textes d'introduction et les informations de chaque membre.

## 🎨 Changer les Couleurs

Dans `styles.css`, ligne 13-19 :

```css
:root {
    --primary-color: #2c5aa0;      /* Bleu principal */
    --secondary-color: #e74c3c;    /* Rouge secondaire */
    --accent-color: #27ae60;       /* Vert accentuation */
    --text-dark: #2c3e50;          /* Texte foncé */
    --text-light: #7f8c8d;         /* Texte clair */
    --bg-light: #f8f9fa;           /* Fond clair */
}
```

## 📧 Configurer le Formulaire de Contact

Par défaut, le formulaire affiche une alerte. Pour l'intégrer à un vrai service :

### Option 1 : Formspree (gratuit, simple)

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Copiez l'URL du formulaire
4. Dans `index.html`, modifiez la balise `<form>` :

```html
<form class="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
    <!-- Gardez les champs existants -->
</form>
```

5. Supprimez ou commentez le gestionnaire JavaScript dans `script.js`

### Option 2 : Netlify Forms (si hébergé sur Netlify)

Ajoutez simplement `data-netlify="true"` à votre form :

```html
<form class="contact-form" data-netlify="true">
```

## 🚀 Checklist de Personnalisation

- [ ] Ajouter toutes les photos des candidats dans `imgs/`
- [ ] Mettre à jour `window.memberData` dans `script.js`
- [ ] Modifier les noms et informations dans `liste.html`
- [ ] Personnaliser les textes de la page d'accueil
- [ ] Adapter le programme à vos priorités
- [ ] Choisir et ajuster les images de fond
- [ ] Configurer le formulaire de contact
- [ ] Vérifier les couleurs du thème
- [ ] Tester sur mobile et desktop
- [ ] Vérifier tous les liens

## 💡 Conseils

- **Photos** : Utilisez des photos de bonne qualité, bien éclairées, sur fond neutre
- **Textes** : Soyez concis et clair. Les phrases courtes sont plus impactantes
- **Images de fond** : Privilégiez des images locales de Ferney-Voltaire
- **Couleurs** : Gardez une cohérence visuelle, maximum 3-4 couleurs principales
- **Accessibilité** : Assurez-vous que le texte reste lisible sur les images

## 🐛 Problèmes Courants

**Les images ne s'affichent pas** : 
- Vérifiez le chemin (doit commencer par `imgs/`)
- Vérifiez l'orthographe du nom de fichier
- Vérifiez l'extension (.jpg, .jpeg, .png)

**Le modal ne s'ouvre pas** :
- Vérifiez que l'ID dans `onclick="openMemberModal('memberX')"` correspond à une clé dans `memberData`
- Ouvrez la console du navigateur (F12) pour voir les erreurs

**Le site est lent** :
- Optimisez vos images (compressez-les, max 500Ko par image)
- Utilisez un outil comme [TinyPNG](https://tinypng.com)

## 📞 Support

Pour toute question, référez-vous au fichier `README.md` ou contactez le développeur du site.

