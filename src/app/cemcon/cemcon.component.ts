import { CommonModule } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-cemcon',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,FormsModule,CommonModule],
  templateUrl: './cemcon.component.html',
  styleUrl: './cemcon.component.css'
})
export class CemconComponent{
  disp = false;
  length = 0;
  width = 0;
  depth = 0;
  total = 0;

  assignlen($event:any){
    this.length = Number((event?.target as HTMLInputElement).value);

    if(this.width != 0 && this.depth != 0){
      this.total = this.length * this.width * this.depth;
      this.disp = true;
    }
  }

  assignwid($event:any){
    this.width = Number((event?.target as HTMLInputElement).value);
    if(this.length != 0 && this.depth != 0){
      this.total = this.length * this.width * this.depth;
      this.disp = true;
    }
  }

  assigndep($event:any){
    this.depth = Number((event?.target as HTMLInputElement).value);
    if(this.length != 0 && this.width != 0){
      this.total = this.length * this.width * this.depth;
      this.disp = true;
    }
  }

}