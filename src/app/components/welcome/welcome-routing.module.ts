import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { RolesComponent } from './roles/roles.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'crear-rol', component: CrearRolComponent},
    {path: 'crear-producto', component: CrearProductoComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
