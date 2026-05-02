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
    "date": "2026-05-01",
    "title": "3/4 on virtual contest + nostream bugs found",
    "body": "Did virtual contest for the last week biweekly's contest, got 3/4 (yeah yeah I had to took some help with a specific function at the end, so what, this is how we learn.). Also, found few critical bugs in nostream worth fixing, might share about the details while I work on it.",
    "tags": ["leetcode", "Nostr", "bugs"],
  },
  {
    "date": "2026-04-30",
    "title": "CF div-3 contest + back to LC DP grind",
    "body": "CF div-3 contest (2 solved, stucked on 3rd one but did an upsolving session right after). Back to LC streak with DP questions.",
    "tags": ["Codeforces", "leetcode", "DP"],
  },
  {
    "date": "2026-04-29",
    "title": "NP-complete proofs + NUMB3RS binge + Minesweeper",
    "body": "DSA class on NP-complete and how to prove an algo is NP-complete, these mathematical proofs are crazy NGL. Entire day, binged watch NUMB3RS and played minesweeper.",
    "tags": ["NP-complete", "DSA", "NUMB3RS", "minesweeper"],
  },
  {
    "date": "2026-04-28",
    "title": "DP revision + NP-Complete rabbit hole",
    "body": "A thorough revision on DP, more time spent knowing about NP and NP-complete. Loving how they have been so crucial pillars in Theoretical Computer Science. My fav game, Minesweeper, is actually a NP-Complete problem proved in year 2000.",
    "tags": ["DP", "NP-complete", "DSA"],
  },
  {
    "date": "2026-04-27",
    "title": "ALGORITHM IS MY LOVE",
    "body": "I wish, FR I'M TRYING MY BEST, but I will get sooner so good at algorithms. I NOW UNDERSTAND WHY MATHEMATICIANS ARE SO COOL. Got obsessed with this series, NUMB3RS, they basically use algorithms and maths and stats to solve real life tragedies, things like game theory, number theory, graph algo, geographical profiling and so many more. I'M GONNA LEARN THEM ALL, MAYBE ???? TUNE in :D",
    "tags": ["algorithms", "NUMB3RS", "maths"],
  },
  {
    "date": "2026-04-26",
    "title": "Last Week of MS :))))",
    "body": "GRADUATION IN LESS THAN 20 DAYS. WOAAAHHHHHHH. A chill sunday, recovery and next few days will be catch up with school & TA stuff and DSA too.",
    "tags": ["personal", "graduation"],
  },
  {
    "date": "2026-04-25",
    "title": "SoB submitted, LC contest, chasing 1600 knight badge",
    "body": "Youtube video recorded, draft checked thoroughly for the 100th time, both organization locked in. Hoping for best. Also, gave the LC contest, now the chase to 1600 is real. I want that knight badge no matter what. This time so many silly mistakes that threw me off, I would have bagged my 3rd question. Not enough time to write about my chain of thoughts, will start that too soon.",
    "tags": ["SoB", "Nostr", "leetcode"],
  },
  {
    "date": "2026-04-24",
    "title": "24 hours to submission, GIVING MY ALL 🚀",
    "body": "24 hours to go for submission, did everything I can and still not leaving any room for errors. Tackled this as a LC design question, problem statement, assumptions, constraints, key observations, important components (data structures, algorithms to be used, etc), visuals to back them, tradeoff matrix to consider when talking about scaling, efficiency and interoperability. I AM GONNA GET THIS, GIVING MY ALL 🚀",
    "tags": ["SoB", "Nostr", "system design"],
  },
  {
    "date": "2026-04-23",
    "title": "2 days to go, fixing gaps, LFG 🚀",
    "body": "2 days to go, making my research strong and fixing gaps that might throw me off the edge. No assumptions, noting down all my observations which I might attach at the end for mentor review. Nothing much to write about. LFG 🚀",
    "tags": ["SoB", "Nostr", "research"],
  },
  {
    "date": "2026-04-22",
    "title": "Graph BFS, DAG for project planning, might go PM atp lol",
    "body": "Knocked out my competency test for nostream, building a graph out of connections with 2 hop from seed pubkey using BFS search. On top of that, I implemented a graph visualization. Learned a real use case of DAG, in project planning. Did that to built my project proposal timeline. PERT chart, gantt chart, never thought this were so damn useful. I might go for project management roles atp lol.",
    "tags": ["Nostr", "graphs", "BFS", "DAG", "PERT", "project planning"],
  },
  {
    "date": "2026-04-21",
    "title": "TA work + deep dive into protocols and rate limiting",
    "body": "Some TA work and personal stuff. Mostly learning about stuffs like dynamic rate limiting, graph usecases and its implementation in real work for social networking, some Nostr specific protocols like NIP-02, NIP-66. Lots of learning.",
    "tags": ["Nostr", "NIP-02", "NIP-66", "rate limiting", "graphs"],
  },
  {
    "date": "2026-04-20",
    "title": "System design the cool way + k6 setup in nostream",
    "body": "Last 5 days for proposal submission, research is fun. Also, I didn't realize until now, but someway or the other, I'm actually learning system design the cool way. Learning about HLD and LLD by working on a design system problem which has to actually be robust. Lots of factor comes into play and how you gradually tackle those scenarios by justifying your decisions. \"it's very easy to question a choice but hard to interpret that without the designer. But, if you can interpret that without the designer, that the developer did their work pretty good, isn't it?\". Also, completed the first setup of k6 in nostream with complying modular design. Not counted but I got a lot of PR merged now. I'm happy.",
    "tags": ["SoB", "Nostr", "system design", "k6", "HLD", "LLD"],
  },
  {
    "date": "2026-04-19",
    "title": "Git lessons the hard way + k6 is COOL STUFF",
    "body": "Today it was all about how Github can f**k my day. Realized why git is soooo essential (lesson learned the hard way SMH). Also, learned so much about k6, this is such a god level tool to test your server performance via so many different tests i.e. spike, stress, load, etc, and also simulate how your server reacts to dynamic traffic in real-time. THIS IS COOOL STUFF.",
    "tags": ["Git", "k6", "testing"],
  },
  {
    "date": "2026-04-18",
    "title": "SoB research, LC contest, okayish day",
    "body": "Did a bit of SoB'26 research for nostream for my proposal, gave my leetcode contest, got 2/4. Wondering when I'll reach my 3rd question feat UGHHHH. Nothing to add more, okayish day. SoB is coming close, and IDK how to write the perfect proposal.",
    "tags": ["SoB", "Nostr", "leetcode"],
  },
  {
    date: "2026-04-17",
    title: "More DP, learned database strategies, more SoB!!!",
    body: "Learned different types indexes in database and their usecases i.e. normal (BTree), partial, composite, GIN (this was nice). I might implement some in C++ to practice more. Covering more nostream and learning design principles to structure my approach of thinking",
    tags: ["DP", "DSA", "leetcode", "SoB", "Nostr"],
    more: [
      {
        title: "LC 2900 - Longest Unequal Adjacent Groups Subsequence I",
        body: "A good question to see greedy in action. Key was, you always start with the first word, can't escape that. and just add the next different from current to the answer. o(n), single pass solution.",
        tags: ["DP", "Strings", "Greedy"],
      },
      {
        title: "LC 1137 - N-th Tribonacci Number",
        body: "Straight forward question. Base case and recurrsion already given in the question. This was an implementation question.",
        tags: ["DP", "Array"],
      },
      {
        title: "LC 1668 - Maximum Repeating Substring",
        body: "This question was good. I haven't solved the DP yet. I did sliding window kinda solution. I feel can still improve, and understand how DP actually works in this to get more insights and observation. Will upsolve this tomorrow. But, AFAIK, my solution is o(n*m), not sure. IDK why but a lil confused in this.",
        tags: ["DP", "Strings"],
      }
    ],
  },
  {
    date: "2026-04-16",
    title: "Crossed 1500 on LC - LFG!!!",
    body: "I have been scared of giving contest from so long due to the big gap. Finally, gave the courgae required and did 2/4 last week. New rating 1530. Have to cross 1600 (PR) by end of this month.",
    tags: ["DP", "DSA", "leetcode"],
    more: [
      {
        title: "LC 746 - Minimum Cost Climbing Stairs",
        body: "Stickting to my mental model of going from recrusion -> recurrence relation -> bottom-up approach. Solved for small N values and got the pattern. Similar question as WIS, binary choice at each step. Was stuck for few mins on 2D DP solution. Got the key, I was solving till (N-1)th stair. Boiled the final solution into 1D DP. Enjoying DP!",
        tags: ["DP", "Array"],
      },
      {
        title: "LC 119 - Pascal's Triangle II",
        body: "Straight forward recursion, T(N)[i]. = T(N-1)[i-1]+T(N-1)[i], and you do this for all value of i. At each level, starting from 0, number of elements is (level+1).",
        tags: ["DP", "Array"],
      }
    ],
  },
  {
    date: "2026-04-15",
    title: "More DP, 2 DP LC!",
    body: "Completed my understanding of WIS, started with MCM (Matrix Chain Multiplication). I feel, doing more DP helps building intuition in a much better way.",
    tags: ["DP", "DSA", "leetcode"],
    more: [
      {
        title: "LC 338 - Counting Bits",
        body: "Started with dividing the problem and trying to think about the subproblem. I know I'm practicing DP, so not going from brute-force to all the way up in practice for now. The recurrence relation was something like, T(N) = T(N/2) for all N i.e. even, or T(N) = T(N/2) + 1 for all N i.e. odd. This shows pattern in set bits. In simple terms, if N is even, N/2=Y, the difference between set bits of N and Y is 0. and, if N is odd, the difference is 1. This observation is so strong, you can literally solve so many questions out of it. Cool trick learned today. TC - o(n), single pass from 0 to N. SC - o(n), DP 1D table.",
        tags: ["DP", "Bit Manipulation"],
      },
      {
        title: "LC 1025 - Divisor Game",
        body: "This question made me realize one thing: DP is not always about you solve question using memoization or tabulation. Sometimes, thinking in a DP way might help you understand the pattern and learn some new observation. For, smaller values of N, solving from ground up - every subproblem - found the pattern. 1 simple check, if N odd, Alice will always lose, else she'll win easily. The optimal move is at each turn they will try to make the number odd for the next person. And, the key was, Alice always play first. Yeah, that's it!!",
        tags: ["DP", "Math", "game-theory"],
      }
    ],
  },
  {
    date: "2026-04-14",
    title: "Deep dive in a large codebase",
    body: "As i'm learning system design practically, diving into a huge codebase and dissect is really cool, if you know what you're doing. Nostream's TS code structure is amazing, trying to understand more to contribute in a much better way.",
    tags: ["OSS", "TS"],
  },
  {
    date: "2026-04-13",
    title: "DP hands on, 1 LC, more SoB!",
    body: "Today's deep dive on DP with basics and what makes a problem a DP question, its different methods. Started with Weighted Interval Scheduling (WIS). Learned about how a question, starting from a basic recursive approach, is boiled down to a iterative approach. The steps are beautiful.",
    tags: ["DP", "Algorithms"],
  },
  {
    date: "2026-04-12",
    title: "Not Sundaying enough!",
    body: "Watched a movie, and did some grading stuff, completing chores to keep weekday free.",
    tags: ["weekend", "daily-routine"],
  },
  {
    date: "2026-04-11",
    title: "Casual weekend, figuring out next steps, LC Contest after so long.",
    body: "Not a very energetic day, Mock#3 - brutual, got cooked. LC Contest, 2/4, third question was nasty. keeping it low. one day at a time.",
    tags: ["leetcode-contest", "weekend", "daily-routine"],
  },
  {
    date: "2026-04-10",
    title: "More Redis work, 1 LC after 2 days, deployed two projects on render !",
    body: "Implemented Exponentially Weighted Moving Average (EWMA) algorithm for redis and migrated the singleton pattern to a strategy pattern to use either EWMA or sliding window algorithm on custom services. Well, sliding window is good, but it consumes a lot of space in memory when the number of clients are wayy more. Tested and it's working fine, now will implement unit and integration test. My eyes are set for a really good issue to cover almost 90% of the codebase. Will talk about it soon, a lot of things to learn for that. Solved 1 LC, and deployed two projects (btc realted) on render. 30 days to go for graduation!!!",
    tags: ["SoB'26", "leetcode", "DSA", "redis"],
    more: [
      {
        title: "LC 113 - Path Sum II",
        body: "This was to be done more easily via backtracking but I feel I'm more comfortable with DFS now, intuition and syntax wise. Same logic, but just keep a list of all the nodes visited during a path from root-leaf. If sum reaches target, add the path to the answer. Return answer at the end. Time complexity remains - o(n) and space complexity is worst case o(n) if asked. but since the binary tree can be of any form, there's no fixed.",
        tags: ["Trees", "DFS", "Backtracking", "medium"],
      },
    ],
  },
  {
    date: "2026-04-09",
    title: "My first PR merged with nostream and working on second one. Also, PR of btc-fuzz is now officially under review.",
    body: "So, my first PR is directly merged to production. I took this one, to cover a good amount of codebase. Creating a doc to help users who implement nostream as relay to allow multiple ACL on redis. I learned all about redis implementation in nostream, what commands are used, a custom configuration setup, what problems you can face and a troubleshooting guide. Ran and verified. Feels good",
    tags: ["SoB'26", "nostream", "redis"],
  },
  {
    date: "2026-04-08",
    title: "Loving OSS and apart from btc-fuzz, NOSTREAM - WHAT A PROJECT",
    body: "So, gave a codeforces virtual contest to practice on real life problem statements. CF makes easy questions hard. Solved A-C for a div 4 contest, CF needs a lot of practice fr man. Also, started with this new repo -- nostream, it is a nostr relay implementation for everything. NOSTR is basically a protocol to do anything decentralized i.e. chatting, playing games, more and more apps are coming. The core component is relay (servers), which implements those protocol and everything is event based. TRUST ME VERY COOL.",
    tags: ["daily routine", "codeforces", "CP", "SoB'26"],
  },
  {
    date: "2026-04-07",
    title: "A Hard Question tackled, started with some basics of bit manipulatio too -- learning more about btc-fuzz!!",
    body: "Normal day with learning about sparse table, binary lifting, and how it helps solving some interesting questions. Also, learned about basics of bit manipulation to solve question more easily. Nothing much to add, SoB keeps going side by side!",
    tags: ["leetcode", "DSA", "SoB'26"],
    more: [
      {
        title: "LC 1483 - Kth Ancestor of a Tree Node",
        body: "I gave the mock to this question, but that was wayyy different. This question provides us a list of size n where ith element is the parent of node i. Even if I implement the same solution using DFS call, it will throw TLE. So, I implemented a matrix solution, which was basically the same thing I did but I just computated it before hand. The gold was binary lifting. The key insight was computing Kth parent as a sumation of power of 2s. So, for any Node X, the highest parent is log(n), the height of tree. We pre-compute this for each node using previous parent as the jumping point. For example, if Y is the 1st parent of node X, and Z is the 1st parent of node Y, then Z is the 2nd parent of node X. Using this intuition, we calculate all the nodes and return the answer. This was crazyyyy. DP is soooo cool, apart from development, I'll spend my next few days learning more about this and try build intuition around this. Also, linked a cool article to read more!!!",
        tags: ["Trees", "Dynamic Programming", "hard"],
        link: "https://cp-algorithms.com/data_structures/sparse-table.html"
      },
    ],
  },
  {
    date: "2026-04-06",
    title: "Cleared 2 LC backlog; SoB'26-new org dive plan; Greedy algorithms; Cold Outreach for JOBSSSS!",
    body: "ASmap, a new org I found today. Their problem is so sick. I realize, people are working on such amazing things and I just can't stop learning about it. Will talk about it more in upcoming days. Revised and also learned some new things about greedy algorithms, Prim's and Kruskal's, used in deriving Minimum-Cost Spanning Trees.",
    tags: ["daily routine", "leetcode", "DSA", "SoB'26"],
    more: [
      {
        title: "LC 93 - Restore IP Addresses",
        body: "My solution was not bad but was very redundant. Lot of bad code written. And, the final code was much simpler, using backtracking. Base case: 4 segments and the final index is at the last index of string s. keep a track of the current string, and keep checking the number in the valid range. This was so straight forward. I should have thought about this in my first attempt. SMH!!!",
        tags: ["strings", "Backtracking", "medium"],
      },
      {
        title: "LC 50 - Pow(x,n)",
        body: "Last time solved this using recursion with a space complexity of o(log n) as the recursion stack. We can remove that by using bit manipulation. The insight is, binary bits of n tell which power of x to multiply -- simply iterate bits, square x at each step. That's it.",
        tags: ["Maths", "Bit Manipulation", "medium"],
      }
    ],
  },
  {
    date: "2026-04-05",
    title: "System Design HLD#1, SoB'26 more learning -- DOING OKAYY",
    body: "Started with sunday series HLD discussion with one of my friend. We talked about basic client-server setup and scaling it to serve 1M DAU. Things like cache, load balancer, database and types of it, replication and sharding, CDN. Apart from this, worked on documenting my learnings for SoB'26. Learned howa new module registration takes place and documenting that for my proposal.",
    tags: ["daily routine", "SoB'26", "System Design"],
  },
  {
    date: "2026-04-04",
    title: "MY FIRST PR TO OSS; BASIC DP QUESTION CRACKED BY MYSELF; A GOOD DAY I NEEDED SO BADLY ;)",
    body: "Added a new module, python-hdwallet, in the bitcoin-fuzz repo for the bip32_master_keygen fuzz. This is simply checking the extended_key generation method and does all the implementation (9 modules including the one I added) achieving a consensus on the output. If yes then good, or else a bug to solve ;). Opened a PR, I wish it gets merge sooooooon. Will keep posted here FS.",
    tags: ["daily routine", "leetcode", "DSA", "SoB'26"],
    more: [
      {
        title: "LC 96 - Unique Binary Search Trees",
        body: "Well I literally took 40 mins to understand the intuition. I got the correct chain of thoughts, but ig I messed the end to connect the dots, so had to took the help of claude to get the final equation. The question was straight forward. Understood the brute force but still need to verify if that's the actual one. For N nodes, max BST I can have is n!, I get that. But the question ask for unique structure. So, for n=3, the sequence 231 and 213 returns the same tree structure. Then, I kept thinking, trying to draw out with pencil to understand more. I get to the point, that for any value N, the number is actually related from 1 to N. For, 1 we have 1 node -> 1 tree. 2 node, we add 1 node once to the left of tree#1 and once to the right of tree#1. So, total 2 trees. For N=3, we add 1 node once to the left of tree#2#1 and once to the right of tree#2#1. Same for tree#2#2. So, total 4 trees till now and finally adding 2 nodes to tree#1. Final value-5 in total. This is a basic DP question. But, I was just able to get till here. Got to learn about \"Catalan Numbers\", and learned about the recurrence relations of it. T(N)=Sum of T(i-1)*(n-i) and T(0)=1. The logic is, everything less than i goes to the left subtree → (i - 1) nodes AND everything greater than i goes to the right subtree → (n - i) nodes.",
        tags: ["trees", "DP", "Maths", "medium"],
      }
    ],
  },
  {
    date: "2026-04-03",
    title: "Got disappointed ~ quiet day but some leetcode and a bit Bitcoin-Fuzz!!!!",
    body: "The task I took shook me by surprise when I was working on it today. The competition on this is the highest among all the orgs, and I like this one only. Why god why? literally, every other org feels so aloof, IDK what to even contribute. They are so niche I feel. But still, went through the day and learned a lot about myself.",
    tags: ["daily routine", "leetcode", "DSA", "SoB'26"],
    more: [
      {
        title: "LC 655 - Print Binary Tree",
        body: "My friend gave the mock on this one too. Was trying to code and checking if I can solve this in under 5 mins. Actually, I did just some typos I did while coding. Bruuuuuuuuuuh, SMH. But, yeah the question was very straight forward. Some normal calculation and pass on along the dfs call for each child. That's it. Already intialized the matrix with empty string to avoid keeping track of null values. Simple question - IDK why LC gave a medium tag. TC-o(n), SC-o(n)~Recursion stack + o(n*n) 2D-matrix.",
        tags: ["tree", "dfs", "medium"],
      },
      {
        title: "LC 129 - Sum Root to Leaf Numbers",
        body: "Trying to work more on trees and this question was from the leetgoat sheet I am speedwalking (LOL). Understood the question, simple DFS call till leaf node and keep pushing the numbers formed in a list. After completing the dfs call, return the sum of list. One new thing I understood, till now I was doing calculation of leaf nodes at the first line [if(!node) return -1] -> with this being my base case. But, we can also work on leaf node calculation after the child values. Overall the same thing, but just a different perspective I found to keep things straight in my head. TC-o(n); SC-[o(n)~recursion stack, o(h*k)~h is the height of the tree and k is the number of leaf nodes]. IDK why i used a list. I could have avoided that by just maintaing a global variable and keep adding the numbers at leaf node. Will update the code ASAP.",
        tags: ["tree", "dfs", "medium"],
      }
    ],
  },
  {
    date: "2026-04-02",
    title: "Leetcode, more Bitcoin-Fuzz, mock series #2 AND not getting a job (:",
    body: "It won't be wrong to say that I'm in love with bitcoin-fuzz for now. This is new but I just can't stop myself thinking about it. Well, I am aiming to open my first PR in oss. C'mon cheer me up! Learning more about differential fuzzing and how to write good test cases. Not unit test, but even for generating using a fuzzer, you have to set boundaries. The goal is to write or generate those which covers the max code (max coverage). Good to know that, but yeah i still lack that skill -- working on it.",
    tags: ["daily routine", "leetcode", "DSA", "SoB'26"],
    more: [
      {
        title: "Kth Ancestor of a Node",
        body: "Gave a 45 mins mock on this question. Starting with expanding the question and getting as many inputs from the interviewer as possible, reframed the question in my own words to confirm my understanding and fill any gaps here only to avoid mistakes at later stages. Then, did a quick dry run on a sample input of my own. Based on that started with my brute force approach - maintaining a list of ancestor for each node until find the given node. When we find the given node -> return n-k value from the list. Pretty simple approach. TC-o(n); SC-[o(n)~Recursion stack + o(n)~list of ancestors]. Interviewer asked to optimize the storage. Told him about maintaining a list of size K and return the first value as soon as find the given node. But, still not a good solution. Now, went for the better approach. Analogy is just how we calculate height of the tree in a dfs call ~ will keeping traversing using DFS to find the node. As soon as we find one, keep returning to the parent for K times using a counter. As we hit the counter==k, return the ancestor. TC-o(n);SC-o(n) only the recursion stack. Coded but wrote a very bad code (a lot of redundancy not a production level ~ SMH, a lot to improve). Also, messed up in 1 follow up question. Overall okayish, will see any further improvements in #3.",
        tags: ["tree", "dfs", "medium"],
      },
      {
        title: "LC 1026 - Maximum difference between node and ancestor",
        body: "Took a mock of my friend on this question, and he literally aced it. Pretty simple question. I just solved to see if i still remember LOL. But yeah, the simple idea was to pass max, min from each parent to its child and keep on updating at every node. On every leaf node, calculate the max difference and keep in a global variable. At the end, it is guaranteed to get the optimal answer - cause the min, max value gets updated through each root-node path and the value calculation is done at every leaf node. TC - o(n), SC - o(n) recursion stack only.",
        tags: ["tree", "dfs", "medium"],
      }
    ],
  },
  {
    date: "2026-04-01",
    title: "Continuing SoB'26 -- the struggle is real",
    body: "Well finally loved this one github repo I learned about a lot (5 hours straight with my buddies -- bitcoin stack exchange, claude). Bitcoin-Fuzz, an oss which do differential fuzzing on different bitcoin modules and implementation. Sooooooo cool, right ??? Well, it took me a lot of water and some markers and a white board to understand everything about it. So basically, when we write a function and we need to test it, we write unit test out of our mind. We can barely think of 10 different test cases which actually test the code. This is where fuzzing comes in, we start with a corpus (an input) and there's a mutator -- mutates the corpus and creates new input out of it. For example, flipping bits, adding random byte, making it all zeros, etc. And it does over a million times and test our code. Still coooooool, for me atleast. This was all new. This fuzzing happens for different things -- Property Based Testing (PBT), unit test with these inputs, etc. PBT is basically you test a property for a specific functions. For example -- your functions guarantees that for any input the output is of fixed size. So, we test with null values, close to 0, close to half, close to the output size, and so on. It will make sense once you try it out. Trust me it is super cool!!!!",
    tags: ["SoB'26", "oss"],
  },
  {
    date: "2026-03-31",
    title: "Summer of Bitcoin'26 : Proposal round begins",
    body: "Started with knowing about the different bitcoin organizations and what work they are doing. This was one of the toughest thing I did. Working in bitcoin development, those github repos were literally a dark forest for me on day-1. Selecting one to start with, I literally had to take a day to understand how things work in open source software development.",
    tags: ["SoB'26", "oss"]
  },
  {
    date: "2026-03-30",
    title: "New week, same old LC hustle and learning more DSA",
    body: "I solved this question earlier but I'm realizing more and more that I never fully spend time on thinking more. Chain of thought is what make someone way more a damn good problem solver than an avg LC hustler. Today's DSA class was fun, revised Dijkstra's algo.",
    tags: ["daily routine", "leetcode", "DSA"],
    more: [
      {
        title: "LC 50 - Pow(x,n)",
        body: "I will share the final learnings of this question. So, the chain of thought should look something like: multiplication is the basic operation -> n is very larger -> o(n) is slow -> can optimize basic operation by x^(n/2) * x^(n/2) = x^n -> time complexity is o(log n) -> negative n ~ 1/(x^n) -> even n ~ log(n) ops -> odd n ~ log(n-1) + 1 ops -> Recursive solution -> o(log n) space complexity. Did implemented till here, but still final step is remaining. I can't believe I am spending more time on these things, more than ever and i hope it pays off. Will get back to this question and complete the remaining iterative approach tomorrow itself.",
        tags: ["math", "recursion", "medium"],
      }
    ],
  },
  {
    date: "2026-03-29",
    title: "Sunday -- completed school stuff & cleared the Diagonal Traverse question.",
    body: "I love weekends mainly because I spent the entire day in library all by myself, completing the pending works and clearing the slate for the next week.",
    tags: ["daily routine", "leetcode"],
    more: [
      {
        title: "LC 498 - Diagonal Traverse [againnnnnn!]",
        body: "last time i did the question cell by cell and the code quality was very bad. a lot of conditions to handle and a lot of things to manage. my logic got wayyyy more complicated. so, another approach was how about directly going diagonally. so, one thing i didn't put much thought to, all the diagonal directions are same (top-right to bottom-left), and each MxN matrix has total (M+N-1) diagonals in total. well guess what, we can actually generalize all the formulas for row, col based on diagonal number, M and N. Finally the question just boiled down to 2 nested loop and traverse the diagonal one by one and add to a vector. DAMN THIS WAS GOOD!!!!!",
        tags: ["diagonal traverse", "matrix", "medium"],
      }
    ],
  },
  {
    date: "2026-03-28",
    title: "Started my LC mock series, System design weekends again.",
    body: "I am now fully practiciing DSA end-to-end, like a FAANG level interview. First mock on trees question, and I did bad. Lots of things to improve, mainly thinking more about the questions to ask to get more clarification from the interviewer. First goal to achieve in next 5 mocks. Atleast get comfortable with this.",
    tags: ["DSA", "System Design"],
    more: [
      {
        title: "Understanding how to approach LLD questions optimally",
        body: "Started with coding 2 basic LLD questions -- TicTacToe, Sudoku. Now, started with Designing an elevator system. 90 mins straight deep discussion with my friend to understand the chain of thoughts for LLD, what things to cover, how to unfold the problem into a well-defined constraint based question to tackle under 60 mins.",
        tags: ["LLD", "system design", "easy-medium"],
      }
    ],
  },
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
    body: "One of the best weekend I spent at outer banks. Back at leetcode, solved two simple questions and spent time understanding Depth-First Search in detail with examples dry run. I'm in love with algorithms.",
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
];
