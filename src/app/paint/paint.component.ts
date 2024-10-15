import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-paint',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})

  export class PaintComponent {
    //@ViewChild('paintform') form: NgForm;
    unit: string = "Feet/Inch";
    length: number|null =null;
    width: number |null =null;
    height: number |null =null;
  
    kgs: number |null =null;
    sqft: number |null =null;
    emulsion: number|null =null;
    primer: number|null =null;
    formSubmitted:boolean=false;
    showResult:boolean=false;
  
    calculate() 
    {

      this.formSubmitted=true;
      this.showResult=false;//Hide result initially
      // Calculation of sqft based on length, width, and height
          if(this.length!==null&&this.width!=null&&this.height!=null)
          {
            this.sqft = (2 * (this.length * 10)) + (2 * (this.width * 10)) + (this.length * this.width);
            this.kgs = this.sqft * 0.176;
            this.primer = this.sqft * 0.0147;
            this.emulsion = this.sqft * 0.0147;
          }
        this.showResult=true;
    }
    onInputChange() {
      this.showResult = false; // Hide results inputs are changed
    }
    addToProject() {
      this.calculate(); // Ensure calculation is done before adding
      // Add your logic here for adding to project
    }

  }
  
 