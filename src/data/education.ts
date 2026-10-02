export type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  notes?: string[];
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
    notes: [
      "Dissertation: Numerical Methods for Guaranteed Minimum Withdrawal Benefits",
      "Australian Government Research Training Program Scholarship",
      "First Place, 1st-time presenter, SMP Poster Day 2019",
    ],
  },
  {
    degree: "Master of Science",
    field: "Mathematics",
    institution: "Beihang University, School of Mathematics and Systems Science",
    location: "Beijing, China",
    period: "Sep 2008 – Jan 2011",
    notes: [
      "First Class Scholarship (7 of 42 applicants), GPA: 3.4/4.0",
      "Second Prize, 2010 National Postgraduate Mathematical Contest in Modelling",
    ],
  },
  {
    degree: "Bachelor of Science",
    field: "Information and Scientific Computing",
    institution: "Beihang University, School of Mathematics and Systems Science",
    location: "Beijing, China",
    period: "Sep 2004 – Jul 2008",
    notes: [
      "Excellent Graduate Award (5 of 120 applicants), GPA: 3.5/4.0",
      "National Endeavour Scholarship (4 of 120 applicants)",
    ],
  },
];
