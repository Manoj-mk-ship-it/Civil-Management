import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatertankComponent } from "../watertank/watertank.component";

import { PaintComponent } from "./paint/paint.component";
import { HomeComponent } from "./home/home.component";
import { BricksComponent } from "../bricks/bricks.component";
import { CemconComponent } from "./cemcon/cemcon.component";
import { SteelComponent } from "../steel/steel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WatertankComponent, PaintComponent, HomeComponent, BricksComponent, CemconComponent, SteelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trialapp';
}
