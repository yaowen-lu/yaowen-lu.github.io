export type ResearchProject = {
  title: string;
  period: string;
  status: "current" | "past";
  description: string;
  methods: string[];
};

export const researchProjects: ResearchProject[] = [
  {
    title: "Economic Simulation for Multi-Asset Portfolios",
    period: "2022 – Present",
    status: "current",
    description:
      "Development of stochastic and regime-switching models for simulating joint paths of equity returns, interest rates, credit spreads, and macroeconomic variables. The generated scenarios are used for portfolio stress-testing, liability-driven investing, and optimisation under realistic market conditions.",
    methods: ["Regime-switching models", "Stochastic processes", "Monte Carlo simulation", "Portfolio optimisation"],
  },
  {
    title: "Portfolio Optimisation & Asset Allocation",
    period: "2022 – Present",
    status: "current",
    description:
      "Research and implementation of multi-asset portfolio construction methods, including mean-variance optimisation, risk-parity, and robust optimisation under uncertainty. Work spans strategic and tactical asset allocation, liability-driven investing, and portfolio rebalancing strategies for institutional investors.",
    methods: ["Mean-variance optimisation", "Risk-parity", "Robust optimisation", "Convex programming", "CVXPY"],
  },
  {
    title: "Machine Learning in Financial Mathematics",
    period: "2021 – Present",
    status: "current",
    description:
      "Application of deep neural networks to high-dimensional stochastic optimal control problems in finance. Current work focuses on deep Galerkin methods and physics-informed neural networks as scalable alternatives to traditional grid-based solvers for pricing complex derivatives.",
    methods: ["Deep neural networks", "Physics-informed ML", "Stochastic optimal control", "High-dimensional PDEs"],
  },
  {
    title: "Guaranteed Minimum Withdrawal Benefits (GMWB)",
    period: "2017 – 2022",
    status: "past",
    description:
        "Doctoral research on the pricing and risk management of variable annuity contracts with guaranteed withdrawal features. Developed provably convergent numerical schemes — including ε-monotone Fourier methods and semi-Lagrangian discretisations — for the associated Hamilton–Jacobi–Bellman equations under jump-diffusion, stochastic interest rates, and stochastic volatility.",
    methods: ["ε-monotone Fourier methods", "Semi-Lagrangian schemes", "Impulse control", "HJB equations", "Jump-diffusion"],
  },
  {
    title: "Multi-Domain Numerical Methods for Conservation Laws",
    period: "2008 – 2011",
    status: "past",
    description:
      "Master's research on hybrid high-order numerical schemes for hyperbolic systems. Designed a multi-domain coupling strategy that combines RKDG and WENO methods, preserving accuracy at domain interfaces and handling complex geometries with irregular boundaries.",
    methods: ["RKDG methods", "WENO schemes", "Hyperbolic PDEs", "Multi-domain coupling"],
  },
];
