import React, { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'
import { Check, X, Sparkles, Shield, AlertCircle } from 'lucide-react'

interface ComparisonRow {
  feature: string
  category: string
  dentbliss: {
    value: string
    positive: boolean
    highlight?: boolean
  }
  conventional: {
    value: string
    positive: boolean
  }
  standardNatural: {
    value: string
    positive: boolean
  }
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Live Oral Probiotics (5B CFU)',
    category: 'Microbiome',
    dentbliss: { value: 'Active S. salivarius K12 & M18', positive: true, highlight: true },
    conventional: { value: 'None (Kills all microflora)', positive: false },
    standardNatural: { value: 'None', positive: false },
  },
  {
    feature: 'Enamel Remineralization',
    category: 'Enamel',
    dentbliss: { value: 'Nano-Hydroxyapatite (Biomimetic)', positive: true, highlight: true },
    conventional: { value: 'Sodium Fluoride (Toxicity concerns)', positive: false },
    standardNatural: { value: 'Baking Soda only (Abrasive)', positive: false },
  },
  {
    feature: 'Sodium Lauryl Sulfate (SLS)',
    category: 'Cleanliness',
    dentbliss: { value: '0% (Zero Canker Sore Triggers)', positive: true, highlight: true },
    conventional: { value: 'High Concentration (Harsh soap)', positive: false },
    standardNatural: { value: '0%', positive: true },
  },
  {
    feature: 'Natural Enzymatic Stain Removal',
    category: 'Whitening',
    dentbliss: { value: 'Cold-Pressed Papain Enzymes', positive: true, highlight: true },
    conventional: { value: 'Peroxide & Hydrated Silica', positive: false },
    standardNatural: { value: 'Activated Charcoal (Scratches enamel)', positive: false },
  },
  {
    feature: 'Salivary pH Alkaline Balancing',
    category: 'Microbiome',
    dentbliss: { value: 'Natural Citrus Bioflavonoids', positive: true, highlight: true },
    conventional: { value: 'Artificial Sweeteners (Saccharin)', positive: false },
    standardNatural: { value: 'Essential Oils only', positive: true },
  },
  {
    feature: 'Packaging Sustainability',
    category: 'Eco',
    dentbliss: { value: '100% Infinitely Recyclable Aluminum', positive: true, highlight: true },
    conventional: { value: 'Non-recyclable Multi-layer Plastic', positive: false },
    standardNatural: { value: 'Plastic Laminate Tubes', positive: false },
  },
  {
    feature: 'Relative Dentin Abrasivity (RDA)',
    category: 'Enamel',
    dentbliss: { value: 'Ultra-Gentle RDA 38 (Safe for veneers)', positive: true, highlight: true },
    conventional: { value: 'Abrasive RDA 100 - 150', positive: false },
    standardNatural: { value: 'Abrasive RDA 80 - 120', positive: false },
  },
]

export function ClinicalComparisonTable() {
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL')

  const filteredData = React.useMemo(() => {
    if (categoryFilter === 'ALL') return comparisonData
    return comparisonData.filter((row) => row.category === categoryFilter)
  }, [categoryFilter])

  const columns = React.useMemo<ColumnDef<ComparisonRow>[]>(
    () => [
      {
        accessorKey: 'feature',
        header: 'Clinical Standard',
        cell: (info) => (
          <div>
            <span className="font-serif font-bold text-[#2B2824] text-sm">
              {info.getValue() as string}
            </span>
          </div>
        ),
      },
      {
        accessorKey: 'dentbliss',
        header: () => (
          <div className="text-center py-1">
            <span className="text-sm font-serif font-black text-[#2D6A4F] uppercase tracking-wide flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" /> Dentbliss Probiotic
            </span>
            <span className="text-[10px] font-mono text-[#4A6B53]">LIVING BOTANICALS</span>
          </div>
        ),
        cell: (info) => {
          const val = info.getValue() as ComparisonRow['dentbliss']
          return (
            <div className="p-3 bg-[#EAF0EB] rounded-xl text-center border border-[#D2E3D6]">
              <div className="flex items-center justify-center gap-1.5 text-xs font-serif font-bold text-[#2D6A4F]">
                <Check className="w-4 h-4 text-[#2D6A4F] stroke-[3]" />
                <span>{val.value}</span>
              </div>
            </div>
          )
        },
      },
      {
        accessorKey: 'conventional',
        header: 'Conventional Brands',
        cell: (info) => {
          const val = info.getValue() as ComparisonRow['conventional']
          return (
            <div className="text-center text-xs text-[#7A6E62] font-sans p-2">
              <div className="flex items-center justify-center gap-1">
                {val.positive ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <X className="w-3.5 h-3.5 text-rose-500" />
                )}
                <span>{val.value}</span>
              </div>
            </div>
          )
        },
      },
      {
        accessorKey: 'standardNatural',
        header: 'Standard Natural Pastes',
        cell: (info) => {
          const val = info.getValue() as ComparisonRow['standardNatural']
          return (
            <div className="text-center text-xs text-[#7A6E62] font-sans p-2">
              <div className="flex items-center justify-center gap-1">
                {val.positive ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <X className="w-3.5 h-3.5 text-stone-400" />
                )}
                <span>{val.value}</span>
              </div>
            </div>
          )
        },
      },
    ],
    []
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section id="comparison" className="w-full py-16 bg-[#F4EFE6] border-t border-[#E8DFD3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#2D6A4F] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            CLEAR COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2B2824] tracking-tight">
            See the living difference.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6157] font-sans mt-2">
            Why biological dentists and holistic wellness practitioners recommend Dentbliss over conventional drugstore brands.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs font-mono">
            {['ALL', 'Microbiome', 'Enamel', 'Whitening', 'Eco'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  categoryFilter === cat
                    ? 'bg-[#2B2824] text-white font-bold shadow-sm'
                    : 'bg-white text-[#7A6E62] border border-[#DCD3C7] hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table Container (Matching the bottom comparison table from screenshot) */}
        <div className="bg-white rounded-3xl border border-[#E2D9CC] shadow-sm overflow-hidden p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b border-[#E8DFD3]">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#6B6157]"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-[#F0E9DF]">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-[#FAF6EF]/70 transition-colors">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3.5 text-xs">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
