import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone:true,
  styleUrls: ['./header.component.scss'],
  imports:[MatIconModule, MatButtonModule,MatToolbarModule]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
