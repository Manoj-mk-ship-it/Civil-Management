import { Routes,RouterModule} from '@angular/router';
import { CemconComponent } from './cemcon/cemcon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'navbar', component: NavbarComponent, title: 'Home Page', children: [
            { path: 'cemcon', component: CemconComponent,title: 'Cement Concrete' }
        ]
    },
    {path: "",component:LoginComponent,title:'Login Page'},
];
