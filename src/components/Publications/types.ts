export interface Publication {
  title: string;
  journal: string;
  year: number;
  authors: string;
  impactFactor?: number;
  doi?: string;
}

export interface PublicationMetrics {
  totalPublications: number;
  totalCitations: number;
  hIndex: number;
  totalImpactFactor: number;
}