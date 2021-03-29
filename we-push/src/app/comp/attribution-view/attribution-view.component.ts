import { Component, Input } from '@angular/core';

export interface AttributionViewData {
  section: string;
  name: string;
  notice: string;
  link: string;
}

@Component({
  selector: 'app-attribution-view',
  templateUrl: './attribution-view.component.html',
  styleUrls: ['./attribution-view.component.scss']
})
export class AttributionViewComponent {
  @Input() data: AttributionViewData = {
    section: 'attribution section (i.e. Images)',
    name: 'Attributed item name',
    notice: 'This item is registered under a trademark.',
    link: 'https://link.to/attributed/resource'
  };
}
