export type Project = {
  name: string;
  year: string;
  description: string;
  extended?: string;
  tech?: string[];
  links?: { label: string; url: string }[];
};
