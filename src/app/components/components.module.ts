// Librerias externas
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Componentes internos
import { FullScreenLoaderComponent } from './full-screen-loader/full-screen-loader.component';


@NgModule({
  declarations: [
    FullScreenLoaderComponent,
  ],
  exports: [
    FullScreenLoaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
