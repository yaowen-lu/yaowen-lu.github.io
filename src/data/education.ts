export type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  notes?: string[];
  thesis?: { title: string; url: string };
};

export const education: EducationItem[] = [
  {
    degree: "Master of Science",
    field: "Financial Engineering",
    institution: "WorldQuant University",
    location: "Online",
    period: "Jun 2025 – Present",
    notes: [
      "Relevant courses: Financial Data, Financial Markets, Financial Econometrics, Machine Learning in Finance",
    ],
  },
  {
    degree: "Doctor of Philosophy",
    field: "Computational Finance",
    institution: "The University of Queensland, School of Mathematics and Physics",
    location: "Brisbane, Australia",
    period: "Aug 2017 – Nov 2022",
    thesis: {
      title: "Numerical Methods for Guaranteed Minimum Withdrawal Benefits",
      url: "https://espace.library.uq.edu.au/view/UQ:b549c4b/s4476234_phd_thesis.pdf",
    },
    notes: ["Australian Government Research Training Program Scholarship"],
  },
  {
    degree: "Master of Science",
    field: "Mathematics",
    institution: "Beihang University, School of Mathematics and Systems Science",
    location: "Beijing, China",
    period: "Sep 2008 – Jan 2011",
  },
  {
    degree: "Bachelor of Science",
    field: "Information and Scientific Computing",
    institution: "Beihang University, School of Mathematics and Systems Science",
    location: "Beijing, China",
    period: "Sep 2004 – Jul 2008",
  },
];
