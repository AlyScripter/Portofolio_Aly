export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  tags: string[];
  overview: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  gallery: string[];
  link?: string;
}

export interface Activity {
  title: string;
  image: string;
  description: string;
}

export interface OrganisasiRole {
  title: string;
  period: string;
  bullets: string[];
}
