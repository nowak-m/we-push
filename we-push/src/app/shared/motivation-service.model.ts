export interface SummaryData {
  user: string;
  repo: string;
  commits: number;
}

export interface MotivationService {
  getIntro(): string;
  getOutro(): string;
  getSummary(summaryData: SummaryData): string[];
}
