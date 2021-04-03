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
  readonly attributions: AttributionViewData[] = [
    {
      section: 'Images',
      name: 'Octocat images',
      notice:
        'GITHUB®, the GITHUB® logo design, OCTOCAT® and the OCTOCAT® logo design are exclusive trademarks registered in the United States by GitHub, Inc.',
      link: 'https://octodex.github.com/faq/'
    }
  ];

  attributionSectionNames: string[] = [];

  attributionGroups: AttributionViewData[][] = [];

  identifyAttribution;

  identifySection;

  private readonly attributionSectionMap = new Map<
    string,
    AttributionViewData[]
  >();

  constructor(public dialogRef: MatDialogRef<AttributionsComponent>) {
    this.identifyAttribution = identifyAttribution;

    this.identifySection = identifySection;

    this.attributions.forEach(attribution => {
      if (this.attributionSectionMap.has(attribution.section)) {
        this.attributionSectionMap.get(attribution.section)?.push(attribution);
      } else {
        this.attributionSectionMap.set(attribution.section, [attribution]);
      }
    });

    this.attributionSectionNames = [...this.attributionSectionMap.keys()];

    this.attributionSectionNames.forEach(sectionName => {
      this.attributionGroups.push(
        this.attributionSectionMap.get(sectionName) || []
      );
    });
  }

  onClick() {
    this.dialogRef.close();
  }
}
