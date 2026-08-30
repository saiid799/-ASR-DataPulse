import React from 'react'

export function TechArchitectureBanner() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4 pb-2 relative flex items-center justify-center select-none">
      <svg
        viewBox="0 0 900 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-56 drop-shadow-md"
      >
        {/* Soft Background Warm Glow */}
        <ellipse cx="450" cy="130" rx="380" ry="80" fill="#F4E6CE" fillOpacity="0.5" />

        {/* Connecting Data Bus Conduit Line (Left to Right) */}
        <path
          d="M 120 120 C 260 40, 340 180, 450 120 C 560 60, 640 190, 780 120"
          stroke="#D48B47"
          strokeWidth="4"
          strokeDasharray="8 8"
          fill="none"
          opacity="0.6"
        />

        {/* Left Node: Event Stream (Kafka / Realtime Stream) */}
        <g transform="translate(140, 60)">
          <circle cx="50" cy="50" r="46" fill="url(#kafkaGrad)" />
          <circle cx="50" cy="50" r="40" fill="#24211E" />
          {/* Stream Waves */}
          <path
            d="M 32 50 Q 41 35 50 50 Q 59 65 68 50"
            stroke="#F4A261"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="32" cy="50" r="3" fill="#E76F51" />
          <circle cx="50" cy="50" r="3" fill="#F4A261" />
          <circle cx="68" cy="50" r="3" fill="#52B788" />
          {/* Label Badge */}
          <rect x="18" y="102" width="64" height="18" rx="9" fill="#F4EFE6" stroke="#DCD3C7" />
          <text x="50" y="114" textAnchor="middle" fill="#2B2824" fontSize="8" fontFamily="monospace" fontWeight="bold">
            KAFKA CDC
          </text>
        </g>

        {/* Second Node: SQL Transformation (dbt Core / Dag) */}
        <g transform="translate(260, 40)">
          <circle cx="55" cy="55" r="50" fill="url(#dbtGrad)" />
          <circle cx="55" cy="55" r="44" fill="#FFFBEB" />
          {/* dbt Polygon & Gear */}
          <path
            d="M 55 25 L 80 40 L 80 70 L 55 85 L 30 70 L 30 40 Z"
            fill="#FF694B"
            fillOpacity="0.85"
          />
          <circle cx="55" cy="55" r="8" fill="#FFFBEB" />
          <rect x="25" y="114" width="60" height="18" rx="9" fill="#F4EFE6" stroke="#DCD3C7" />
          <text x="55" y="126" textAnchor="middle" fill="#2B2824" fontSize="8" fontFamily="monospace" fontWeight="bold">
            dbt CORE
          </text>
        </g>

        {/* Center Node: Massive Cloud Lakehouse (Snowflake / Iceberg Core) */}
        <g transform="translate(385, 15)">
          <circle cx="65" cy="65" r="62" fill="url(#snowflakeGrad)" />
          <circle cx="65" cy="65" r="55" fill="#2B2824" />
          {/* Snowflake Crystal & Data Layers */}
          <path
            d="M 65 30 L 65 100 M 30 65 L 100 65 M 40 40 L 90 90 M 40 90 L 90 40"
            stroke="#29B5E8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="65" cy="65" r="14" fill="#00EBFF" fillOpacity="0.3" />
          <circle cx="65" cy="65" r="6" fill="#FFFFFF" />
          <rect x="25" y="136" width="80" height="20" rx="10" fill="#2B2824" />
          <text x="65" y="149" textAnchor="middle" fill="#00EBFF" fontSize="9" fontFamily="monospace" fontWeight="bold">
            SNOWFLAKE
          </text>
        </g>

        {/* Fourth Node: OLAP Speed Engine (ClickHouse / DuckDB) */}
        <g transform="translate(535, 40)">
          <circle cx="50" cy="55" r="46" fill="url(#clickhouseGrad)" />
          <circle cx="50" cy="55" r="40" fill="#FFFBEB" />
          {/* ClickHouse Bars */}
          <rect x="34" y="48" width="6" height="20" fill="#FFCC00" rx="2" />
          <rect x="44" y="38" width="6" height="30" fill="#FF3333" rx="2" />
          <rect x="54" y="44" width="6" height="24" fill="#FF9900" rx="2" />
          <rect x="64" y="34" width="6" height="34" fill="#00CC66" rx="2" />
          <rect x="18" y="112" width="64" height="18" rx="9" fill="#F4EFE6" stroke="#DCD3C7" />
          <text x="50" y="124" textAnchor="middle" fill="#2B2824" fontSize="8" fontFamily="monospace" fontWeight="bold">
            CLICKHOUSE
          </text>
        </g>

        {/* Fifth Node: AI & Vector Intelligence (PyTorch / Embeddings) */}
        <g transform="translate(650, 60)">
          <circle cx="50" cy="50" r="46" fill="url(#aiGrad)" />
          <circle cx="50" cy="50" r="40" fill="#24211E" />
          {/* Neural Mesh Nodes */}
          <path
            d="M 35 38 L 50 30 L 65 38 L 60 58 L 40 58 Z"
            stroke="#A78BFA"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="35" cy="38" r="4" fill="#EC4899" />
          <circle cx="50" cy="30" r="4" fill="#8B5CF6" />
          <circle cx="65" cy="38" r="4" fill="#3B82F6" />
          <circle cx="60" cy="58" r="4" fill="#10B981" />
          <circle cx="40" cy="58" r="4" fill="#F59E0B" />
          <rect x="16" y="102" width="68" height="18" rx="9" fill="#F4EFE6" stroke="#DCD3C7" />
          <text x="50" y="114" textAnchor="middle" fill="#2B2824" fontSize="8" fontFamily="monospace" fontWeight="bold">
            VECTOR AI
          </text>
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="kafkaGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4A261" />
            <stop offset="1" stopColor="#E76F51" />
          </linearGradient>
          <linearGradient id="dbtGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8C70" />
            <stop offset="1" stopColor="#FF4B2B" />
          </linearGradient>
          <linearGradient id="snowflakeGrad" x1="0" y1="0" x2="130" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#29B5E8" />
            <stop offset="1" stopColor="#11567F" />
          </linearGradient>
          <linearGradient id="clickhouseGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFCC00" />
            <stop offset="1" stopColor="#FF3333" />
          </linearGradient>
          <linearGradient id="aiGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C084FC" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
