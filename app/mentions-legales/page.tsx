// app/mentions-legales/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const MentionsLegalesPage = () => {
  return (
    <main className="pt-32 pb-16 px-6 bg-warm-beige">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" passHref>
            <Button variant="outline" className="border-warm-charcoal text-warm-charcoal hover:bg-warm-charcoal hover:text-warm-cream bg-transparent transition-all duration-500 hover:scale-105 font-light px-6 py-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
        <div className="bg-warm-cream p-8 md:p-12 rounded-3xl shadow-lg">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-center mb-12">Mentions Légales</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Éditeur du Site</h2>
              <p>Le présent site web est édité par :</p>
              <p><strong>JACK.CREATIVE.LAB</strong></p>
              <p>Adresse : Lyon 3</p>
              <p>Email : jack.creative.lab@gmail.com</p>
              <p>Téléphone : 06.40.24.07.08</p>
              <p>SIRET : En cours d'immatriculation</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <p><strong>GitHub</strong></p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Propriété Intellectuelle</h2>
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Données Personnelles</h2>
              <p>Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion de la relation client et l'envoi de newsletters. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'opposition, de suppression et de portabilité des données vous concernant. Pour exercer ces droits, veuillez consulter notre <a href={process.env.NEXT_PUBLIC_BASE_PATH + "/politique-de-confidentialite"} className="text-blue-600 hover:underline">Politique de Confidentialité</a>.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
              <p>Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Droit Applicable</h2>
              <p>Le présent site est régi par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MentionsLegalesPage;
