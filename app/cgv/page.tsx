import type { Metadata } from 'next'
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Consultez les conditions générales de vente du site Jack Creative Lab.',
}

const CGV = () => {
  return (
    <div className="bg-warm-beige min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-warm-cream border-0 rounded-3xl shadow-lg p-8 md:p-12">
          <CardContent>
            <h1 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">Conditions Générales de Vente (CGV)</h1>
            <div className="prose prose-lg max-w-none text-warm-charcoal/80 font-light">
              <p>Dernière mise à jour : 27 septembre 2025</p>

              <p>
                Les présentes conditions générales de vente (ci-après &quot;CGV&quot;) s&apos;appliquent à toutes les prestations de services conclues par le studio JACK.CREATIVE.LAB auprès de ses clients. Conformément à la législation, ces CGV sont systématiquement communiquées à tout client qui en fait la demande.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 1 : Objet</h2>
              <p>
                JACK.CREATIVE.LAB propose des services de création et de refonte de sites internet, de design UX/UI, de développement sur-mesure et d&apos;optimisation SEO, tels que présentés sur le site <Link href="/jack-creative-lab-website/">jack-creative-lab.com</Link>.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 2 : Commande</h2>
              <p>
                Toute commande de prestation fait l&apos;objet d&apos;un devis détaillé et personnalisé, adressé par email au client. Ce devis précise la nature de la prestation, les délais de réalisation et le prix. La commande est validée à réception du devis signé par le client, accompagné de la mention &quot;Bon pour accord&quot;, et du paiement d&apos;un acompte de 30% du montant total.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 3 : Tarifs et Modalités de Paiement</h2>
              <p>
                Les prix des prestations sont indiqués en euros (€) et ne sont pas soumis à la TVA (TVA non applicable, art. 293 B du CGI). Le paiement s&apos;effectue par virement bancaire sur le RIB fourni par JACK.CREATIVE.LAB. Le solde (70%) est dû à la livraison finale du projet.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 4 : Délais et Livraison</h2>
              <p>
                Les délais de livraison sont donnés à titre indicatif sur le devis. JACK.CREATIVE.LAB s&apos;engage à mettre tout en œuvre pour les respecter. La livraison est effectuée par la mise en ligne du site ou la remise des fichiers finaux au client.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 5 : Droit de Rétractation (Clients Particuliers)</h2>
              <p>
                Conformément à l&apos;article L. 221-18 du Code de la consommation, le client particulier dispose d&apos;un délai de quatorze (14) jours pour exercer son droit de rétractation d&apos;un contrat conclu à distance, sans avoir à motiver sa décision. Ce délai court à compter de la validation de la commande.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 6 : Propriété Intellectuelle</h2>
              <p>
                Tous les éléments créés pour le projet (maquettes, code, design) deviennent la propriété pleine et entière du client à compter du paiement intégral des factures. JACK.CREATIVE.LAB se réserve le droit de mentionner ses réalisations pour le client à des fins de promotion.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 7 : Responsabilité</h2>
              <p>
                JACK.CREATIVE.LAB s&apos;engage à fournir ses meilleurs efforts pour la réalisation des prestations. La responsabilité de JACK.CREATIVE.LAB ne saurait être engagée en cas de force majeure ou pour des dommages indirects.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Article 8 : Droit Applicable et Juridiction</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, et après une tentative de résolution amiable, compétence exclusive est attribuée aux tribunaux compétents de Lyon.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CGV;