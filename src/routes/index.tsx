import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { StackedFeatureCards } from '../components/StackedFeatureCards'
import { EnterpriseArchitectureSimulator } from '../components/EnterpriseArchitectureSimulator'
import { TrustLogosBanner } from '../components/TrustLogosBanner'
import { ThreeColumnBenefits } from '../components/ThreeColumnBenefits'
import { SelectDataSourceCards } from '../components/SelectDataSourceCards'
import { BespokeConversationSection } from '../components/BespokeConversationSection'
import { SmartDataCalculator } from '../components/SmartDataCalculator'
import { FaqGrid } from '../components/FaqGrid'
import { Footer } from '../components/Footer'
import { SmartWhatsAppWidget } from '../components/SmartWhatsAppWidget'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative antialiased selection:bg-[#FFE6D5] selection:text-[#D9480F]">
      {/* 1. Clean Top Navbar */}
      <Header />

      {/* Main Landing Flow */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* 2. Hero Section (Pastel Peach, Highlight Badges, Vault Illustration, Floating Stats) */}
        <HeroSection />

        {/* 3. The 4 Core Enterprise Services (Layered Pastel Cards with Dedicated Vector Art) */}
        <StackedFeatureCards />

        {/* 4. Interactive Live Simulator ("Product is the Demo") for RAG, ETL & Cloud Cost ROI */}
        <EnterpriseArchitectureSimulator />

        {/* 5. Trust Logos & Pitch-Black Dark CTA Banner */}
        <TrustLogosBanner />

        {/* 6. Three-Column Key Capabilities & Direct ROI Benefits */}
        <ThreeColumnBenefits />

        {/* 7. Select Data & AI Solutions (4 Interactive Cards with Exploration Links) */}
        <SelectDataSourceCards />

        {/* 8. Bespoke Enterprise Solutions (Chat Dialogue Bubbles & Verified Review) */}
        <BespokeConversationSection />

        {/* 9. Interactive Smart Project & ROI Calculator with WhatsApp Generator */}
        <SmartDataCalculator />

        {/* 10. Core FAQ Grid (3x2 Clean Cards) */}
        <FaqGrid />
      </main>

      {/* 11. Solid Dark Footer */}
      <Footer />

      {/* 12. Smart Floating WhatsApp Widget */}
      <SmartWhatsAppWidget />
    </div>
  )
}
