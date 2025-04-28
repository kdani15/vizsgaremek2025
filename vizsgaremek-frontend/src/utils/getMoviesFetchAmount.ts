import { BREAKPOINTS } from "../config/breakpoints";

export const getMoviesFetchAmount = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= BREAKPOINTS["2xl"]) return 12;
  if (windowWidth >= BREAKPOINTS.xl) return 12;
  if (windowWidth >= BREAKPOINTS.lg) return 10;
  if (windowWidth >= BREAKPOINTS.md) return 8;
  return 6; // Mobile
};
