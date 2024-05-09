import { Component } from '@angular/core';

@Component({
  selector: 'neight-tech-wedding-home',
  templateUrl: './neight-tech-wedding-home.component.html',
  styleUrls: ['./neight-tech-wedding-home.component.scss']
})
export class NeightTechWeddingHomeComponent {

  theme = 'g90';

  menuItems: any = [
    {
      title: 'Dashboard',
      icon: 'template',
      size: '16'
    },
    {
      title: 'Guest Traffic',
      icon: 'activity',
      size: '16'
    },
  ]
}
