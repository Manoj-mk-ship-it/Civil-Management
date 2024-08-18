import { CommonModule } from '@angular/common';

import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-steel',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './steel.component.html',
  styleUrl: './steel.component.css'
})
export class SteelComponent {
  @ViewChild('steelform') form: NgForm;
  
  
  sqft: number | null = null;
  floors: number | null = null;
  formSubmitted: boolean = false;
  kgs: number | null = null;
  showKgs: boolean = false;
  tons:number|null=null;

  calculate() {
    this.formSubmitted = true;
    this.showKgs = false; // Hide kgs initially

    if (this.form.valid) {
      if (this.sqft !== null && this.floors !== null) {
        if (this.floors === 1) {
          this.kgs = this.sqft * 17;
          this.tons=(this.kgs)/1000;
        } else if (this.floors > 1) {
          this.kgs = (this.sqft * 17) + (((this.floors - 1) * this.sqft) * 12);
          this.tons=(this.kgs)/1000;
        }
        this.showKgs = true; // Show kgs if calculation is successful
      }
    } 
  }

  addToProject() {
    this.calculate(); // Ensure calculation is done before adding
    // Add your logic here for adding to project
  }

  onInputChange() {
    this.showKgs = false; // Hide kgs when inputs are changed
  }
}


