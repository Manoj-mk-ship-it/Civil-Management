import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from "../practice/practice.component";
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from "../event-binding/event-binding.component";
import { WatertankComponent } from "../watertank/watertank.component";
import { BricksComponent } from "../bricks/bricks.component";
import { DirectivesComponent } from "../directives/directives.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PracticeComponent, FormsModule, EventBindingComponent, WatertankComponent, BricksComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  
}
