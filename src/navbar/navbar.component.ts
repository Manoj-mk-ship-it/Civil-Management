import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'bruh';
  hello = 'there';
  isdis = false;
  numtest:number | string = "0";
  checkn = false;
  enablecolor = false;

  get_title(){
    return this.hello
  }

  getMax = (first:number,second:number):number =>{
    if (first > second){
      return first
    }
    else{
      return second
    }
  }

  count:number = 0;
  clickcounter(){
    this.count = this.count + 1;
    if (this.count == 15){
      this.isdis = true;
    }
  }

  val:string = '';
  assign(event:any){
    this.val = event.target.value;
  }

  numberex = [
    'one',
    'two',
    'three'
  ]
  ch(event:any){
    this.numtest = Number(event.target.value);
    if(this.numtest >= 4){
      this.checkn = true;
    }
    else{
      this.checkn = false;
    }
  }

  countdown = 30;

  countdownstart(){
    this.countdown++;
    console.log("clicked");
    
  }

  display()
  {
    return this.countdown;
  }
}
