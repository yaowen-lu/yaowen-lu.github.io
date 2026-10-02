export type TeachingItem = {
  role: string;
  institution: string;
  period: string;
  courses: { title: string; description: string }[];
};

export const teaching: TeachingItem[] = [
  {
    role: "Adjunct Lecturer",
    institution: "The University of Queensland, School of Mathematics and Physics",
    period: "Sep 2026 – Present",
    courses: [
      {
        title: "Industry Guest Lectures",
        description:
          "Integration of industry insights from quantitative finance into academic teaching and research.",
      },
    ],
  },
  {
    role: "Casual Tutor",
    institution: "The University of Queensland, School of Mathematics and Physics",
    period: "Feb 2020 – Nov 2022",
    courses: [
      {
        title: "Computation in Financial Mathematics",
        description:
          "Numerical methods for solving financial differential equations.",
      },
      {
        title: "Financial Calculus",
        description: "Derivative pricing and stochastic calculus.",
      },
    ],
  },
];
