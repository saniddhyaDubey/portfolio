"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ossContributions, OSSContribution, OSSStatus } from "@/data/oss_logs";

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ─── status badge ─────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<OSSStatus, string> = {
  merged:    "bg-pink-500/10 text-pink-500 border-pink-500/30",
  open:      "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  "in-review": "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  closed:    "bg-black/5 dark:bg-white/5 text-gray-400 border-black/10 dark:border-white/10",
};

const STATUS_DOT: Record<OSSStatus, string> = {
  merged:    "bg-pink-500",
  open:      "bg-emerald-500",
  "in-review": "bg-yellow-400",
  closed:    "bg-gray-400",
};

function StatusBadge({ status }: { status: OSSStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${STATUS_STYLES[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {status}
    </span>
  );
}

// ─── type badge ───────────────────────────────────────────────────────────────

const TYPE_LABEL: Record<OSSContribution["type"], string> = {
  bugfix:   "bug",
  feature:  "feat",
  docs:     "docs",
  refactor: "refactor",
  test:     "test",
};

// ─── single contribution card ─────────────────────────────────────────────────

function ContributionCard({ contrib, index }: { contrib: OSSContribution; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.04 }}
      className="border border-black/10 dark:border-white/10 p-6 bg-black/[0.015] dark:bg-white/[0.02] group"
    >
      {/* top row: repo + date */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <a
          href={contrib.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-gray-400 dark:text-gray-500 hover:text-pink-500 transition-colors"
        >
          {contrib.repo}
        </a>
        <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 shrink-0">
          {formatDate(contrib.date)}
        </span>
      </div>

      {/* title + PR number */}
      <h2 className="font-mono text-sm md:text-base font-bold leading-snug mb-1">
        <span className="text-pink-500">{"// "}</span>
        {contrib.title}
      </h2>

      <a
        href={contrib.prUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[10px] text-pink-500/70 hover:text-pink-500 hover:underline transition-colors"
      >
        {contrib.prNumber}&nbsp;↗
      </a>

      {/* divider */}
      <div className="w-8 h-[1.5px] bg-pink-500 my-4" />

      {/* description */}
      <p className="font-mono text-xs leading-relaxed text-gray-600 dark:text-gray-400 mb-5">
        {contrib.description}
      </p>

      {/* footer row: status + type + tags */}
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={contrib.status} />

        <span className="font-mono text-[10px] px-2 py-0.5 border border-black/15 dark:border-white/15 text-gray-500 dark:text-gray-400">
          {TYPE_LABEL[contrib.type]}
        </span>

        {contrib.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-0.5 border border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── filter pill ──────────────────────────────────────────────────────────────

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border transition-colors duration-150 ${
        active
          ? "border-pink-500 text-pink-500 bg-pink-500/5"
          : "border-black/15 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-pink-500/50 hover:text-pink-500"
      }`}
    >
      {label}
    </button>
  );
}

// ─── stats row ────────────────────────────────────────────────────────────────

function StatsRow() {
  const total = ossContributions.length;
  const merged = ossContributions.filter((c) => c.status === "merged").length;
  const repos = new Set(ossContributions.map((c) => c.repo)).size;

  const stats = [
    { label: "contributions", value: total },
    { label: "merged", value: merged },
    { label: "repos", value: repos },
  ];

  return (
    <div className="flex gap-8 mb-10 md:mb-14">
      {stats.map(({ label, value }) => (
        <div key={label}>
          <p className="font-mono text-2xl font-bold">{value}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-0.5">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

const ALL_STATUSES: OSSStatus[] = ["merged", "open", "in-review", "closed"];
const ALL_TYPES: OSSContribution["type"][] = ["bugfix", "feature", "docs", "refactor", "test"];

export default function OSSPage() {
  const [activeStatus, setActiveStatus] = useState<OSSStatus | "all">("all");
  const [activeType, setActiveType] = useState<OSSContribution["type"] | "all">("all");

  const filtered = useMemo(() => {
    return ossContributions.filter((c) => {
      const statusOk = activeStatus === "all" || c.status === activeStatus;
      const typeOk = activeType === "all" || c.type === activeType;
      return statusOk && typeOk;
    });
  }, [activeStatus, activeType]);

  // sort: merged first, then in-review, open, closed; then by date desc
  const sorted = useMemo(() => {
    const ORDER: Record<OSSStatus, number> = { merged: 0, "in-review": 1, open: 2, closed: 3 };
    return [...filtered].sort(
      (a, b) =>
        ORDER[a.status] - ORDER[b.status] || b.date.localeCompare(a.date)
    );
  }, [filtered]);

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-12 md:py-20">

      {/* ── page header ── */}
      <div className="mb-10 md:mb-14">
        <h1 className="font-mono text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-pink-500">{"// "}</span>oss
        </h1>
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mt-2 tracking-wider">
          open source contributions &nbsp;·&nbsp; PRs &nbsp;·&nbsp; patches
        </p>
        <div className="w-12 h-[1.5px] bg-pink-500 mt-4" />
      </div>

      {/* ── stats ── */}
      <StatsRow />

      {/* ── filters ── */}
      <div className="mb-8 space-y-3">
        {/* status filters */}
        <div className="flex flex-wrap gap-2">
          <FilterPill
            label="all"
            active={activeStatus === "all"}
            onClick={() => setActiveStatus("all")}
          />
          {ALL_STATUSES.map((s) => (
            <FilterPill
              key={s}
              label={s}
              active={activeStatus === s}
              onClick={() => setActiveStatus(activeStatus === s ? "all" : s)}
            />
          ))}
        </div>

        {/* type filters */}
        <div className="flex flex-wrap gap-2">
          {ALL_TYPES.map((t) => (
            <FilterPill
              key={t}
              label={TYPE_LABEL[t]}
              active={activeType === t}
              onClick={() => setActiveType(activeType === t ? "all" : t)}
            />
          ))}
        </div>
      </div>

      {/* ── contribution list ── */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {sorted.length > 0 ? (
            sorted.map((contrib, i) => (
              <ContributionCard key={contrib.prUrl} contrib={contrib} index={i} />
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border border-dashed border-black/20 dark:border-white/20 p-10 text-center"
            >
              <p className="font-mono text-sm text-gray-400 dark:text-gray-500">
                {"// no contributions match this filter"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── footer count ── */}
      <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 mt-10">
        {sorted.length} of {ossContributions.length}{" "}
        {ossContributions.length === 1 ? "contribution" : "contributions"} shown
      </p>
    </div>
  );
}
