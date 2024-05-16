import { Component } from '@angular/core';

@Component({
  selector: 'neight-tech-wedding-dashboard',
  templateUrl: './neight-tech-wedding-dashboard.component.html',
  styleUrls: ['./neight-tech-wedding-dashboard.component.scss']
})
export class NeightTechWeddingDashboardComponent {

  type: string = "line"; // "line" | "contained"
  followFocus: boolean = true;
  isNavigation: boolean = false;
  cacheActive: boolean = true;
}
