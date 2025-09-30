import type { Metadata } from 'next'
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Consultez les mentions légales du site Jack Creative Lab.',
}

const MentionsLegales = () => {
  return (
    <div className="bg-warm-beige min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-warm-cream border-0 rounded-3xl shadow-lg p-8 md:p-12">
          <CardContent>
            <h1 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">Mentions Légales</h1>
            <div className="prose prose-lg max-w-none text-warm-charcoal/80 font-light">
              <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site <Link href="/jack-creative-lab-website/">jack-creative-lab.com</Link> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">1. Édition du site</h2>
              <ul>
                <li><strong>Nom ou raison sociale :</strong> JACK.CREATIVE.LAB</li>
                <li><strong>Nom commercial :</strong> Jack.Creative.Lab</li>
                <li><strong>SIRET :</strong> 99203648300012</li>
                <li><strong>Code APE :</strong> 6201Z - Programmation informatique</li>
                <li><strong>Origine du fonds :</strong> Création</li>
                <li><strong>Adresse du siège social :</strong> Cours Docteur Long, 69003 Lyon, France</li>
                <li><strong>Forme juridique :</strong> Micro-entreprise</li>
                <li><strong>Responsable de publication :</strong> Matheo Pinget</li>
                <li><strong>Contact :</strong> <a href="mailto:jack.creative.lab@gmail.com">jack.creative.lab@gmail.com</a></li>
              </ul>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">2. Hébergement du site</h2>
              <ul>
                <li><strong>Hébergeur :</strong> GitHub Inc.</li>
                <li><strong>Adresse :</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States</li>
                <li><strong>Site :</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a></li>
              </ul>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble de ce site (contenus, textes, images, vidéos, logos) constitue une œuvre protégée par la législation en vigueur sur le droit d&apos;auteur et la propriété intellectuelle. Sauf autorisation préalable, toute reproduction ou réutilisation, totale ou partielle, est strictement interdite. JACK.CREATIVE.LAB est une marque déposée.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">4. Protection des données personnelles</h2>
              <p>
                Le traitement de vos données à caractère personnel est régi par notre <Link href="/jack-creative-lab-website/politique-de-confidentialite">Politique de Confidentialité</Link> conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD).
              </p>
              
              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">5. Accessibilité</h2>
              <p>
                Le site n&apos;est pas encore soumis à l&apos;obligation de déclaration d&apos;accessibilité (chiffre d&apos;affaires inférieur à 2 millions d&apos;euros et moins de 250 salariés). Cependant, nous nous efforçons de rendre ce site accessible au plus grand nombre.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentionsLegales;