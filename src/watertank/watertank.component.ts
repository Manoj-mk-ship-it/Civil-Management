import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-watertank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './watertank.component.html',
  styleUrls: ['./watertank.component.css'] // Fixed styleUrls
})
export class WatertankComponent {
  unit: string = "Feet/Inch";
  length: number = 0;
  width: number = 0;
  depth: number = 0;
  volume: number = 0;
  litres: number = 0;
  metrecube: number = 0;
  calculated: boolean = false; // Add this property
  cost:number=0;
  calculate() {
    if (this.unit === 'Feet/Inch') {
      this.volume = this.length * this.width * this.depth;
      this.metrecube = this.volume * 0.0283168;
    } else if (this.unit === 'Meter') {
      this.volume = this.length * this.width * this.depth;
      this.metrecube = this.volume; // volume in cubic meters if input is already in meters
    }
    this.litres = this.metrecube * 1000;
    this.calculated = true; // Set this property to true after calculation
    this.cost=this.litres*22;
  }

  reset() {
    this.unit = "Feet/Inch";
    this.length = 0;
    this.width = 0;
    this.depth = 0;
    this.volume = 0;
    this.litres = 0;
    this.metrecube = 0;
    this.calculated = false; // Reset calculated state
  }
}
