import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Rocket,
  Satellite,
  Wrench,
  ArrowRight,
  Sparkles,
  Telescope,
} from 'lucide-react'
import { useMemo } from 'react'
import { missions } from './data/missions'
import MissionCard from './components/MissionCard/MissionCarddd'
export default function Home() {
  const featured = useMemo(() => missions.slice(0, 3), [])
  const pathways = [
    {
      icon: Telescope,
      title: 'Mission Archive',
      desc: 'Explore real NASA missions, their discoveries, instruments and the stories behind them.',
      to: '/missions',
      color: 'from-blue-500/20 to-cyan-500/10',
    },
    {
      icon: Wrench,
      title: 'Hardware Explorer',
      desc: 'Understand the technology — rovers, spectrometers, RTGs and communication systems.',
      to: '/hardware',
      color: 'from-purple-500/20 to-blue-500/10',
    },
    {
      icon: Rocket,
      title: 'Mission Builder',
      desc: 'Design your own mission: choose destination, vehicle, instruments and scientific goals.',
      to: '/builder',
      color: 'from-cyan-500/20 to-emerald-500/10',
    },
  ]
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/50 to-space-black pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-space-cyan mb-6">
              <Sparkles className="w-4 h-4" />
              Educational Platform · NASA Space Apps Inspired
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              EXPLORE THE LEGACY.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-tech to-space-cyan text-glow">
                BUILD THE FUTURE.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-space-gray max-w-2xl mx-auto leading-relaxed">
              Dive into the history of real NASA missions, explore the hardware
              that made them possible, and design your own space mission with
              scientific instruments inspired by actual technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/missions" className="btn-primary text-base px-8 py-3.5">
                <Satellite className="w-5 h-5" />
                Explore Missions
              </Link>

              <Link to="/builder" className="btn-secondary text-base px-8 py-3.5">
                <Rocket className="w-5 h-5" />
                Build Your Mission
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-4 text-xs text-space-gray"
          >
            {[
              'Voyager 1 · Interstellar',
              'Perseverance · Mars',
              'Cassini · Saturn',
              'Apollo 11 · Moon',
            ].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/10 glass">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How Beyond Earth Works</h2>
            <p className="text-space-gray mt-2">
              Three pathways into space exploration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pathways.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={item.to} className="block card-hover h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-space-cyan" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-space-gray text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <span className="inline-flex items-center gap-1 mt-4 text-space-cyan text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MISSIONS */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Missions</h2>
              <p className="text-space-gray mt-1">
                Iconic journeys that expanded our horizons
              </p>
            </div>

            <Link to="/missions" className="btn-ghost text-sm hidden sm:flex">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((m, i) => (
              <MissionCard key={m.id} mission={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card text-center py-12 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-space-tech/10 to-space-cyan/10 pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl font-bold relative">
              Ready to design your own mission?
            </h2>

            <p className="text-space-gray mt-3 relative max-w-xl mx-auto">
              Select a destination, choose your vehicle and instruments, define
              a scientific objective, and run an educational simulation.
            </p>

            <Link to="/builder" className="btn-primary mt-8 relative inline-flex">
              <Rocket className="w-5 h-5" />
              Start Building
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
