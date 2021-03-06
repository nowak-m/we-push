import { Injectable } from '@angular/core';
import {
  MotivationService,
  SummaryData
} from '../shared/motivation-service.model';

const getRandomArrayElement = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const getCommitString = (count: number): string =>
  count === 1 ? 'commit' : 'commits';

const wrapInSpan = (text: any): string => `<span>${text}</span>`;

const generateSummary = (
  template: number,
  summaryData: SummaryData
): string[] => {
  const { user, repo, commits } = summaryData;
  const spannedUser = wrapInSpan(user);
  const spannedRepo = wrapInSpan(repo);
  const spannedCommits = wrapInSpan(commits);
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
    return getRandomArrayElement(this.intros);
  }

  getOutro(): string {
    return getRandomArrayElement(this.outros);
  }

  getSummary(summaryData: SummaryData): string[] {
    const template: number = Math.floor(Math.random() * this.templates);

    return generateSummary(template, summaryData);
  }
}
