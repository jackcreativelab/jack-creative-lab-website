import type { Metadata } from 'next'
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Consultez les conditions générales de vente du site Jack Creative Lab.',
}

const CGV = () => {
  return (
    <main className="bg-warm-beige text-warm-charcoal py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Conditions Générales de Vente (CGV)</h1>

        <p className="mb-6">Dernière mise à jour : 27 septembre 2025</p>

        <p className="mb-8">
          Les présentes conditions générales de vente (ci-après "CGV") s\'appliquent à toutes les prestations de services conclues par le studio JACK.CREATIVE.LAB auprès de ses clients. Conformément à la législation, ces CGV sont systématiquement communiquées à tout client qui en fait la demande.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 1 : Objet</h2>
        <p className="mb-6">
          JACK.CREATIVE.LAB propose des services de création et de refonte de sites internet, de design UX/UI, de développement sur-mesure et d\'optimisation SEO, tels que présentés sur le site <Link href="/jack-creative-lab-website/" className="underline hover:text-warm-taupe">jack-creative-lab.com</Link>.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 2 : Commande</h2>
        <p className="mb-6">
          Toute commande de prestation fait l\'objet d\'un devis détaillé et personnalisé, adressé par email au client. Ce devis précise la nature de la prestation, les délais de réalisation et le prix. La commande est validée à réception du devis signé par le client, accompagné de la mention "Bon pour accord", et du paiement d\'un acompte de 30% du montant total.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 3 : Tarifs et Modalités de Paiement</h2>
        <p className="mb-6">
          Les prix des prestations sont indiqués en euros (€) et ne sont pas soumis à la TVA (TVA non applicable, art. 293 B du CGI). Le paiement s\'effectue par virement bancaire sur le RIB fourni par JACK.CREATIVE.LAB. Le solde (70%) est dû à la livraison finale du projet.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 4 : Délais et Livraison</h2>
        <p className="mb-6">
          Les délais de livraison sont donnés à titre indicatif sur le devis. JACK.CREATIVE.LAB s\'engage à mettre tout en œuvre pour les respecter. La livraison est effectuée par la mise en ligne du site ou la remise des fichiers finaux au client.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 5 : Droit de Rétractation (Clients Particuliers)</h2>
        <p className="mb-6">
          Conformément à l\'article L. 221-18 du Code de la consommation, le client particulier dispose d\'un délai de quatorze (14) jours pour exercer son droit de rétractation d\'un contrat conclu à distance, sans avoir à motiver sa décision. Ce délai court à compter de la validation de la commande.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 6 : Propriété Intellectuelle</h2>
        <p className="mb-6">
          Tous les éléments créés pour le projet (maquettes, code, design) deviennent la propriété pleine et entière du client à compter du paiement intégral des factures. JACK.CREATIVE.LAB se réserve le droit de mentionner ses réalisations pour le client à des fins de promotion.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 7 : Responsabilité</h2>
        <p className="mb-6">
          JACK.CREATIVE.LAB s\'engage à fournir ses meilleurs efforts pour la réalisation des prestations. La responsabilité de JACK.CREATIVE.LAB ne saurait être engagée en cas de force majeure ou pour des dommages indirects.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Article 8 : Droit Applicable et Juridiction</h2>
        <p className="mb-6">
          Les présentes CGV sont soumises au droit français. En cas de litige, et après une tentative de résolution amiable, compétence exclusive est attribuée aux tribunaux compétents de Lyon.
        </p>
      </div>
    </main>
  );
};

export default CGV;