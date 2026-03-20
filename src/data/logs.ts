export type SubEntry = {
  title: string;
  body: string;
  tags?: string[];
  link?: string;
};

export type LogEntry = {
  date: string;
  title: string;
  body: string;
  tags: string[];
  link?: string;
  more?: SubEntry[];
};

export const logs: LogEntry[] = [
  {
    date: "2026-03-19",
    title: "Portfolio updates + 3 more questions. Weekend outing incoming.",
    body: "Updated the portfolio a bit and kept the interview prep going. 3 questions done. Going on a short outing this weekend — balance is part of the process.",
    tags: ["leetcode", "dsa", "life"],
    more: [
      {
        title: "LC 104 — Maximum Depth of Binary Tree",
        body: "Easy one. From each node, recurse into left and right until you hit null (return 0). Take the max of both children, add 1, return up to the parent. Clean.",
        tags: ["tree", "recursion", "easy"],
      },
      {
        title: "LC 1493 — Longest Subarray of 1s After Deleting One Element",
        body: "Sliding window. Keep sliding while you have 1s, using one element as a substitute zero. Track the last zero's index — the moment you hit a second zero, move left pointer to (last zero index + 1). Keep going.",
        tags: ["sliding-window", "medium"],
      },
      {
        title: "LC 3070 — Count Submatrices with Top-Left Element and Sum Less Than k",
        body: "Had doubts on the sub-matrix size. Considered single-source BFS, but prefix sum approach was cleaner and easier. Worked it out. I'm not stupid.",
        tags: ["prefix-sum", "medium"],
      },
    ],
  },
  {
    date: "2026-03-18",
    title: "Survived the job market without crashing. 3 questions.",
    body: "Bad job market energy today but didn't let it win. Pushed through 3 LC questions anyway. The grind is the only thing I can control right now.",
    tags: ["leetcode", "dsa", "life"],
    more: [
      {
        title: "LC 1047 — Remove All Adjacent Duplicates In String",
        body: "Solved it but couldn't think of stack at first. Key signal: when removing something exposes new adjacent elements that might also need removal — that cascading effect is exactly what a stack is built for.",
        tags: ["stack", "easy"],
      },
      {
        title: "LC 2697 — Lexicographically Smallest Palindrome",
        body: "For each mismatched pair in the palindrome check, replace both characters with the smallest of the two. That's literally the whole trick.",
        tags: ["string", "greedy", "easy"],
      },
      {
        title: "LC 1403 — Minimum Subsequence in Non-Increasing Order",
        body: "Tripped myself up on this one. The dispersed clues: max sum, minimum length, decreasing order. 'Subsequence' was a bluff — the answer is unique, so sort in decreasing order early and calculate sum from there.",
        tags: ["sorting", "greedy", "easy"],
      },
    ],
  },
  {
    date: "2026-03-17",
    title: "Started leetgoat.io — building the interview toolkit",
    body: "Systematic sheet, problem by problem. The goal isn't just solving — it's locking in the pattern. Will keep logging sessions here. The chain of thought is the real learning.",
    tags: ["leetcode", "dsa", "interview-prep"],
    link: "https://leetgoat.io",
  },
  {
    date: "2026-03-12",
    title: "Open addressing vs chaining — people were so damn smart",
    body: "Went deep on hashmap collision strategies today. Open addressing probes for the next empty slot; chaining keeps a linked list at each bucket. These designs are decades old and still power every modern language runtime. Respect.",
    tags: ["dsa", "hashmap", "learning"],
  },
  {
    date: "2026-03-11",
    title: "Back on the grind — LeetCode and system design",
    body: "Arrays and hashmaps today — the classics. Quick revision session, nothing fancy. I genuinely love these two things and could do them forever. Building the muscle back up before interviews.",
    tags: ["leetcode", "dsa", "system-design"],
  },
  {
    date: "2026-03-09",
    title: "Passed Round 2 of Summer of Bitcoin — PSBT in TypeScript",
    body: "Built a Partially Signed Bitcoin Transaction (PSBT) implementation in TypeScript — the standard format that lets hot and cold wallets coordinate signatures without ever sharing private keys. Learning how wallets stay isolated yet interoperable was genuinely mind-bending. Two down, one to go. LFG 🚀",
    tags: ["bitcoin", "typescript", "psbt", "summer-of-bitcoin"],
  },
  {
    date: "2026-02-26",
    title: "Passed Round 1 of Summer of Bitcoin — Bitcoin parser in C++",
    body: "1300 lines of C++, full unit tests, and a React UI so non-techies can interact with raw Bitcoin data. Built an end-to-end block parser from scratch — no shortcuts, no abstractions I didn't understand. First elimination round out of three: cleared. LFG 🚀",
    tags: ["bitcoin", "cpp", "summer-of-bitcoin"],
  },
  {
    date: "2026-02-20",
    title: "Redis pub/sub is simpler than I thought",
    body: "Built a real-time notification system using Redis pub/sub with Node.js. Mental model is just a fire-and-forget broadcast channel. Way simpler than Kafka for small-scale stuff, and that's totally fine.",
    tags: ["redis", "backend", "real-time"],
  },
  {
    date: "2026-02-16",
    title: "Selected for Summer of Bitcoin Developer Track",
    body: "One of a small global cohort chosen for Summer of Bitcoin — a highly selective open-source Bitcoin protocol engineering program that filters hard on technical depth and commitment. Working on Challenge 1. Bitcoin in 2026 is the right thing to go deep on.",
    tags: ["bitcoin", "summer-of-bitcoin"],
  },
  {
    date: "2026-02-14",
    title: "Won Best Use of ElevenLabs at Hack_NCState",
    body: "Third hackathon win. Built YeetCode — a voice-powered coding interview prep platform using ElevenLabs. Pulled it together in under 24 hours. The energy at a hackathon still hits different every single time.",
    tags: ["hackathon", "elevenlabs", "win"],
    link: "https://devpost.com/software/yeetcode-ngdpkc",
  },
];
