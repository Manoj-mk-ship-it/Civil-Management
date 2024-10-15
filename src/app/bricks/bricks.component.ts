import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-bricks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bricks.component.html',
  styleUrls: ['./bricks.component.css']
})
export class BricksComponent {
  @ViewChild('brickform') form!: NgForm;
  unit: string = "Feet/Inch";
  length: number | null = null;
  thickness: string | null = null;
  height: number | null = null;
  ratio: string | null = null;
  volume: number | null = null;
  mortar: number | null = null;
  bricks: number | null = null;
  formSubmitted: boolean = false;
  showResult: boolean = false;
  sand: number | null = null;
  cement: number | null = null;

  calculate() {
    this.formSubmitted = true;
    this.showResult = false;

    if (this.form.valid && this.length && this.height && this.thickness && this.ratio) {
      let lengthInFeet = this.length;
      let heightInFeet = this.height;

      if (this.unit === "Meter") {
        lengthInFeet = this.length * 3.28084;
        heightInFeet = this.height * 3.28084;
      }

      const thicknessInFeet = this.thickness === "23cm-wall" ? 0.754593 : 0.656168;

      this.volume = lengthInFeet * heightInFeet * thicknessInFeet;
      this.mortar = this.volume * 0.2;
      this.bricks = Math.round((this.volume - this.mortar) / 0.062);

      const [cementRatio, sandRatio] = this.ratio.split(':').map(Number);
      const totalParts = cementRatio + sandRatio;

      this.cement = this.mortar * (cementRatio / totalParts);
      this.sand = this.mortar * (sandRatio / totalParts);

      this.showResult = true;
    }
  }

  onInputChange() {
    this.showResult = false;
  }

  addToProject() {
    // Implement this method as needed
  }
}