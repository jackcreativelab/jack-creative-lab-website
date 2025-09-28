import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-warm-beige min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-warm-cream border-0 rounded-3xl shadow-lg p-8 md:p-12">
          <CardContent>
            <h1 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">Politique de Confidentialité</h1>
            <div className="prose prose-lg max-w-none text-warm-charcoal/80 font-light">
              <p>
                La présente Politique de Confidentialité décrit la manière dont jack.creative.lab collecte, utilise et protège les informations que vous nous fournissez lorsque vous utilisez ce site web.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Collecte de l&apos;information</h2>
              <p>
                Nous collectons des informations lorsque vous remplissez le formulaire de contact ou de demande de devis. Les informations collectées incluent votre nom, votre adresse e-mail, et les détails de votre projet.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Utilisation des informations</h2>
              <p>
                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              </p>
              <ul>
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Vous contacter par e-mail pour le suivi de votre projet</li>
                <li>Améliorer notre site Web</li>
              </ul>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Confidentialité</h2>
              <p>
                Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n&apos;importe quelle raison, sans votre consentement.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Protection des informations</h2>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage pour protéger les informations sensibles transmises en ligne. 
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer l&apos;accès à notre site et identifier les visiteurs réguliers. En outre, nos cookies améliorent l&apos;expérience de l&apos;utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n&apos;est en aucune façon liée à des informations personnelles identifiables sur notre site.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Vos droits</h2>
              <p>
                Conformément à la loi &quot;Informatique et Libertés&quot;, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, d&apos;opposition et de portabilité des données vous concernant. Pour exercer ces droits, veuillez nous contacter à l&apos;adresse e-mail suivante : jack.creative.lab@gmail.com.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Consentement</h2>
              <p>
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>

              <h2 className="font-heading font-light text-3xl text-warm-charcoal mt-8 mb-4 tracking-tight">Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications et les clarifications prendront effet immédiatement après leur publication sur le site web.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}