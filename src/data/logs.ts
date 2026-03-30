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
    date: "2026-03-27",
    title: "Was fearing a medium question -- finally faced it even though i wrote the naive solution.",
    body: "there are times when you try to avoid looking anything about the question and just starts. I looked at the tag by mistake and was somehow avoiding it. well, time to face it",
    tags: ["leetcode", "dsa"],
    more: [
      {
        title: "LC 93 - Restore IP Addresses",
        body: "for the given string of number, return the list of all possible ip addresses. well few constraints i was able to think of were like: a. every segment in the IP can have atmax of length 3. b. 3 dots with each dots in a fixed range. c. start with comparing the first segment and if valid then move forward or else early prunning. Using a 3 loop solution, was able to come up with a solution by doing manual string comparison. Can definitely make it better, will get back to this next week with a fresh brain. took a lot of time to code!!!",
        tags: ["backtracking", "strings", "medium"],
      }
    ],
  },
  {
    date: "2026-03-26",
    title: "TA lecture and 1 question -- job market was hard on me today!!",
    body: "Was in touch with 2 HRs and both ghosted at the same time. It's crazy to even think about getting a job, ughhh. A simple tree question to make me feel good.",
    tags: ["leetcode", "dsa", "TA", "daily-routine"],
    more: [
      {
        title: "LC 112 - Path Sum",
        body: "simple dfs call and calculating the path sum from root to each leaf and checking with given target. pretty simple. but i want to dive more in trees algo, there are so many variation to a simple dfs.",
        tags: ["trees", "dfs", "easy"],
      }
    ],
  },
  {
    date: "2026-03-25",
    title: "casual day -- grinding lc with ease",
    body: "learned more about graphs and its proof. 2 basic questions for diagonal traversal.",
    tags: ["leetcode", "dsa"],
    more: [
      {
        title: "LC 766 - Toeplitz Matrix",
        body: "have to check all the elements same in each diagonal from top left to bottom right. a simple 2 loop solution.",
        tags: ["matrix", "easy"],
      },
      {
        title: "LC 498 - Diagonal Traverse",
        body: "This one was kinda nice. I started with brute force. going cell by cell and changing direction. Two direction calculation everytime. Did solved but could have done better. Will get back to this question in a few days to improve the chain of thought. will def share.",
        tags: ["matrix", "medium"],
      },
    ],
  },
  {
    date: "2026-03-24",
    title: "One of the best TA lecture, 4 good question, Uber's rate limitng system design blog [Overall Happy :p].",
    body: "The lecture I TA for is an operating system class. And, today's topic was exploring network model -- OSI, TCP/IP, and how it is implemented in wireshark. Helped so many students to understand the protocols and how to use wireshark, awesome tool. BTW, job market still sucks, why it is so damn hard to get a job. Nevermind, the rant stays on, but did solved good 4 leetcode questions.",
    tags: ["leetcode", "dsa", "TA", "daily-routine"],
    more: [
      {
        title: "LC 383 - Ransom Note",
        body: "straight forward question of hashtable and just checked the frequency -> space is currently o(n) where n is the size of string magazine. but, constraints says only lowercase so use a vector of 26 -> space complexity o(26).",
        tags: ["hashtable", "counting", "easy"],
      },
      {
        title: "LC 1695 - Maximum Erasure Value",
        body: "pretty easy to understand: single operation allowed of deleting a subarray which has unique elements and max sum i.e. score. uniquieness made the question more inclined towards sliding window for me. using hashtable and sliding window a o(n) i.e. single pass solution works properly.",
        tags: ["sliding window", "hashtable", "medium"],
      },
      {
        title: "LC 970 - Powerful Integers",
        body: "a really good math question. for given x and y, we get the upper bound of log(bound) to the base x and base y for each x & y. lower bound remains 0 as per the question. for each pair from x and y, calculate the sum and append if the condition matches. LOG really helps in these kind of questions.",
        tags: ["Maths", "medium"],
      },
      {
        title: "LC 75 - Sort Colors",
        body: "one of my favorite algorithm. the underlying assumption and implementation is so cool which makes it really easy to understand and very powerful to visualize in your head. the chain of thought was very simple: 3 imaginary boundary (one for 0s, one for 1s and one for 2s) -> the in between was unsorted and we move based on the value. But, there's a very subtle concept of why we increase mid when swapping with left and not increasing mid when swapping with right. We are sure the element at left is already processed by mid before so even swapping the worst case is it's 1 which we skip anyway. but, the element when swapped with right is unknown and that's why we check that again.",
        tags: ["Dutch national flag algorithm", "medium"],
      },
      {
        title: "Uber’s Rate Limiting System",
        body: "Design a Rate Limiter, a question asked in an interview and you know the pieces but no solid connection to drive the interview and ace it. This blog really helps, why Uber implemented the rate limiter in first place (problem statment), which algorithms it used (working), how it changed to server 1M+ DAU (scalability), and how it's made fault tolerant (reliability). Apart from this, there dynamic drop ratio calculation and a GRL (Global Rate Limiter) concept was very interesting. Still many things were new to me, will definitely give more time to this.",
        link: "https://www.uber.com/blog/ubers-rate-limiting-system/",
        tags: ["system design learnings", "easy-medium"],
      },
    ],
  },
  {
    date: "2026-03-23",
    title: "Relaxing weekend, started with leetcode and basic DSA.",
    body: "One of the best weekend I spent at outer banks with my boys. Back at leetcode, solved two simple questions and spent time understanding Depth-First Search in detail with examples dry run. I'm in love with algorithms.",
    tags: ["leetcode", "dsa", "life"],
    more: [
      {
        title: "LC 3212 — Count Submatrices With Equal Frequency of X and Y",
        body: "Simple one. 3 basic condition for each submatrix. reversed it and made a simple if-else with prefix sum logic (upper cell + previous cell) - diagonal cell [left side]. O(n^2) solution and will definitely spend more time understanding the optimal approach.",
        tags: ["Matrix", "prefix-sum", "medium"],
      },
      {
        title: "LC 122 — Best Time to Buy and Sell Stock II",
        body: "have already done this before but wanted to come up with a chain of thought. Question already gave all the hints -- each day can be a buy or sell, and can also buy/sell multiple times -> current price can be higher/lower/same than the previous day's. profit only in higher and the sum of all positive difference is the actual biggest profit -> greedy confirmed.",
        tags: ["greedy", "medium"],
      },
    ],
  },
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
