import PicoSanity from "picosanity";

export const projectId = "h07iekik"
export const dataset = "production"
const apiVersion = "2021-12-10"

export const content = new PicoSanity({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
