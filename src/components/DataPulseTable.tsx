import React, { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import type { ColumnDef, SortingState } from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import {
  ArrowUpDown,
  Search,
  RefreshCw,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Activity,
  Layers,
  Database,
} from 'lucide-react'

export interface PipelineMetric {
  id: string
  name: string
  source: string
  destination: string
  eventsPerSec: number
  latencyMs: number
  dataReliability: number
  costSaved: string
  status: 'ACTIVE' | 'OPTIMIZING' | 'SYNCED' | 'STANDBY'
}

const mockPipelines: PipelineMetric[] = [
  {
    id: 'PL-901',
    name: 'Enterprise ERP to Snowflake Ingestion',
    source: 'SAP S/4HANA',
    destination: 'Snowflake Core',
    eventsPerSec: 142500,
    latencyMs: 1.4,
    dataReliability: 99.99,
    costSaved: '$42,500/mo',
    status: 'ACTIVE',
  },
  {
    id: 'PL-902',
    name: 'Real-time Clickstream & Session Analytics',
    source: 'Kafka Cluster 04',
    destination: 'ClickHouse OLAP',
    eventsPerSec: 389000,
    latencyMs: 0.8,
    dataReliability: 99.98,
    costSaved: '$89,200/mo',
    status: 'ACTIVE',
  },
  {
    id: 'PL-903',
    name: 'Customer 360 AI Feature Store',
    source: 'Postgres & BigQuery',
    destination: 'Feast AI Store',
    eventsPerSec: 74200,
    latencyMs: 2.1,
    dataReliability: 100.0,
    costSaved: '$31,000/mo',
    status: 'OPTIMIZING',
  },
  {
    id: 'PL-904',
    name: 'Financial Ledger Reconciliation Engine',
    source: 'Stripe & Adyen API',
    destination: 'BigQuery Financials',
    eventsPerSec: 19800,
    latencyMs: 3.2,
    dataReliability: 100.0,
    costSaved: '$115,000/mo',
    status: 'SYNCED',
  },
  {
    id: 'PL-905',
    name: 'IoT Sensor Telemetry Mesh',
    source: 'AWS IoT Core',
    destination: 'TimescaleDB',
    eventsPerSec: 520000,
    latencyMs: 0.5,
    dataReliability: 99.95,
    costSaved: '$64,800/mo',
    status: 'ACTIVE',
  },
  {
    id: 'PL-906',
    name: 'Cross-Cloud Vector Embeddings Sync',
    source: 'Pinecone & Qdrant',
    destination: 'OpenSearch Cluster',
    eventsPerSec: 45000,
    latencyMs: 4.8,
    dataReliability: 99.92,
    costSaved: '$18,400/mo',
    status: 'OPTIMIZING',
  },
  {
    id: 'PL-907',
    name: 'Supply Chain Forecast Model Stream',
    source: 'Databricks Lakehouse',
    destination: 'Executive Dashboard',
    eventsPerSec: 62000,
    latencyMs: 2.9,
    dataReliability: 99.99,
    costSaved: '$76,100/mo',
    status: 'SYNCED',
  },
  {
    id: 'PL-908',
    name: 'Global Ad Bidding Signal Stream',
    source: 'Edge Cloudflare KV',
    destination: 'Redis Enterprise',
    eventsPerSec: 890000,
    latencyMs: 0.3,
    dataReliability: 99.99,
    costSaved: '$140,000/mo',
    status: 'ACTIVE',
  },
]

export function DataPulseTable() {
  const [globalFilter, setGlobalFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('ALL')
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'eventsPerSec', desc: true },
  ])
  const [isLivePolling, setIsLivePolling] = useState(true)

  // TanStack Query simulation fetching live telemetry updates
  const { data: telemetryData = mockPipelines, isFetching, refetch } = useQuery({
    queryKey: ['pipeline-telemetry'],
    queryFn: async () => {
      // Simulate live random flux in events and latency
      return mockPipelines.map((item) => {
        const flux = (Math.random() - 0.5) * 0.08
        return {
          ...item,
          eventsPerSec: Math.round(item.eventsPerSec * (1 + flux)),
          latencyMs: +(item.latencyMs * (1 + flux * 0.5)).toFixed(2),
        }
      })
    },
    refetchInterval: isLivePolling ? 3500 : false,
  })

  // Filtered data based on status selection
  const filteredData = React.useMemo(() => {
    if (statusFilter === 'ALL') return telemetryData
    return telemetryData.filter((item) => item.status === statusFilter)
  }, [telemetryData, statusFilter])

  const columns = React.useMemo<ColumnDef<PipelineMetric>[]>(
    () => [
      {
        accessorKey: 'name',
        header: ({ column }) => (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white"
          >
            Pipeline Name / Topology
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
          </button>
        ),
        cell: (info) => {
          const row = info.row.original
          return (
            <div>
              <div className="font-bold text-white text-sm flex items-center gap-2 font-heading">
                <span>{info.getValue() as string}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {row.id}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                <span className="text-slate-300">{row.source}</span>
                <span className="text-cyan-400">➔</span>
                <span className="text-cyan-300 font-semibold">{row.destination}</span>
              </div>
            </div>
          )
        },
      },
      {
        accessorKey: 'eventsPerSec',
        header: ({ column }) => (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white"
          >
            Throughput (Events/s)
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
          </button>
        ),
        cell: (info) => (
          <div className="font-mono font-bold text-slate-200">
            {(info.getValue() as number).toLocaleString()}{' '}
            <span className="text-[10px] text-slate-500 font-normal">evt/s</span>
          </div>
        ),
      },
      {
        accessorKey: 'latencyMs',
        header: ({ column }) => (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white"
          >
            Latency
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
          </button>
        ),
        cell: (info) => {
          const val = info.getValue() as number
          const isUltraFast = val <= 1.0
          return (
            <div className="flex items-center gap-2">
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded font-bold ${
                  isUltraFast
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                }`}
              >
                {val} ms
              </span>
            </div>
          )
        },
      },
      {
        accessorKey: 'dataReliability',
        header: 'SLA Reliability',
        cell: (info) => (
          <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
            <div className="w-16 h-2 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
                style={{ width: `${info.getValue() as number}%` }}
              />
            </div>
            <span className="text-emerald-400 font-semibold">{info.getValue() as number}%</span>
          </div>
        ),
      },
      {
        accessorKey: 'costSaved',
        header: 'Cloud Savings',
        cell: (info) => (
          <div className="font-mono text-xs font-bold text-amber-300">
            {info.getValue() as string}
          </div>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: (info) => {
          const status = info.getValue() as string
          if (status === 'ACTIVE') {
            return (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ACTIVE
              </span>
            )
          }
          if (status === 'OPTIMIZING') {
            return (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <Activity className="w-3 h-3 animate-spin text-cyan-400" />
                OPTIMIZING
              </span>
            )
          }
          return (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
              <CheckCircle2 className="w-3 h-3 text-purple-400" />
              SYNCED
            </span>
          )
        },
      },
    ],
    []
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
  })

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
      {/* Top Header Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight font-heading flex items-center gap-2">
                Live Data Pipeline Explorer
                <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full">
                  TanStack Table + Query
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Real-time telemetry and cloud data warehouse acceleration benchmarks
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 sm:flex-none sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search pipelines, sources..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
            />
          </div>

          {/* Status Filter buttons */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-mono">
            {['ALL', 'ACTIVE', 'OPTIMIZING', 'SYNCED'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  statusFilter === st
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Live Polling Refresh button */}
          <button
            onClick={() => {
              setIsLivePolling(!isLivePolling)
              refetch()
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              isLivePolling
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? 'animate-spin text-emerald-400' : ''}`} />
            <span>{isLivePolling ? 'LIVE' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-slate-800/80 bg-slate-900/40">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 text-xs font-mono text-slate-400">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-slate-500 font-mono text-xs">
                  No matching data pipelines found.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-slate-900/50 transition-colors group"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3.5 text-xs">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination & Summary Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span>
            Showing Page <strong className="text-white">{table.getState().pagination.pageIndex + 1}</strong> of{' '}
            <strong className="text-white">{table.getPageCount()}</strong>
          </span>
          <span className="text-slate-600">|</span>
          <span>{filteredData.length} Total Enterprise Feeds</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-slate-700"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-slate-700"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
