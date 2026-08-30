import React from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle, ShieldCheck, Heart } from 'lucide-react'

interface Review {
  id: string
  author: string
  role: string
  rating: number
  title: string
  comment: string
  verified: boolean
  tag: string
}

export function BotanicalReviews() {
  const reviews: Review[] = [
    {
      id: 'r1',
      author: 'Dr. Marcus Thorne, DDS',
      role: 'Holistic Dental Surgeon (Austin, TX)',
      rating: 5,
      title: 'The cleanest salivary microflora profiles I have seen in 15 years.',
      comment:
        'I recommend Dentbliss to all patients suffering from recurrent gum bleeding or morning dry mouth. The combination of S. salivarius K12 and Nano-HAp is clinically unmatched.',
      verified: true,
      tag: 'DENTIST VERIFIED',
    },
    {
      id: 'r2',
      author: 'Sarah Lin',
      role: 'Verified Buyer (3-Month Trio Subscriber)',
      rating: 5,
      title: 'My teeth feel smooth like glass all day long!',
      comment:
        'The citrus flavor is so refreshingly crisp—not artificially sweet or overpowering. I noticed zero sensitivity when drinking iced matcha, and my coffee stains lifted completely after 3 weeks.',
      verified: true,
      tag: 'VERIFIED PURCHASE',
    },
    {
      id: 'r3',
      author: 'Julian Croft',
      role: 'Verified Buyer (Family Stock)',
      rating: 5,
      title: 'Finally got rid of my painful canker sores.',
      comment:
        'I suffered from constant mouth ulcers with drugstore SLS toothpaste. Switching to Dentbliss has completely healed my gums. Plus the recyclable aluminum tube looks gorgeous on the sink counter.',
      verified: true,
      tag: 'VERIFIED PURCHASE',
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
            Loved by 14,000+ conscious smiles.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6157] font-sans mt-2">
            4.9 out of 5 stars based on 1,840+ verified clinical customer reviews.
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
                    {r.role}
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
