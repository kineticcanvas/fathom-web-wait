export default function CostSection() {
  const costs = [
    { value: '3', unit: 'hours', description: 'scanning headlines that don\'t matter' },
    { value: '5', unit: 'critical signals', description: 'you\'ll only discover next quarter' },
    { value: '1', unit: 'competitor', description: 'who somehow always knows first' },
  ]

  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light mb-12">Every. Single. Day.</h2>
        <div className="space-y-6 text-lg text-slate-300">
          {costs.map((cost, index) => (
            <p key={index} className="flex items-start">
              <span className="text-cyan-400 font-mono mr-3">{cost.value}</span>
              {cost.unit && <span className="mr-2">{cost.unit}</span>}
              {cost.description}
            </p>
          ))}
        </div>
        <p className="mt-12 text-xl text-amber-400">
          Every day you&apos;re late costs you credibility.
        </p>
      </div>
    </section>
  )
}