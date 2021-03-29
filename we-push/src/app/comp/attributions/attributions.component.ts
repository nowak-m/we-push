import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AttributionViewData } from '../attribution-view/attribution-view.component';

const identifyAttribution = (index: number, item: AttributionViewData) =>
  item.name;

const identifySection = (index: number, item: string) => item;

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.scss']
})
export class AttributionsComponent {
  attributions: AttributionViewData[] = [
    {
      section: 'Images',
      name: 'Octocat images',
      notice:
        'GITHUB®, the GITHUB® logo design, OCTOCAT® and the OCTOCAT® logo design are exclusive trademarks registered in the United States by GitHub, Inc.',
      link: 'https://octodex.github.com/faq/'
    }
  ];

  attributionMap = new Map<string, AttributionViewData[]>();

  sections: string[];

  attributionGroups: AttributionViewData[][] = [];

  identifyAttribution;

  identifySection;

  constructor(public dialogRef: MatDialogRef<AttributionsComponent>) {
    this.identifyAttribution = identifyAttribution;

    this.identifySection = identifySection;

    this.attributions.forEach(a => {
      if (this.attributionMap.has(a.section)) {
        this.attributionMap.get(a.section)?.push(a);
      } else {
        this.attributionMap.set(a.section, [a]);
      }
    });

    this.sections = [...this.attributionMap.keys()];

    this.sections.forEach(s => {
      this.attributionGroups.push(this.attributionMap.get(s) || []);
    });
  }

  getAttributions(section: string): AttributionViewData[] {
    return this.attributionMap.get(section) || [];
  }

  onClick() {
    this.dialogRef.close();
  }
}
