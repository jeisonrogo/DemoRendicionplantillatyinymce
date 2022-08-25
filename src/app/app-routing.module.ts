import { ModificarPlantillasComponent } from './modificar-plantillas/modificar-plantillas.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MenuComponent
  },
  {
    path: 'plantillas',
    component: PlantillasComponent
  },
  {
    path: 'editar',
    component: ModificarPlantillasComponent
  },
  // {
  //   path: 'edit/:uid',
  //   component: EditPostComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
