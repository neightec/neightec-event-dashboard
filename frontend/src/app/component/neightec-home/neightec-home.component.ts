import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'neightec-home',
  templateUrl: './neightec-home.component.html',
  styleUrl: './neightec-home.component.scss',
  imports: [ MatSidenavModule],
  standalone: true
})
export class NeightecHomeComponent {

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('drawer') drawerContainer: MatDrawerContainer;
  
  showFiller = false;

}
