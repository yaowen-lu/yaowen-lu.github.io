export type Talk = {
  title: string;
  event: string;
  year: number;
  location: string;
};

export const talks: Talk[] = [
  {
    title: "Numerical Methods for Guaranteed Minimum Withdrawal Benefits",
    event: "67th Annual Meeting of the Australian Mathematical Society",
    year: 2023,
    location: "Brisbane, Australia",
  },
  {
    title: "Semi-Lagrangian Methods for GMWB under Jump-Diffusion",
    event:
      "Canadian Applied and Industrial Mathematics Society (CAIMS) Annual Meeting",
    year: 2021,
    location: "Online",
  },
  {
    title: "Fourier Methods for Variable Annuity Pricing",
    event: "Quantitative Methods in Finance Conference",
    year: 2019,
    location: "Sydney, Australia",
  },
  {
    title: "Impulse Control Approaches for GMWB Pricing",
    event: "20th INFORMS Applied Probability Society Conference",
    year: 2019,
    location: "Brisbane, Australia",
  },
];
