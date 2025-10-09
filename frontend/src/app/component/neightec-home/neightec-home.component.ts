import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'neightec-home',
  templateUrl: './neightec-home.component.html',
  styleUrl: './neightec-home.component.scss',
  standalone: false
})
export class NeightecHomeComponent {

  @ViewChild('drawer') 
  drawer: MatDrawer;

  @ViewChild('drawerContainer') 
  drawerContainer: MatDrawerContainer;
  
  showFiller = false;

}
