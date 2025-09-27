import type { Metadata } from 'next'
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Consultez les mentions légales du site Jack Creative Lab.',
}

const MentionsLegales = () => {
  return (
    <main className="bg-warm-beige text-warm-charcoal py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Mentions Légales</h1>
        <p className="mb-6">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site <Link href="/jack-creative-lab-website/" className="underline hover:text-warm-taupe">jack-creative-lab.com</Link> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

        <h2 className="text-2xl font-heading font-semibold mb-4 mt-8">1. Édition du site</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Nom ou raison sociale :</strong> JACK.CREATIVE.LAB</li>
          <li><strong>Adresse du siège social :</strong> Cours Docteur Long, 69003 Lyon, France</li>
          <li><strong>Forme juridique :</strong> Micro-entreprise</li>
          <li><strong>Immatriculation :</strong> En cours d&apos;immatriculation</li>
          <li><strong>Responsable de publication :</strong> Matheo Pinget</li>
          <li><strong>Contact :</strong> <a href="mailto:jack.creative.lab@gmail.com" className="underline hover:text-warm-taupe">jack.creative.lab@gmail.com</a></li>
        </ul>

        <h2 className="text-2xl font-heading font-semibold mb-4 mt-8">2. Hébergement du site</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Hébergeur :</strong> GitHub Inc.</li>
          <li><strong>Adresse :</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States</li>
          <li><strong>Site :</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-taupe">github.com</a></li>
        </ul>

        <h2 className="text-2xl font-heading font-semibold mb-4 mt-8">3. Propriété intellectuelle</h2>
        <p className="mb-6">
          L&apos;ensemble de ce site (contenus, textes, images, vidéos, logos) constitue une œuvre protégée par la législation en vigueur sur le droit d&apos;auteur et la propriété intellectuelle. Sauf autorisation préalable, toute reproduction ou réutilisation, totale ou partielle, est strictement interdite. JACK.CREATIVE.LAB est une marque déposée.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4 mt-8">4. Protection des données personnelles</h2>
        <p className="mb-6">
          Le traitement de vos données à caractère personnel est régi par notre <Link href="/jack-creative-lab-website/politique-de-confidentialite" className="underline hover:text-warm-taupe">Politique de Confidentialité</Link> conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD).
        </p>
        
        <h2 className="text-2xl font-heading font-semibold mb-4 mt-8">5. Accessibilité</h2>
        <p className="mb-6">
          Le site n&apos;est pas encore soumis à l&apos;obligation de déclaration d&apos;accessibilité (chiffre d&apos;affaires inférieur à 2 millions d&apos;euros et moins de 250 salariés). Cependant, nous nous efforçons de rendre ce site accessible au plus grand nombre.
        </p>
      </div>
    </main>
  );
};

export default MentionsLegales;