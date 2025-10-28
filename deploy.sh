#!/usr/bin/env bash
set -e

echo "🚀 Build du projet..."
npm run build

echo "🧹 Nettoyage de l'ancien dossier docs..."
rm -rf docs

echo "📦 Déplacement du build dans docs/..."
mv dist docs

echo "📤 Commit et push vers GitHub..."
git add .
git commit -m "🚀 Déploiement automatique vers GitHub Pages"
git push

echo "✅ Terminé ! Ton site est en ligne sur : https://bakoww.github.io/sb1-fv8yvovn/"
