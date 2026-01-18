# 📘 Guide de Déploiement - Le Bon Sens

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer le dépôt GitHub

1. **Connectez-vous à GitHub** : https://github.com
2. **Créez un nouveau dépôt** :
   - Cliquez sur le bouton "+" en haut à droite → "New repository"
   - Nom du dépôt : `lebonsens` (ou le nom de votre choix)
   - Description : "Site web de la liste électorale Le Bon Sens - Ferney-Voltaire 2026"
   - Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
   - Ne cochez PAS "Initialize this repository with a README"
   - Cliquez sur "Create repository"

### Étape 2 : Pousser le code vers GitHub

Depuis le terminal dans le dossier du projet :

```bash
# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Site Le Bon Sens"

# Lier le dépôt distant (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/lebonsens.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser le code
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez :
   - Branch : `main`
   - Folder : `/ (root)`
5. Cliquez sur **Save**
6. Attendez quelques minutes (2-5 minutes généralement)
7. Votre site sera disponible à : `https://USERNAME.github.io/lebonsens/`

---

## 🌐 Configuration d'un Nom de Domaine Personnalisé

### Étape 1 : Acheter un nom de domaine

**Registrars recommandés** (prix annuels approximatifs) :
- **OVH** (France) : https://www.ovh.com - ~10-15€/an
- **Gandi** (France) : https://www.gandi.net - ~15-20€/an
- **Namecheap** : https://www.namecheap.com - ~10-15€/an
- **Google Domains** : https://domains.google - ~12€/an

**Suggestions de noms de domaine** :
- `lebonsens-ferney.fr`
- `lebonsens-fv.fr`
- `ferney-lebonsens.fr`
- `lebonsens2026.fr`

### Étape 2 : Configurer les DNS

Une fois le domaine acheté, accédez à la gestion DNS de votre registrar :

#### Option A : Domaine principal (exemple.fr)

Ajoutez ces enregistrements DNS :

```
Type    Nom     Valeur                      TTL
A       @       185.199.108.153            3600
A       @       185.199.109.153            3600
A       @       185.199.110.153            3600
A       @       185.199.111.153            3600
CNAME   www     USERNAME.github.io.        3600
```

#### Option B : Sous-domaine (site.exemple.fr)

Ajoutez cet enregistrement DNS :

```
Type    Nom     Valeur                      TTL
CNAME   site    USERNAME.github.io.        3600
```

**Remplacez `USERNAME` par votre nom d'utilisateur GitHub !**

### Étape 3 : Configurer GitHub Pages avec le domaine personnalisé

1. Retournez dans **Settings → Pages** de votre dépôt GitHub
2. Dans la section "Custom domain", entrez votre nom de domaine : `exemple.fr` ou `www.exemple.fr`
3. Cliquez sur **Save**
4. Attendez la vérification DNS (peut prendre 24-48h)
5. Une fois vérifié, cochez **Enforce HTTPS** pour activer le certificat SSL gratuit

### Étape 4 : Créer le fichier CNAME

GitHub créera automatiquement un fichier `CNAME` dans votre dépôt. Si ce n'est pas le cas, créez-le manuellement :

```bash
echo "votre-domaine.fr" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

---

## 📱 Générer un QR Code Gratuit

### Méthode 1 : QR Code Generator (Recommandé)

**Site** : https://www.qr-code-generator.com

1. Allez sur le site
2. Sélectionnez "URL" dans le menu
3. Entrez l'URL de votre site : `https://USERNAME.github.io/lebonsens/` ou votre domaine personnalisé
4. Personnalisez le design (optionnel) :
   - Couleurs : Utilisez le bleu de votre charte (`#2c5aa0`)
   - Logo : Ajoutez un petit logo au centre
   - Style : Choisissez un style moderne
5. Téléchargez en haute résolution (PNG ou SVG)
6. **Format recommandé** : SVG pour l'impression, PNG pour le web

### Méthode 2 : QR Code Monkey

**Site** : https://www.qrcode-monkey.com

1. Entrez votre URL
2. Personnalisez :
   - Couleurs : Bleu `#2c5aa0` et blanc
   - Logo : Téléchargez un petit logo
   - Design : Choisissez des coins arrondis
3. Téléchargez en haute qualité (minimum 1000x1000 px)

### Méthode 3 : API QR Code (Pour développeurs)

**Site** : https://goqr.me/api/

URL directe pour générer un QR code :
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://USERNAME.github.io/lebonsens/
```

### Méthode 4 : Google Charts API

```
https://chart.googleapis.com/chart?cht=qr&chl=https://USERNAME.github.io/lebonsens/&chs=500x500
```

---

## 📊 Utilisation du QR Code

### Pour l'impression :
- **Affiches** : Minimum 300 DPI, format PNG ou SVG
- **Flyers** : Taille recommandée 3x3 cm minimum
- **Cartes de visite** : 2x2 cm minimum

### Pour le web :
- **Réseaux sociaux** : 500x500 px en PNG
- **Email** : 300x300 px en PNG

### Texte à ajouter sous le QR code :
```
Scannez pour visiter notre site
lebonsens-ferney.fr
```

---

## ✅ Checklist de Déploiement

- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé
- [ ] Site accessible via `USERNAME.github.io/lebonsens/`
- [ ] Nom de domaine acheté (optionnel)
- [ ] DNS configurés (optionnel)
- [ ] Domaine personnalisé configuré sur GitHub (optionnel)
- [ ] HTTPS activé
- [ ] QR code généré et téléchargé
- [ ] QR code testé avec plusieurs appareils

---

## 🔧 Mises à Jour du Site

Pour mettre à jour le site après modifications :

```bash
# Ajouter les fichiers modifiés
git add .

# Créer un commit avec un message descriptif
git commit -m "Description des modifications"

# Pousser vers GitHub
git push

# Le site sera automatiquement mis à jour en 1-2 minutes
```

---

## 📞 Support

### Problèmes courants :

**Le site ne s'affiche pas après déploiement**
- Attendez 5-10 minutes après l'activation de GitHub Pages
- Vérifiez que le dépôt est bien public
- Videz le cache de votre navigateur (Ctrl+F5)

**Le domaine personnalisé ne fonctionne pas**
- Vérifiez les enregistrements DNS (peut prendre 24-48h)
- Assurez-vous que le fichier CNAME est présent dans le dépôt
- Utilisez https://dnschecker.org pour vérifier la propagation DNS

**Le QR code ne fonctionne pas**
- Testez l'URL directement dans un navigateur
- Assurez-vous que le QR code est assez grand (minimum 2x2 cm imprimé)
- Vérifiez le contraste (fond clair, QR foncé)

### Ressources utiles :
- Documentation GitHub Pages : https://docs.github.com/pages
- Test de QR code : https://webqr.com
- Vérification DNS : https://dnschecker.org

---

## 🎯 Prochaines Étapes

1. **Analytics** : Ajoutez Google Analytics pour suivre les visites
2. **SEO** : Optimisez les balises meta pour le référencement
3. **Réseaux sociaux** : Créez des cartes Open Graph pour les partages
4. **Newsletter** : Intégrez un système de collecte d'emails (Mailchimp, Sendinblue)

---

**Date de création** : Janvier 2026  
**Version** : 1.0  
**Contact** : [À compléter avec votre email]
