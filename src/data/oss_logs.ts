export type OSSStatus = "merged" | "open" | "in-review";

export type OSSContribution = {
  repo: string;           // e.g. "bitcoin/bitcoin"
  repoUrl: string;        // link to the repo
  title: string;          // PR / issue title
  description: string;    // what you did and why it matters
  prUrl: string;          // direct link to the PR or issue
  prNumber: string;       // e.g. "#28471"
  status: OSSStatus;
  type: "bugfix" | "feature" | "docs" | "refactor" | "test";
  tags: string[];
  date: string;           // YYYY-MM-DD (date opened or merged)
};

export const ossContributions: OSSContribution[] = [
  {
    repo: "cameri/nostream",
    repoUrl: "https://github.com/cameri/nostream",
    title: "fix: maxlimit check to subscription event requests",
    description:
      "Fixed the maxlimit check for subscription event requests to prevent potential abuse and ensure proper handling of subscription limits. This is important for maintaining the stability and performance of Nostream, especially under high load conditions where clients may attempt to subscribe to a large number of events. By enforcing the maxlimit check correctly, we can protect Nostream from potential DoS attacks and ensure a better experience for all users.",
    prUrl: "https://github.com/cameri/nostream/pull/600",
    prNumber: "#600",
    status: "merged",
    type: "bugfix",
    tags: ["nostr", "security", "DoS protection"],
    date: "2026-05-03",
  },
  {
    repo: "cameri/nostream",
    repoUrl: "https://github.com/cameri/nostream",
    title: "feat: Add k6 connection and message rate limiter tests",
    description:
      "Added k6 tests for connection handling and message rate limiting. This ensures that Nostream can handle high loads and maintain performance under various scenarios. The tests include scenarios for connection spikes, message bursts, and sustained high traffic to validate the effectiveness of the rate limiter and overall stability of Nostream. This is important for ensuring that Nostream can be reliably used in production environments where traffic patterns can be unpredictable.",
    prUrl: "https://github.com/cameri/nostream/pull/556",
    prNumber: "#556",
    status: "merged",
    type: "feature",
    tags: ["nostr", "redis", "k6", "test suite", "rate limiter"],
    date: "2026-04-20",
  },
  {
    repo: "cameri/nostream",
    repoUrl: "https://github.com/cameri/nostream",
    title: "fix: restore and update CONFIGURATION.md, remove duplicate changesets",
    description:
      "Restored and updated the CONFIGURATION.md file, removing duplicate changesets. This ensures that the configuration documentation is accurate and up-to-date. This is important for users to have clear and correct information on how to configure Nostream, especially after recent changes that may have caused confusion.",
    prUrl: "https://github.com/cameri/nostream/pull/538",
    prNumber: "#538",
    status: "merged",
    type: "bugfix",
    tags: ["nostr", "CONFIGURATION", "docs"],
    date: "2026-04-19",
  },
  {
    repo: "cameri/nostream",
    repoUrl: "https://github.com/cameri/nostream",
    title: "feat: implement EWMA rate limiter with strategy support (#404)",
    description:
      "Implemented an EWMA-based rate limiter for Nostream that supports both global and per-connection strategies. This allows for more flexible and adaptive rate limiting based on recent traffic patterns. The implementation includes Redis integration for storing rate limit state and a strategy pattern to easily switch between different rate limiting approaches. This is important for improving Nostream's ability to handle varying loads and protect against abuse while maintaining performance.",
    prUrl: "https://github.com/cameri/nostream/pull/476",
    prNumber: "#476",
    status: "merged",
    type: "feature",
    tags: ["nostr", "redis", "EWMA", "rate limiter"],
    date: "2026-04-16",
  },
  {
    repo: "cameri/nostream",
    repoUrl: "https://github.com/cameri/nostream",
    title: "doc: add Redis ACL configuration guide for production deployments",
    description:
      "Added docs/redis.md documenting the Redis commands used by Nostream and how to configure Redis ACL for production use. This is important for users deploying Nostream in production to ensure they can set up Redis securely and understand the required permissions.",
    prUrl: "https://github.com/cameri/nostream/pull/408",
    prNumber: "#408",
    status: "merged",
    type: "docs",
    tags: ["nostr", "redis", "ACL", "docs"],
    date: "2026-04-09",
  },
];
