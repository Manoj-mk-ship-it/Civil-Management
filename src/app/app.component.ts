import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from "../practice/practice.component";
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from "../event-binding/event-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PracticeComponent, FormsModule, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  
}
