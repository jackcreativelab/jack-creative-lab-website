import type { Metadata } from 'next'
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Consultez la politique de confidentialité du site Jack Creative Lab.',
}

const PolitiqueDeConfidentialite = () => {
  return (
    <main className="bg-warm-beige text-warm-charcoal py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Politique de Confidentialité</h1>
        <p className="mb-6">Dernière mise à jour : 27 septembre 2025</p>

        <p className="mb-8">
          JACK.CREATIVE.LAB, en tant que responsable de traitement, s'engage à protéger la vie privée des utilisateurs de son site <Link href="/jack-creative-lab-website/" className="underline hover:text-warm-taupe">jack-creative-lab.com</Link>. Cette politique détaille la manière dont nous collectons, utilisons et protégeons vos données personnelles.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">1. Données collectées</h2>
        <div className="mb-6">
          <p>Nous collectons les données que vous nous fournissez directement via :</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Le formulaire de demande de devis : nom, email, type de projet, description, et autres informations relatives à votre projet.</li>
            <li>La prise de rendez-vous via Cal.com : nom, email.</li>
            <li>Les échanges par email.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-heading font-semibold mb-4">2. Finalité du traitement</h2>
        <div className="mb-6">
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Répondre à vos demandes de contact et de devis.</li>
            <li>Gérer la relation commerciale.</li>
            <li>Assurer le suivi des projets.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-heading font-semibold mb-4">3. Destinataires des données</h2>
        <p className="mb-6">
          Les données collectées via le formulaire de devis sont traitées par le service <strong>Formspree</strong>, qui nous permet de recevoir vos demandes par email. Formspree agit en tant que sous-traitant et est conforme au RGPD. Pour plus d'informations, vous pouvez consulter leur <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-taupe">politique de confidentialité</a>.
        </p>
        <p className="mb-6">
          Les données collectées pour la prise de rendez-vous sont traitées par <strong>Cal.com</strong>.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">4. Durée de conservation</h2>
        <p className="mb-6">
          Les données sont conservées pendant la durée de la relation commerciale et jusqu'à 3 ans après le dernier contact à des fins de prospection, sauf si vous exercez votre droit à l'effacement. Les données de facturation sont conservées 10 ans.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">5. Vos droits</h2>
        <div className="mb-6">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Droit d'accès, de rectification et d'effacement de vos données.</li>
            <li>Droit à la limitation du traitement.</li>
            <li>Droit à la portabilité de vos données.</li>
            <li>Droit d'opposition au traitement.</li>
          </ul>
          <p className="mt-4">Pour exercer ces droits, vous pouvez nous contacter à <a href="mailto:jack.creative.lab@gmail.com" className="underline hover:text-warm-taupe">jack.creative.lab@gmail.com</a>.</p>
        </div>

        <h2 className="text-2xl font-heading font-semibold mb-4">6. Gestion des cookies</h2>
        <p className="mb-6">
          Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement. Nous n'utilisons pas de cookies de suivi, de mesure d'audience ou publicitaires. Par conséquent, aucun bandeau de consentement pour les cookies n'est affiché.
        </p>
      </div>
    </main>
  );
};

export default PolitiqueDeConfidentialite;