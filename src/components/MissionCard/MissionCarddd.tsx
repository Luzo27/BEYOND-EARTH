
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react'
import type { Mission } from '../../data/missions'

interface MissionCardProps {
  mission: Mission
  index?: number
}

export default function MissionCard({
  mission,
  index = 0,
}: MissionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
    >
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={mission.image}
          alt={mission.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-cyan-300 backdrop-blur-md">
          {mission.category}
        </span>

        <span className="absolute bottom-4 left-4 text-xs tracking-widest text-white/70">
          NASA MISSION / {mission.year}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
          {mission.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            {mission.destination}
          </span>

          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-cyan-400" />
            {mission.year}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {mission.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs tracking-wide text-cyan-300">
            MISSION OVERVIEW
          </span>

          <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
        </div>
      </div>
    </motion.article>
  )
}
