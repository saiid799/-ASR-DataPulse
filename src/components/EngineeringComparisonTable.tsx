import React, { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'
import { Check, X, Sparkles, Shield, Terminal } from 'lucide-react'

interface EngineeringComparisonRow {
  feature: string
  category: string
  seniorEngineer: {
    value: string
    positive: boolean
    highlight?: boolean
  }
  bigAgency: {
    value: string
    positive: boolean
  }
  genericFreelancer: {
    value: string
    positive: boolean
  }
}

const comparisonData: EngineeringComparisonRow[] = [
  {
    feature: 'Pipeline Architecture & Speed',
    category: 'Speed',
    seniorEngineer: { value: 'Sub-second real-time CDC Kafka streams', positive: true, highlight: true },
    bigAgency: { value: 'Legacy 12-hour overnight cron scripts', positive: false },
    genericFreelancer: { value: 'Ad-hoc fragile Python scripts', positive: false },
  },
  {
    feature: 'Cloud Warehouse Cost Control',
    category: 'Cost',
    seniorEngineer: { value: '50%+ compute savings via query clustering', positive: true, highlight: true },
    bigAgency: { value: 'Inflated bills; markup on cloud hours', positive: false },
    genericFreelancer: { value: 'Zero cost or scan optimization', positive: false },
  },
  {
    feature: 'CI/CD & Automated Testing',
    category: 'Reliability',
    seniorEngineer: { value: 'Automated dbt regression tests on every PR', positive: true, highlight: true },
    bigAgency: { value: 'Manual testing done by junior staff', positive: false },
    genericFreelancer: { value: 'No automated tests or lineage', positive: false },
  },
  {
    feature: 'Data Lineage & Documentation',
    category: 'Reliability',
    seniorEngineer: { value: 'Living interactive DAGs & complete docs', positive: true, highlight: true },
    bigAgency: { value: 'Outdated static slide deck', positive: false },
    genericFreelancer: { value: 'Undocumented spaghetti SQL', positive: false },
  },
  {
    feature: 'Direct Technical Communication',
    category: 'Velocity',
    seniorEngineer: { value: 'Direct Slack channel with Lead Engineer', positive: true, highlight: true },
    bigAgency: { value: 'Filtered through 3 layers of PMs', positive: false },
    genericFreelancer: { value: 'Unreliable response times', positive: false },
  },
  {
    feature: 'Security & SOC2 Compliance',
    category: 'Security',
    seniorEngineer: { value: 'Automated PII masking & HashiCorp Vault', positive: true, highlight: true },
    bigAgency: { value: 'Generic boilerplate checklists', positive: false },
    genericFreelancer: { value: 'Hardcoded plaintext credentials', positive: false },
  },
  {
    feature: 'IP Ownership & Vendor Lock-in',
    category: 'Ownership',
    seniorEngineer: { value: '100% full code handover & zero lock-in', positive: true, highlight: true },
    bigAgency: { value: 'Proprietary connectors & retainer traps', positive: false },
    genericFreelancer: { value: 'Scattered code repositories', positive: false },
  },
]

export function EngineeringComparisonTable() {
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL')

  const filteredData = React.useMemo(() => {
    if (categoryFilter === 'ALL') return comparisonData
    return comparisonData.filter((row) => row.category === categoryFilter)
  }, [categoryFilter])

  const columns = React.useMemo<ColumnDef<EngineeringComparisonRow>[]>(
    () => [
      {
        accessorKey: 'feature',
        header: 'Architecture Standard',
        cell: (info) => (
          <div>
            <span className="font-serif font-bold text-[#2B2824] text-sm">
              {info.getValue() as string}
            </span>
          </div>
        ),
      },
      {
        accessorKey: 'seniorEngineer',
        header: () => (
          <div className="text-center py-1">
            <span className="text-sm font-serif font-black text-[#2D6A4F] uppercase tracking-wide flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" /> Senior Computer Data Engineer
            </span>
            <span className="text-[10px] font-mono text-[#4A6B53]">ASR DATAPULSE STANDARD</span>
          </div>
        ),
        cell: (info) => {
          const val = info.getValue() as EngineeringComparisonRow['seniorEngineer']
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
        accessorKey: 'bigAgency',
        header: 'Traditional Big IT Agency',
        cell: (info) => {
          const val = info.getValue() as EngineeringComparisonRow['bigAgency']
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
        accessorKey: 'genericFreelancer',
        header: 'Junior Freelancers',
        cell: (info) => {
          const val = info.getValue() as EngineeringComparisonRow['genericFreelancer']
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
            TECHNICAL COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2B2824] tracking-tight">
            See the engineering difference.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6157] font-sans mt-2">
            Why CTOs and engineering directors choose a dedicated Lead Computer Data Engineer over slow agencies or unvetted freelancers.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs font-mono">
            {['ALL', 'Speed', 'Cost', 'Reliability', 'Velocity', 'Security', 'Ownership'].map((cat) => (
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
