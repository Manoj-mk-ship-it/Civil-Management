import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatButtonToggleModule,FormsModule,MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  opened=false;
}
