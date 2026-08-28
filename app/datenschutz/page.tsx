import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Ex-Lux-Immo GmbH',
  description: 'Datenschutzerklärung der Ex-Lux-Immo GmbH.',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
          Zurück zur Startseite
        </Link>
        <header className="mt-8 border-b border-border pb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Rechtliche Hinweise</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl">Datenschutzerklärung</h1>
        </header>

        <div className="prose prose-neutral mt-10 max-w-none text-foreground/85 prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground prose-h2:mt-12 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-8 prose-li:leading-8 prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-accent">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          <h3>Datenerfassung auf unserer Website</h3>
          <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch Eingabe in ein Kontakt- oder Anfrageformular). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>

          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>Ex-Lux-Immo GmbH<br />Am Wald 6<br />66763 Dillingen Saar<br />Telefon: +49 (0) 6831 165190<br />E-Mail: <a href="mailto:info@ex-lux-immo.de">info@ex-lux-immo.de</a></p>
          <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
          <h3>Speicherdauer</h3>
          <p>Soweit innerhalb dieser Datenschutzerklärung keine spezielle Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.</p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
          <h3>Recht auf Auskunft, Löschung und Berichtigung</h3>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf kostenlose Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Verarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Kontaktformular &amp; E-Mail-Anfragen</h3>
          <p>Wenn Sie uns per Kontaktformular oder E-Mail Anfragen (z. B. zu Objekt-Exposés oder Wertermittlungen) zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
          <h3>Google Maps</h3>
          <p>Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
          <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
          <p>Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte und Immobilien. Dies stellt ein berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
          <p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Datenschutzerklärung von Google</a>.</p>

          <h2>4. Analyse-Tools</h2>
          <h3>Google Analytics</h3>
          <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
          <p>Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden in einem User-ID-Profil zusammengefasst und dem jeweiligen Endgerät des Websitebesuchers zugeordnet.</p>
          <h3>IP-Anonymisierung</h3>
          <p>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.</p>
          <h3>Einwilligung &amp; Rechtsgrundlage</h3>
          <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit über unseren Cookie-Banner oder die Datenschutzeinstellungen auf der Website widerrufbar.</p>
          <h3>Browser Plugin</h3>
          <p>Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das Browser-Plugin unter folgendem Link herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</p>
        </div>
      </article>
      <SiteFooter />
    </main>
  )
}