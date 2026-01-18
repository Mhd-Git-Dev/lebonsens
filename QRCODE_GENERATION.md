# 📱 Guide de Génération de QR Code

## 🎯 URLs Directes pour Générer vos QR Codes

### Option 1 : API QR Server (Recommandé)

**QR Code Standard (500x500 px)**
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://mhd-git-dev.github.io/lebonsens/
```

**QR Code Haute Résolution (1000x1000 px) - Pour impression**
```
https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://mhd-git-dev.github.io/lebonsens/
```

**QR Code Très Haute Résolution (2000x2000 px) - Pour affiches**
```
https://api.qrserver.com/v1/create-qr-code/?size=2000x2000&data=https://mhd-git-dev.github.io/lebonsens/
```

**QR Code avec Couleur Personnalisée (Bleu de votre charte)**
```
https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://mhd-git-dev.github.io/lebonsens/&color=2c5aa0
```

### Option 2 : Google Charts API

**QR Code Standard**
```
https://chart.googleapis.com/chart?cht=qr&chl=https://mhd-git-dev.github.io/lebonsens/&chs=500x500
```

---

## 🌐 Sites Web pour Personnalisation Avancée

### 1. QR Code Generator (Le plus complet)
**URL** : https://www.qr-code-generator.com

**Avantages** :
- ✅ Personnalisation complète (couleurs, logo, style)
- ✅ Formats SVG, PNG, EPS, PDF
- ✅ Haute résolution
- ✅ Aperçu en temps réel
- ✅ Gratuit pour usage personnel

**Instructions** :
1. Sélectionnez "URL"
2. Entrez : `https://mhd-git-dev.github.io/lebonsens/`
3. Personnalisez :
   - **Couleur principale** : `#2c5aa0` (bleu de votre charte)
   - **Couleur de fond** : `#ffffff` (blanc)
   - **Style** : Choisissez des coins arrondis
   - **Logo** : Téléchargez votre logo (optionnel)
4. Téléchargez en SVG (vectoriel) ou PNG (haute résolution)

---

### 2. QR Code Monkey
**URL** : https://www.qrcode-monkey.com

**Avantages** :
- ✅ Totalement gratuit
- ✅ Pas de limite de scans
- ✅ Haute résolution (jusqu'à 3000x3000 px)
- ✅ Personnalisation avancée

**Instructions** :
1. Entrez votre URL dans "Your URL"
2. Onglet "Set Colors" :
   - Foreground Color : `#2c5aa0`
   - Background Color : `#ffffff`
3. Onglet "Add Logo Image" (optionnel) :
   - Téléchargez votre logo
4. Onglet "Customize Design" :
   - Body Shape : Choisissez un style moderne
   - Eye Frame Shape : Coins arrondis
5. Cliquez sur "Create QR Code"
6. Téléchargez en PNG (3000x3000 px recommandé)

---

### 3. QR Tiger
**URL** : https://www.qrcode-tiger.com

**Avantages** :
- ✅ Interface intuitive
- ✅ QR codes dynamiques (modifiables après création)
- ✅ Statistiques de scan (version payante)

---

### 4. Unitag QR Code
**URL** : https://www.unitag.io/qrcode

**Avantages** :
- ✅ Design très personnalisable
- ✅ Templates prédéfinis
- ✅ Gratuit pour usage personnel

---

## 🎨 Personnalisation Recommandée

### Couleurs de votre Charte Graphique

```css
Couleur principale (bleu) : #2c5aa0
Couleur secondaire (cyan) : #00ffd0
Couleur de fond : #ffffff
Couleur du texte : #1a1a1a
```

### Styles Recommandés

**Pour Affiches et Flyers** :
- Taille : 1000x1000 px minimum
- Format : PNG ou SVG
- Couleur : Bleu `#2c5aa0` sur fond blanc
- Style : Coins arrondis
- Logo : Centré (si ajouté)

**Pour Cartes de Visite** :
- Taille : 500x500 px minimum
- Format : PNG haute résolution
- Couleur : Bleu `#2c5aa0` sur fond blanc
- Style : Simple et lisible

**Pour Réseaux Sociaux** :
- Taille : 500x500 px
- Format : PNG
- Couleur : Bleu `#2c5aa0` sur fond blanc
- Ajoutez un texte explicatif autour

---

## 📐 Guide des Tailles

### Pour l'Impression

| Support | Taille QR Code | Résolution | Format |
|---------|---------------|------------|---------|
| Affiche A4 | 5x5 cm min | 1000x1000 px | PNG/SVG |
| Affiche A3 | 7x7 cm min | 2000x2000 px | PNG/SVG |
| Flyer A5 | 3x3 cm min | 1000x1000 px | PNG |
| Carte de visite | 2x2 cm min | 500x500 px | PNG |
| Kakémono | 10x10 cm min | 3000x3000 px | SVG |

**Résolution d'impression** : Toujours 300 DPI minimum

### Pour le Web et les Réseaux Sociaux

| Support | Taille | Format |
|---------|--------|---------|
| Site web | 200-300 px | PNG |
| Email | 300x300 px | PNG |
| Facebook/Instagram | 500x500 px | PNG |
| Twitter | 400x400 px | PNG |
| LinkedIn | 500x500 px | PNG |

---

## 💡 Textes à Ajouter Autour du QR Code

### Version Courte
```
Scannez-moi !
lebonsens-ferney.fr
```

### Version Standard
```
Scannez pour découvrir notre programme
Le Bon Sens - Ferney-Voltaire 2026
```

### Version Complète
```
Découvrez notre programme complet
Scannez ce QR code avec votre smartphone

LE BON SENS
Ferney-Voltaire - Élections Municipales 2026
Christian Landreau
```

### Version Appel à l'Action
```
📱 Scannez pour en savoir plus !

Découvrez notre équipe, notre programme
et nos propositions pour Ferney-Voltaire

Élections Municipales 15-22 Mars 2026
```

---

## 🧪 Tester votre QR Code

### Sites de Test en Ligne

1. **WebQR** : https://webqr.com
   - Testez directement depuis votre ordinateur
   - Utilisez la webcam pour scanner

2. **QR Code Scanner** : https://qrcodescan.in
   - Téléchargez votre image de QR code
   - Vérifiez qu'il pointe vers la bonne URL

### Test sur Smartphone

1. Ouvrez l'appareil photo de votre smartphone
2. Pointez vers le QR code (sur écran ou imprimé)
3. Une notification devrait apparaître
4. Cliquez pour ouvrir le lien
5. Vérifiez que vous arrivez sur le bon site

**Testez sur plusieurs appareils** :
- iPhone (iOS)
- Android (Samsung, Xiaomi, etc.)
- Différentes distances (10 cm à 2 mètres)
- Différents éclairages

---

## 📋 Checklist de Génération

- [ ] QR code généré en haute résolution (1000x1000 px minimum)
- [ ] Couleurs de la charte appliquées (bleu `#2c5aa0`)
- [ ] Format adapté au support (PNG pour impression, SVG pour vectoriel)
- [ ] QR code testé sur plusieurs smartphones
- [ ] URL correcte (GitHub Pages ou domaine personnalisé)
- [ ] Contraste suffisant (fond clair, QR foncé)
- [ ] Taille adaptée au support final
- [ ] Texte explicatif ajouté autour du QR code
- [ ] Version imprimée testée (si applicable)
- [ ] Sauvegarde en plusieurs formats (PNG, SVG, PDF)

---

## 🎯 Exemples d'Utilisation

### Sur une Affiche A4

```
┌─────────────────────────────────────┐
│                                     │
│     LE BON SENS                     │
│     Ferney-Voltaire 2026            │
│                                     │
│     [Photo de l'équipe]             │
│                                     │
│     Notre Programme :               │
│     • Santé                         │
│     • Sécurité                      │
│     • Familles                      │
│     • Écologie                      │
│                                     │
│     ┌─────────┐                     │
│     │ QR CODE │  Scannez pour       │
│     │  5x5 cm │  en savoir plus !   │
│     └─────────┘                     │
│                                     │
│     lebonsens-ferney.fr             │
│                                     │
└─────────────────────────────────────┘
```

### Sur une Carte de Visite

```
┌────────────────────────────┐
│  LE BON SENS               │
│  Ferney-Voltaire           │
│                            │
│  Christian Landreau        │
│  Tête de liste             │
│                            │
│  ┌─────┐                   │
│  │ QR  │  Scannez-moi !    │
│  │2x2cm│                   │
│  └─────┘                   │
│                            │
│  contact@lebonsens.fr      │
└────────────────────────────┘
```

### Sur un Flyer A5

```
┌──────────────────────────┐
│  ÉLECTIONS MUNICIPALES   │
│  15-22 Mars 2026         │
│                          │
│  LE BON SENS             │
│  Christian Landreau      │
│                          │
│  [Photo]                 │
│                          │
│  ┌────────┐              │
│  │QR CODE │ Découvrez    │
│  │ 3x3 cm │ notre        │
│  └────────┘ programme !  │
│                          │
│  lebonsens-ferney.fr     │
└──────────────────────────┘
```

---

## 🔄 Mise à Jour du QR Code

### Si vous changez de domaine

1. Générez un nouveau QR code avec la nouvelle URL
2. Remplacez tous les QR codes sur vos supports
3. Gardez l'ancien QR code actif pendant la transition

### Redirection

Si vous avez déjà imprimé des QR codes et changez de domaine :
- Configurez une redirection depuis l'ancienne URL vers la nouvelle
- Sur GitHub Pages : utilisez un fichier de redirection

---

## 📞 Support et Ressources

### Problèmes Courants

**Le QR code ne scanne pas** :
- ✅ Augmentez la taille (minimum 2x2 cm imprimé)
- ✅ Vérifiez le contraste (fond blanc, QR bleu foncé)
- ✅ Assurez-vous que l'impression est nette (pas floue)
- ✅ Testez avec plusieurs smartphones

**Le QR code pointe vers la mauvaise URL** :
- ✅ Régénérez le QR code avec la bonne URL
- ✅ Testez avant d'imprimer massivement

**Le QR code est trop petit une fois imprimé** :
- ✅ Utilisez une résolution plus élevée (2000x2000 px)
- ✅ Exportez en SVG pour un redimensionnement sans perte

---

## 🎉 Conseils Finaux

1. **Toujours tester** avant l'impression en masse
2. **Gardez plusieurs versions** (différentes tailles et formats)
3. **Ajoutez un texte explicatif** ("Scannez-moi !")
4. **Utilisez SVG** pour les grandes impressions
5. **Vérifiez le contraste** pour une bonne lisibilité
6. **Testez à différentes distances** (10 cm à 2 mètres)
7. **Incluez l'URL en texte** en dessous du QR code (au cas où)

---

**Bonne campagne ! 🎉**

Pour toute question, consultez GUIDE_DEPLOIEMENT.md ou DEPLOIEMENT_RAPIDE.txt
