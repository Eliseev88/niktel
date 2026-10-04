export const FOUNDATION_YEAR = 2015;

// Calendar years since founding: matches the "11 years" figure the site used in 2026
export const getYearsOnMarket = () => new Date().getFullYear() - FOUNDATION_YEAR;
