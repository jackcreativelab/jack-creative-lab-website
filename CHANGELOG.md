# Changelog

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère à la [Gestion sémantique de version](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-09-28

### Ajouté
- **Pipeline CI/CD :** Implémentation d'un workflow GitHub Actions complet pour l'intégration et le déploiement continus.
    - Inclut le linting, la vérification des types, le scan de vulnérabilités, les tests et le build.
    - Déploie automatiquement sur GitHub Pages lors des push sur la branche `master`.
- **Infrastructure de Test :** Mise en place d'une base de tests avec Jest et React Testing Library.
    - Ajout de tests initiaux pour `HomePage` et `AppClientLayout`.
    - Configuration de l'environnement de test (`jest.setup.js`) pour simuler les API du navigateur pour JSDOM.

### Modifié
- **Stabilité du projet :** Refactorisation et correction de bugs majeurs pour stabiliser l'application.
- **Navigation :** Révision du routage côté client pour les liens d'ancrage afin de garantir un défilement fluide et fiable depuis n'importe quelle page.

### Corrigé
- **Erreurs TypeScript :** Résolution des conflits de types en supprimant le fichier redondant `app/layout.ts`.
- **Erreurs de Linting :** Correction de toutes les erreurs `react/no-unescaped-entities` dans l'ensemble de l'application.
- **Échecs de Tests :** Correction de multiples échecs de tests liés à l'environnement JSDOM et à l'ambiguïté des requêtes.

### Supprimé
- **Fichiers Inutilisés :** Suppression de nombreuses images et placeholders inutilisés du répertoire `/public` pour nettoyer le dépôt.
- **Artefacts de Build :** Suppression des fichiers de cache de build qui étaient suivis par Git (`tsconfig.tsbuildinfo`).
