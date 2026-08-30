import React from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle, ShieldCheck, Terminal, Award } from 'lucide-react'

interface EngineeringReview {
  id: string
  author: string
  role: string
  company: string
  rating: number
  title: string
  comment: string
  verified: boolean
  tag: string
}

export function EngineerReviews() {
  const reviews: EngineeringReview[] = [
    {
      id: 'er1',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Nexus Capital (FinTech)',
      rating: 5,
      title: 'Cut our Snowflake warehouse bill by 58% in the first sprint.',
      comment:
        'We were burning $85K/month on unoptimized BigQuery & Snowflake scans. The ASR DataPulse architecture re-clustered our tables, migrated raw logs to Kafka CDC, and delivered sub-second dashboards for our executive team.',
      verified: true,
      tag: 'VERIFIED CTO',
    },
    {
      id: 'er2',
      author: 'Elena Rostova',
      role: 'VP of Data & Infrastructure',
      company: 'Omni Retail Global (E-Commerce)',
      rating: 5,
      title: 'Our dbt models run in 4 minutes instead of 3 hours.',
      comment:
        'Having a senior computer engineer restructure our data mesh changed everything. Zero schema drift, automated CI regression tests on every PR, and clean documentation our product engineers actually love reading.',
      verified: true,
      tag: 'VERIFIED VP DATA',
    },
    {
      id: 'er3',
      author: 'David Chen',
      role: 'Founder & CEO',
      company: 'AeroPulse AI (HealthTech)',
      rating: 5,
      title: 'Production vector pipeline was live in 2 weeks.',
      comment:
        'Flawless execution. He engineered our Pinecone + pgvector hybrid search pipeline with full HIPAA compliance and zero data leakage. Highest ROI technical partnership we have engaged in.',
      verified: true,
      tag: 'VERIFIED FOUNDER',
    },
  ]

  return (
    <section id="reviews" className="w-full py-16 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2B2824]">
            Trusted by CTOs & Engineering Leaders.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6157] font-sans mt-2">
            4.9 out of 5 stars based on 40+ completed enterprise data warehouse and streaming sprints.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white border border-[#E2D9CC] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#2D6A4F] bg-[#EAF0EB] px-2 py-0.5 rounded-full">
                    {r.tag}
                  </span>
                </div>

                <h4 className="text-sm font-serif font-bold text-[#2B2824] mb-2">
                  “{r.title}”
                </h4>
                <p className="text-xs text-[#5A524A] font-sans leading-relaxed">
                  {r.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0E9DF] flex items-center justify-between">
                <div>
                  <div className="text-xs font-serif font-bold text-[#2B2824]">
                    {r.author}
                  </div>
                  <div className="text-[10px] text-[#8C7D6E] font-sans">
                    {r.role} • <strong className="text-stone-700">{r.company}</strong>
                  </div>
                </div>
                <CheckCircle className="w-4 h-4 text-[#2D6A4F]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
