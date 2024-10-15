import { CommonModule } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import { tap,catchError,of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterLinkActive,RouterOutlet,RouterModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  change = false;
  unchange = true;
  pass:string = '';
  user:string = '';
  mail = '';
  auth = "vertex";
  authuser = "sid";
  constructor(private router: Router,private httpsend: HttpClient) {}

  assignuser(event:any){
    this.user = event.target.value;
  }

  assignpass(event:any){
    this.pass = event.target.value;
  }

  assignmail(event:any){
    this.mail = event.target.value;
  }

  login(){
    if(this.models[0].password == this.pass && this.models[0].user_name == this.user){
      this.router.navigate(['/navbar']);
    }
    else if(this.pass == '' || this.user == ''){
      alert("Required");
    }
    else{
      alert("Invalid Credentials !!");
    }
  }

  changetologin(){
    this.unchange = false;
    this.change = true;
  }

  changetosignup(){
    this.unchange = true;
    this.change = false;
  }


  private http = inject(HttpClient);
  models: any;
  example:any;

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/')
      .subscribe(data => {
        this.models = data;
      });

  }


  sendUserData() {
    if(this.pass == '' || this.user == '' || this.mail == ''){
      alert("Required");
    }
    else{
      const userData = {
        name: this.user,
        pass: this.pass,
        mail: this.mail
    };
  
    this.httpsend.post('http://127.0.0.1:8000/receive-data/', userData)
      .subscribe(response => {
        console.log('Response from server:', response);
      }, error => {
        console.error('Error occurred:', error);
      });
    }
  }
      
      /*sendUserData() {
        if(this.pass == '' || this.user == '' || this.mail == ''){
          alert("Required");
        }
        else{
          const userData = {
            name: this.user,
            pass: this.pass,
            year: 2005
          };

          this.httpsend.post('http://127.0.0.1:8000/receive-data/', userData)
          .pipe(
            tap(response => {
              console.log('Response from server:', response);
            }),
            catchError(error => {
              console.error('Error occurred:', error);
              return of(null);  // Return a fallback value or an empty observable
            })
          )
          .subscribe();
        }
      
        
      }*/
      
}
