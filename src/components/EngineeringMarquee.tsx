import React from 'react'

export function EngineeringMarquee() {
  const items = [
    'APACHE KAFKA & CDC STREAMING',
    'SNOWFLAKE & ICEBERG LAKEHOUSES',
    'dbt CORE MODULAR MODELING',
    'CLICKHOUSE SUB-MILLISECOND OLAP',
    'PYTHON & PYTORCH FEATURE STORES',
    '50%+ CLOUD COMPUTE COST REDUCTION',
    'ZERO SCHEMA REGRESSION TESTING',
    'SOC2 TYPE II VAULT COMPLIANCE',
  ]

  return (
    <div className="w-full bg-[#2B2824] text-[#FAF6EF] py-3 overflow-hidden border-y border-[#3E3832] select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-[#F4A261] transition-colors">{item}</span>
            <span className="text-[#F4A261] font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
