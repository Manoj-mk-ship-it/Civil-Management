import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
    Firstname="String";
    Lastname="Interpolation";
    Propertybind="displayed via property binding";
    Twowaybind="Two way bind";
    StringInterpolationvar="Call function using string interpolation";
    color='red';
    count=0;
    calculate(){
      return this.StringInterpolationvar;
    }
    getMax(first:number,second:number){
      return Math.max(first,second);
    }
    clickMe(){
      this.count++;
    }
    
}
