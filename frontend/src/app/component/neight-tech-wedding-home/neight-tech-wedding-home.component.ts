import { Component } from '@angular/core';

@Component({
  selector: 'neight-tech-wedding-home',
  templateUrl: './neight-tech-wedding-home.component.html',
  styleUrls: ['./neight-tech-wedding-home.component.scss'],
  standalone: false
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
    {
      title: 'Budget',
      icon: 'currency',
      size: '16'
    },
  ]

  menuSettingItems: any = [
    {
      title: 'Account',
      icon: 'settings',
      size: '16'
    },
    {
      title: 'Help & Support',
      icon: 'lifesaver',
      size: '16'
    },
  ]

  public changeRouter(): void {
    console.warn("test changeRouter");
  }
}
