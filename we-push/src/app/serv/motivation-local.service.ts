import { Injectable } from '@angular/core';

const oneOf = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const generateSummary = (
  template: number,
  user: string,
  repo: string,
  commits: number
): string[] => {
  const spannedUser = `<span>${user}</span>`;
  const spannedRepo = `<span>${repo}</span>`;
  const spannedCommits = `<span>${commits}</span>`;
  switch (template) {
    case 1:
      return [
        `${spannedRepo} repository`,
        `has ${spannedCommits} new commits`,
        `thanks to ${spannedUser}`
      ];
    default:
      return [
        `${spannedUser} has just pushed`,
        `${spannedCommits} commits`,
        `to ${spannedRepo} repository`
      ];
  }
};

@Injectable({
  providedIn: 'root'
})
export class MotivationLocalService {
  intros = [
    'Just so you know...',
    'How is your day?',
    "The world won't wait",
    'Amazing projects await',
    'Still procrastinating?'
  ];

  outros = [
    'We hope you had a nice day as well!',
    'And how did you contribute today?',
    "Don't let the fun miss you!",
    'Your repo is getting jealous.'
  ];

  private readonly templates = 2;

  getIntro(): string {
    return oneOf(this.intros);
  }

  getOutro(): string {
    return oneOf(this.outros);
  }

  getSummary(user: string, repo: string, commits: number): string[] {
    const template: number = Math.floor(Math.random() * this.templates);

    return generateSummary(template, user, repo, commits);
  }
}
