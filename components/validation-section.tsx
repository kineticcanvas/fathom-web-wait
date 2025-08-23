'use client'

import { useEffect, useState } from 'react'

export default function ValidationSection() {
  const [isVisible, setIsVisible] = useState([false, false, false])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible([
        scrollY > 400,
        scrollY > 500,
        scrollY > 600
      ])
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      quote: "I spend my Sunday nights anxiously researching my Monday meetings.",
      source: "Senior Partner, Big 4 Firm"
    },
    {
      quote: "My client mentioned their competitor's move. I had no idea. I'm supposed to be their strategic advisor.",
      source: "Principal Consultant, Boutique Firm"
    },
    {
      quote: "I have 7 monitoring tools. I still miss the signals that matter.",
      source: "Engagement Manager, Global Consultancy"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className={`border-l-4 border-amber-500 pl-6 py-4 bg-slate-50 rounded-r-lg transition-all duration-600 ${isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
              <p className="text-lg text-slate-700 mb-2">&ldquo;{testimonial.quote}&rdquo;</p>
              <cite className="text-sm text-slate-500">— {testimonial.source}</cite>
            </blockquote>
          ))}
        </div>
        <p className="mt-12 text-2xl text-slate-900 text-center font-light">
          You&apos;re not alone in this.
        </p>
      </div>
    </section>
  )
}