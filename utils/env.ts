const s = 1000;
const m = s * 60;
export const STORYBOOK = process.env.STORYBOOK;
export const API_DOMAIN = process.env.API_DOMAIN;
export const isStorybook = STORYBOOK !== "false";
export const SSG = process.env.SSG;
export const BUILD_TIME = Number(process.env.BUILD_TIME);
