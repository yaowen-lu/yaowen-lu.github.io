export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: "journal" | "preprint";
  doi?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title:
      "An ε-monotone Fourier method for GMWB as a continuous impulse control problem",
    authors: "Yaowen Lu, Duy-Minh Dang, Peter Forsyth, George Labahn",
    venue: "Preprint",
    year: 2023,
    status: "preprint",
  },
  {
    title:
      "A semi-Lagrangian ε-monotone Fourier method for continuous withdrawal GMWBs under jump-diffusion with stochastic interest rate",
    authors: "Yaowen Lu, Duy-Minh Dang",
    venue: "Numerical Methods for Partial Differential Equations",
    year: 2023,
    status: "journal",
    doi: "10.1002/num.23075",
    url: "https://doi.org/10.1002/num.23075",
  },
  {
    title:
      "A pointwise convergent numerical integration method for Guaranteed Lifelong Withdrawal Benefits under stochastic volatility",
    authors: "Yaowen Lu",
    venue: "Preprint",
    year: 2023,
    status: "preprint",
  },
  {
    title:
      "Multi-Domain Hybrid RKDG and WENO methods for Hyperbolic Conservation Laws",
    authors: "Jian Cheng, Yaowen Lu, Tiegang Liu",
    venue: "SIAM Journal on Scientific Computing, Vol. 35, No. 2, pp. A1049–A1072",
    year: 2013,
    status: "journal",
    url: "https://doi.org/10.1137/110850637",
  },
];
