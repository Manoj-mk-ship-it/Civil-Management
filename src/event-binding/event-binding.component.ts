import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  
})
export class EventBindingComponent {
    getvalue='';
    clickedMe(event:any){
      this.getvalue=(event.target as HTMLInputElement).value;
    }
}
