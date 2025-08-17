import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import CostSection from '@/components/cost-section'
import ValidationSection from '@/components/validation-section'
import QuestionSection from '@/components/question-section'
import InvitationSection from '@/components/invitation-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <HeroSection />
      <CostSection />
      <ValidationSection />
      <QuestionSection />
      <InvitationSection />

      <footer className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-slate-600">
            From the team that understands enterprise intelligence.
          </p>
          <p className="text-slate-600">
            Building in London. Solving globally.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="/privacy" className="text-sm text-slate-500 hover:text-slate-700">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}