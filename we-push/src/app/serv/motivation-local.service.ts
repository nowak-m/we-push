import { Injectable } from '@angular/core';
import { MotivationService } from '../shared/motivation-service.model';

const randomArrayElement = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const getCommitString = (count: number): string =>
  count === 1 ? 'commit' : 'commits';

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
        `has ${spannedCommits} new ${getCommitString(commits)}`,
        `thanks to ${spannedUser}`
      ];
    default:
      return [
        `${spannedUser} has just pushed`,
        `${spannedCommits} ${getCommitString(commits)}`,
        `to ${spannedRepo} repository`
      ];
  }
};

@Injectable({
  providedIn: 'root'
})
export class MotivationLocalService implements MotivationService {
  private readonly intros = [
    'Just so you know...',
    'How is your day?',
    "The world won't wait",
    'Amazing projects await',
    'Still procrastinating?'
  ];

  private readonly outros = [
    'We hope you had a nice day as well!',
    'And how did you contribute today?',
    "Don't let the fun miss you!",
    'Your repo is getting jealous.'
  ];

  private readonly templates = 2;

  getIntro(): string {
    return randomArrayElement(this.intros);
  }

  getOutro(): string {
    return randomArrayElement(this.outros);
  }

  getSummary(user: string, repo: string, commits: number): string[] {
    const template: number = Math.floor(Math.random() * this.templates);

    return generateSummary(template, user, repo, commits);
  }
}
