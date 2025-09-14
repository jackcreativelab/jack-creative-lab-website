// app/politique-de-confidentialite/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PolitiqueDeConfidentialitePage = () => {
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
            <h1 className="text-4xl font-bold text-center mb-12">Politique de Confidentialité</h1>

            <p className="mb-8">La présente Politique de Confidentialité décrit comment JACK.CREATIVE.LAB collecte, utilise et protège les informations que vous nous fournissez lorsque vous utilisez notre site web. Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés".</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Responsable du Traitement des Données</h2>
              <p>Le responsable du traitement de vos données personnelles est :</p>
              <p><strong>JACK.CREATIVE.LAB</strong></p>
              <p>Email : jack.creative.lab@gmail.com</p>
              <p>Téléphone : 06.40.24.07.08</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Données Collectées</h2>
              <p>Nous pouvons collecter les types de données personnelles suivants :</p>
              <ul className="list-disc list-inside">
                <li><strong>Données d'identification :</strong> Nom, prénom, adresse e-mail, numéro de téléphone, adresse postale (si fournie via un formulaire).</li>
                <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, système d'exploitation, pages visitées, temps passé sur le site, données de localisation (via les cookies).</li>
                <li><strong>Données de contact :</strong> Informations fournies via les formulaires de contact ou par e-mail.</li>
                <li><strong>Cookies :</strong> Pour plus d'informations, veuillez consulter la section "Cookies" ci-dessous.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Finalités de la Collecte des Données</h2>
              <p>Nous utilisons les données collectées pour les finalités suivantes :</p>
              <ul className="list-disc list-inside">
                <li>Fournir et gérer les services demandés (ex: répondre à vos demandes via le formulaire de contact).</li>
                <li>Améliorer l'expérience utilisateur et le fonctionnement de notre site web.</li>
                <li>Analyser le trafic et l'utilisation du site à des fins statistiques.</li>
                <li>Envoyer des communications marketing (newsletters, offres) si vous avez donné votre consentement.</li>
                <li>Assurer la sécurité de notre site et prévenir la fraude.</li>
                <li>Respecter nos obligations légales et réglementaires.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Base Légale du Traitement</h2>
              <p>Le traitement de vos données personnelles est basé sur :</p>
              <ul className="list-disc list-inside">
                <li>Votre consentement (pour l'envoi de communications marketing, par exemple).</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles (pour répondre à une demande de devis).</li>
                <li>L'intérêt légitime de JACK.CREATIVE.LAB (pour l'amélioration du site, la prévention de la fraude).</li>
                <li>Une obligation légale (pour la gestion des factures, par exemple).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Destinataires des Données</h2>
              <p>Vos données personnelles sont destinées à JACK.CREATIVE.LAB. Elles peuvent être partagées avec des tiers uniquement dans les cas suivants :</p>
              <ul className="list-disc list-inside">
                <li>**Prestataires de services techniques :** Nous utilisons des services tiers pour l'hébergement, la maintenance et l'analyse de notre site. Ces prestataires agissent en tant que sous-traitants et sont tenus de respecter la confidentialité de vos données.</li>
                <li>**Gestion des formulaires :** Les données soumises via le formulaire de contact sont traitées par le service Formspree.io. En utilisant le formulaire, vous acceptez que les informations que vous fournissiez soient transmises à Formspree pour traitement conformément à leur politique de confidentialité.</li>
                <li>**Autorités légales :** Nous pouvons être amenés à divulguer vos données personnelles aux autorités légales ou administratives si la loi l'exige.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Durée de Conservation des Données</h2>
              <p>Vos données sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées et traitées :</p>
              <ul className="list-disc list-inside">
                <li>Données de contact : 3 ans après le dernier contact si aucune relation commerciale n'est établie.</li>
                <li>Données de clients : 5 ans après la fin de la relation commerciale (10 ans pour les documents comptables).</li>
                <li>Cookies : 13 mois maximum.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p>Un "cookie" est un petit fichier d'information envoyé sur le navigateur de l'Utilisateur et enregistré au sein du terminal de l'Utilisateur (ex : ordinateur, smartphone), (ci-après "Cookies"). Ce fichier comprend des informations telles que le nom de domaine de l'Utilisateur, le fournisseur d'accès Internet de l'Utilisateur, le système d'exploitation de l'Utilisateur, ainsi que la date et l'heure d'accès. Les Cookies ne risquent en aucun cas d'endommager le terminal de l'Utilisateur.</p>
              <p>Nous utilisons des cookies pour :</p>
              <ul className="list-disc list-inside">
                <li>Analyser le trafic et l'utilisation du site.</li>
                <li>Adapter le site aux préférences de l'utilisateur.</li>
                <li>Réaliser des statistiques de fréquentation.</li>
              </ul>
              <p>Vous pouvez configurer votre navigateur pour refuser les cookies, ou pour être alerté lorsque des cookies sont envoyés. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement sans les cookies.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Vos Droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-disc list-inside">
                <li>Droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude de vos données.</li>
                <li>Droit de verrouillage ou d’effacement de vos données à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite.</li>
                <li>Droit de retirer à tout moment un consentement (article 13-2c RGPD).</li>
                <li>Droit à la limitation du traitement de vos données (article 18 RGPD).</li>
                <li>Droit d’opposition au traitement de vos données (article 21 RGPD).</li>
                <li>Droit à la portabilité des données que vous nous avez fournies, lorsque ces données font l'objet de traitements automatisés fondés sur votre consentement ou sur un contrat (article 20 RGPD).</li>
                <li>Droit de définir le sort de vos données après votre mort et de choisir à qui JACK.CREATIVE.LAB devra communiquer (ou non) ses données à un tiers qu’il aura préalablement désigné.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Exercice de Vos Droits</h2>
              <p>Pour exercer vos droits, vous pouvez nous contacter par e-mail à : <a href="mailto:jack.creative.lab@gmail.com" className="text-blue-600 hover:underline">jack.creative.lab@gmail.com</a>.</p>
              <p>Veuillez joindre une preuve d'identité (copie de pièce d'identité) à votre demande.</p>
              <p>Si vous estimez, après nous avoir contactés, que vos droits "Informatique et Libertés" ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Modifications de la Politique de Confidentialité</h2>
              <p>JACK.CREATIVE.LAB se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications. La dernière mise à jour a été effectuée le 13 septembre 2025.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PolitiqueDeConfidentialitePage;
