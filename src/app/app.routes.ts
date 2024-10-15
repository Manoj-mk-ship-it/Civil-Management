import { Routes,RouterModule} from '@angular/router';
import { CemconComponent } from './cemcon/cemcon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SteelComponent } from './steel/steel.component';
import { BricksComponent } from './bricks/bricks.component';
import { WatertankComponent } from './watertank/watertank.component';
import { PaintComponent } from './paint/paint.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {
        path: 'navbar', component: NavbarComponent, title: 'Home Page', children: [
            { path: 'cemcon', component: CemconComponent,title: 'Cement Concrete' },
            {path: 'steel',component: SteelComponent,title:'Steel'},
            {path: 'bricks',component: BricksComponent,title:'Brick'},
            {path:'watertank',component: WatertankComponent,title:'Water Tank'},
            {path:'paint',component: PaintComponent,title:'Paint'},
            {path:'about',component:AboutusComponent,title:'About Us - CivilManagement'}

        ]
    },
    {path: "",component:LoginComponent,title:'Login Page'},
    {path: "login",component:LoginComponent,title:'Login Page'}
];
