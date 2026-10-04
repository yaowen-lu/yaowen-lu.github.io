export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: "journal" | "preprint";
  featured?: boolean;
  abstract?: string;
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
    abstract:
      "We formulate the guaranteed minimum withdrawal benefit (GMWB) pricing problem as a continuous impulse control problem and develop an ε-monotone Fourier method that provably converges to the viscosity solution. The method handles jump-diffusion dynamics and avoids the grid-locking issues common to finite-difference schemes.",
    url: "/epsilon_GMWB.pdf",
  },
  {
    title:
      "A semi-Lagrangian ε-monotone Fourier method for continuous withdrawal GMWBs under jump-diffusion with stochastic interest rate",
    authors: "Yaowen Lu, Duy-Minh Dang",
    venue: "Numerical Methods for Partial Differential Equations",
    year: 2023,
    status: "journal",
    featured: true,
    abstract:
      "This paper develops a provably convergent numerical method for pricing variable annuity contracts with guaranteed minimum withdrawal benefits (GMWBs) under a jump-diffusion model combined with a stochastic interest rate. We combine a semi-Lagrangian time-stepping scheme with an ε-monotone Fourier discretisation, establishing pointwise convergence to the viscosity solution of the associated Hamilton–Jacobi–Bellman equation.",
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
    abstract:
      "We extend the GMWB pricing framework to guaranteed lifelong withdrawal benefits (GLWBs) with stochastic volatility. A novel numerical integration method is constructed that achieves pointwise convergence under the Heston stochastic volatility model, incorporating the mortality risk inherent in lifetime income products.",
    url: "/epsilon_GLWB_Heston.pdf",
  },
  {
    title:
      "Multi-Domain Hybrid RKDG and WENO methods for Hyperbolic Conservation Laws",
    authors: "Jian Cheng, Yaowen Lu, Tiegang Liu",
    venue:
      "SIAM Journal on Scientific Computing, Vol. 35, No. 2, pp. A1049–A1072",
    year: 2013,
    status: "journal",
    abstract:
      "We present a hybrid numerical framework that combines Runge–Kutta discontinuous Galerkin (RKDG) and weighted essentially non-oscillatory (WENO) methods across multiple spatial domains. The coupling strategy preserves high-order accuracy and the essentially non-oscillatory property near discontinuities, with applications to practical problems with irregular boundary conditions.",
    url: "https://epubs.siam.org/doi/abs/10.1137/110855156?journalCode=sjoce3",
  },
];
