"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logs, LogEntry, SubEntry } from "@/data/logs";

// ─── helpers ──────────────────────────────────────────────────────────────────

function toDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getTodayStr(): string {
  return toDateStr(new Date());
}

function formatLong(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShort(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// ─── all-time stats ───────────────────────────────────────────────────────────

function computeStats(sortedDates: string[]) {
  const total = logs.reduce((sum, l) => sum + 1 + (l.more?.length ?? 0), 0);
  const days = sortedDates.length;

  // longest consecutive-day streak
  let best = 0;
  let run = 0;
  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) { run = 1; }
    else {
      const prev = new Date(sortedDates[i - 1]);
      const curr = new Date(sortedDates[i]);
      const diff = (prev.getTime() - curr.getTime()) / 86_400_000;
      run = diff === 1 ? run + 1 : 1;
    }
    if (run > best) best = run;
  }

  const oldest = sortedDates[sortedDates.length - 1] ?? "";
  return { total, days, streak: best, oldest };
}

// ─── reusable entry block (used for main + more[]) ───────────────────────────

function EntryBlock({ title, body, tags, link }: Omit<SubEntry, "tags"> & { tags?: string[] }) {
  return (
    <div>
      <h2 className="font-mono text-base md:text-lg font-bold leading-snug">
        <span className="text-pink-500">{"// "}</span>
        {title}
      </h2>

      <div className="w-8 h-[1.5px] bg-pink-500 my-4" />

      <p className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {body}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-pink-500 hover:underline mt-4 inline-block break-all"
        >
          {link}&nbsp;↗
        </a>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 border border-black/20 dark:border-white/20 text-gray-500 dark:text-gray-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function LogTimeline() {
  const [mounted, setMounted] = useState(false);
  const [todayStr, setTodayStr] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [direction, setDirection] = useState<1 | -1>(1);

  // static: build once
  const logsByDate = useMemo(() => {
    const map = new Map<string, LogEntry>();
    logs.forEach((l) => map.set(l.date, l));
    return map;
  }, []);

  // sorted newest → oldest
  const sortedDates = useMemo(
    () => [...logs].map((l) => l.date).sort((a, b) => b.localeCompare(a)),
    []
  );

  useEffect(() => {
    const today = getTodayStr();
    setTodayStr(today);
    const initial = logsByDate.has(today) ? today : sortedDates[0] ?? today;
    setSelectedDate(initial);
    setMounted(true);
  }, [logsByDate, sortedDates]);

  // navigation
  const currentIndex = sortedDates.indexOf(selectedDate);
  const olderDate = currentIndex < sortedDates.length - 1 ? sortedDates[currentIndex + 1] : null;
  const newerDate = currentIndex > 0 ? sortedDates[currentIndex - 1] : null;
  const currentEntry = logsByDate.get(selectedDate);

  function navigate(date: string, dir: 1 | -1) {
    setDirection(dir);
    setSelectedDate(date);
  }

  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-12 md:py-20">

      {/* ── page header ── */}
      <div className="mb-10 md:mb-14">
        <h1 className="font-mono text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-pink-500">{"// "}</span>logs
        </h1>
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mt-2 tracking-wider">
          small wins &nbsp;·&nbsp; tech learnings &nbsp;·&nbsp; daily notes
        </p>
        <div className="w-12 h-[1.5px] bg-pink-500 mt-4" />
      </div>

      {/* ── date navigation bar ── */}
      <div className="mb-5">
        {/* center: today badge + current date */}
        <div className="text-center mb-4">
          {selectedDate === todayStr ? (
            <span className="font-mono text-[10px] uppercase tracking-widest text-pink-500">
              today
            </span>
          ) : (
            <button
              onClick={() => {
                const target = logsByDate.has(todayStr) ? todayStr : sortedDates[0];
                if (target) navigate(target, 1);
              }}
              className="font-mono text-[10px] uppercase tracking-widest text-pink-500 hover:underline"
            >
              ↩ back to today
            </button>
          )}
          <p className="font-mono text-base font-bold mt-1">{formatLong(selectedDate)}</p>
        </div>

        {/* prev / next buttons */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => olderDate && navigate(olderDate, -1)}
            disabled={!olderDate}
            className={`flex items-center gap-2 px-3 py-1.5 border font-mono text-xs transition-colors duration-150 ${
              olderDate
                ? "border-black/20 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 cursor-pointer"
                : "border-black/8 dark:border-white/8 text-gray-300 dark:text-gray-700 cursor-not-allowed"
            }`}
          >
            ←&nbsp;<span>{olderDate ? formatShort(olderDate) : "—"}</span>
          </button>

          <button
            onClick={() => newerDate && navigate(newerDate, 1)}
            disabled={!newerDate}
            className={`flex items-center gap-2 px-3 py-1.5 border font-mono text-xs transition-colors duration-150 ${
              newerDate
                ? "border-black/20 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 cursor-pointer"
                : "border-black/8 dark:border-white/8 text-gray-300 dark:text-gray-700 cursor-not-allowed"
            }`}
          >
            <span>{newerDate ? formatShort(newerDate) : "—"}</span>&nbsp;→
          </button>
        </div>
      </div>

      {/* ── entry card ── */}
      <AnimatePresence mode="wait" custom={direction}>
        {currentEntry ? (
          <motion.article
            key={selectedDate}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 28 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -28 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border border-black/10 dark:border-white/10 p-6 md:p-8 bg-black/[0.015] dark:bg-white/[0.02]"
          >
            {/* primary entry */}
            <EntryBlock
              title={currentEntry.title}
              body={currentEntry.body}
              tags={currentEntry.tags}
              link={currentEntry.link}
            />

            {/* additional entries for the same day */}
            {currentEntry.more?.map((sub, i) => (
              <div key={i}>
                {/* divider with item counter */}
                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-[1px] bg-black/10 dark:bg-white/10" />
                  <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 tracking-widest">
                    [{i + 2}]
                  </span>
                  <div className="flex-1 h-[1px] bg-black/10 dark:bg-white/10" />
                </div>
                <EntryBlock
                  title={sub.title}
                  body={sub.body}
                  tags={sub.tags}
                  link={sub.link}
                />
              </div>
            ))}
          </motion.article>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border border-dashed border-black/20 dark:border-white/20 p-10 text-center"
          >
            <p className="font-mono text-sm text-gray-400 dark:text-gray-500">
              {"// no entry for this day"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── all-time stats ── */}
      {(() => {
        const { total, days, streak, oldest } = computeStats(sortedDates);
        const stats = [
          { label: "entries", value: total },
          { label: "days", value: days },
          { label: "best streak", value: `${streak}d` },
          { label: "since", value: oldest ? formatShort(oldest) : "—" },
        ];
        return (
          <div className="mt-14 md:mt-16 border-t border-black/10 dark:border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              — all time
            </p>
            <div className="flex gap-8 flex-wrap">
              {stats.map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-lg font-bold">{value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
