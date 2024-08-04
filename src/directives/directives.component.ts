import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  title="List of movies";

  myList=["Aadukalam","Visaranai","Vadachennai","Asuran"];

  moviesObject=[
    {title:'Aadukalam',director:'Vetrimaran'},
    {title:'Iraivi',director:'Karthick subburaj'},
    {title:'VTK',director:'GVM'}
  ]
}
