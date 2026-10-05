export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Quantitative Developer",
    org: "Jacobi Strategies Pty Ltd",
    location: "Brisbane, Australia",
    period: "Dec 2022 – Present",
    bullets: [
      "Develop economic simulation models using stochastic and regime-switching frameworks to simulate asset returns, yields, and macroeconomic variables.",
      "Design and maintain a multi-asset portfolio platform focused on scenario simulation and portfolio optimisation.",
      "Collaborate with investment specialists to quantify real-world portfolio design problems and implement practical solutions.",
    ],
  },
  {
    role: "Adjunct Lecturer",
    org: "The University of Queensland, School of Mathematics and Physics",
    location: "Brisbane, Australia",
    period: "Sep 2026 – Present",
    bullets: [
      "Enhance academia–industry collaboration through knowledge exchange and the integration of industry insights into teaching and research.",
    ],
  },
  {
    role: "Quantitative Analyst – Capital Management",
    org: "China CITIC Bank, Department of Assets and Liabilities",
    location: "Beijing, China",
    period: "Apr 2013 – Jul 2017",
    bullets: [
      "Investigated capital rules and regulations under BASEL III and IFRS 9.",
      "Measured and reported capital adequacy ratio data to executive management monthly.",
      "Conducted risk-weighted asset (RWA) measurement across credit, market, and operational categories.",
      "Won Employee of the Year award in 2015.",
    ],
  },
  {
    role: "Management Trainee – Strategy Analysis",
    org: "China Merchant Bank, Department of Planning and Finance",
    location: "Shanghai, China",
    period: "Apr 2011 – Apr 2013",
    bullets: [
      "Rotated through sales, marketing, risk management, operations, and financial planning.",
      "Performed data analysis to optimise product innovation and marketing strategy.",
    ],
  },
];
