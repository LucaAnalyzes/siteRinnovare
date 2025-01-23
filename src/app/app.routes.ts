import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FotosComponent } from './pages/fotos/fotos.component';


export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"sobre", component:SobreComponent},
    {path:"fotos", component:FotosComponent}
];
