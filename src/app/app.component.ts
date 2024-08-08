import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatertankComponent } from "../watertank/watertank.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WatertankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trialapp';
}
