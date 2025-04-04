export interface Project {
  image: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    image: "/images/bitcoin-blog-1.png",
    title: "Bitcoin Protocol Development - 1",
    link: "https://medium.com/@dubeysaniddhya/how-i-wrote-and-broadcasted-my-first-bitcoin-transaction-and-what-i-learned-81694af2ffff",
  },
  {
    image: "/images/JIRA.jpeg",
    title: "JIRA Project",
    link: "https://github.com/saniddhyaDubey/JIRA-hackathon",
  },
  {
    image: "/images/solana-lending-aggregator.jpeg",
    title: "Solana Crosschain lending aggregator",
    link: "https://beta.ultra.markets/",
  },
];
