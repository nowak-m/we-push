export interface MotivationService {
  getIntro(): string;
  getOutro(): string;
  getSummary(user: string, repo: string, commits: number): string[];
}
