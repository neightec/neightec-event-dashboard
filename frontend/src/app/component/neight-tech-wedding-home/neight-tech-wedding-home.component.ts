import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NeightApiService } from 'src/neight-api.service';

@Component({
  selector: 'neight-tech-wedding-home',
  templateUrl: './neight-tech-wedding-home.component.html',
  styleUrls: ['./neight-tech-wedding-home.component.scss']
})
export class NeightTechWeddingHomeComponent {

  constructor(
    private http: HttpClient,
    private route: Router,
    protected loginService: LoginService,
    protected neightApi: NeightApiService) {
  }

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

  // TODO move this to another component
  // i.e. directly in app component 
  login(): void {
    this.loginService.login();
  }
}
