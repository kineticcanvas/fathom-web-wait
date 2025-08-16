import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Fathom',
  description: 'Privacy policy for Fathom, a product of Kinetic Canvas Digital LLC.'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: August 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Data Controller</h2>
            <p className="text-slate-700">
              Fathom Intelligence Ltd<br />
              London, United Kingdom<br />
              Contact: privacy@fathom.intelligence
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. What Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Email address (when you join our waitlist)</li>
              <li>Name and company information (if provided during scheduling)</li>
              <li>Basic analytics data (page views, referrer) via Plausible Analytics</li>
              <li>Company information enriched from email domain (via data enrichment services)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Legal Basis for Processing</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Waitlist Registration:</strong> Consent - you explicitly agree to join our early access list</li>
              <li><strong>Meeting Scheduling:</strong> Contractual obligation - necessary to arrange and conduct meetings</li>
              <li><strong>Analytics:</strong> Legitimate interest - to improve our service and understand usage</li>
              <li><strong>Data Enrichment:</strong> Legitimate interest - to understand our market and audience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Recipients</h2>
            <p className="text-slate-700 mb-2">We share data with the following service providers:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Kit.com (ConvertKit) - email list management</li>
              <li>Calendly - meeting scheduling</li>
              <li>Plausible Analytics - privacy-focused analytics (self-hosted)</li>
              <li>Data enrichment providers - company information only</li>
              <li>n8n - workflow automation (self-hosted)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. International Transfers</h2>
            <p className="text-slate-700">
              Some of our service providers operate outside the UK/EU. We ensure appropriate safeguards are in place through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-2">
              <li>Standard contractual clauses approved by the UK ICO</li>
              <li>Adequacy decisions where applicable</li>
              <li>Appropriate technical and organisational measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-slate-700 mb-2">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure ("right to be forgotten")</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time (where consent is the legal basis)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-slate-700">
              We retain your data for the following periods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-2">
              <li>Waitlist data: Until you request deletion or 2 years after last engagement</li>
              <li>Meeting data: 6 months after the meeting</li>
              <li>Analytics data: 26 months (Plausible default)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Automated Processing</h2>
            <p className="text-slate-700">
              We use data enrichment tools to automatically identify company information from email domains.
              This helps us understand our market but does not affect individual rights or access to our service.
              No automated decision-making that produces legal effects is performed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Security Measures</h2>
            <p className="text-slate-700">
              We implement appropriate technical and organisational measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-2">
              <li>Encryption in transit (TLS/HTTPS)</li>
              <li>Access controls and authentication</li>
              <li>Regular security reviews</li>
              <li>Data minimisation principles</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact & Complaints</h2>
            <p className="text-slate-700 mb-4">
              For any privacy concerns or to exercise your rights, contact us at:{' '}
              <a href="mailto:privacy@fathom.intelligence" className="text-blue-600 hover:underline">
                privacy@fathom.intelligence
              </a>
            </p>
            <p className="text-slate-700">
              You have the right to lodge a complaint with the Information Commissioner's Office (ICO):{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ico.org.uk
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
