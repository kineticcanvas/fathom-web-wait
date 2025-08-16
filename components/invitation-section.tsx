'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function InvitationSection() {
  const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com/tryfathom/discovery'

  return (
    <section id="invitation" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12">We're building with 50 founding advisors.</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Option 1 */}
          <div className="p-8 bg-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Option 1: Shape What We Build</h3>
            <p className="text-slate-300 mb-6">
              30-minute conversation. Share your intelligence gaps.
              Influence the product. Get founding member pricing for life.
            </p>
            <Button asChild className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Schedule Your Input Session
                <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
              </a>
            </Button>
            <p className="text-sm text-slate-400 mt-4">Only 50 founding advisor spots</p>
          </div>

          {/* Option 2 */}
          <div className="p-8 bg-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Option 2: Secure Early Access</h3>
            <p className="text-slate-300 mb-6">
              Be among the first 500 to experience what we create.
              Periodic updates only. First access when we launch.
            </p>
            {/* Waitlister Form Embed */}
            <div className="waitlister-form" data-waitlist-key="D4UvmXA4pbmB" data-height="149px"></div>
            <p className="text-sm text-slate-400 mt-4">First 500 spots only</p>
          </div>
        </div>

        <div className="text-center space-y-2 text-slate-400">
          <p>Shaping the solution with 50 founding advisors</p>
        </div>
      </div>
    </section>
  )
}