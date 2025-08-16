import { Calendar, Mail, ExternalLink, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.tryfathom.ai/founder/discovery'

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 mb-12">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
            Your client's competitor just raised <span className="font-mono font-semibold text-cyan-600">£50M</span>.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
            Their industry regulations changed <span className="font-mono font-semibold text-cyan-600">yesterday</span>.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
            Your client already knows. <span className="font-mono font-semibold text-cyan-600">You don't.</span>.
          </p>
        </div>

        <p className="text-xl text-slate-700 mb-8 max-w-2xl">
          We're building the intelligence layer that surfaces what's actually impacting your clients.
          Every signal that creates an opportunity for conversation.
        </p>

        {/* Scarcity Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-slate-700">
            <span className="font-semibold">Limited early access:</span> Only 50 founding advisor spots.
            First 500 on the waitlist get exclusive October access.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" />
              Help Shape the Solution
              <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-amber-500 hover:bg-amber-400 text-slate-900">
            <a href="#invitation">
              <Mail className="w-5 h-5 mr-2" />
              Join Early Access List
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}