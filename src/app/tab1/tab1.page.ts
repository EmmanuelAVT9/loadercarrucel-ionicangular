import { Component, ViewChild } from '@angular/core';
import { FullScreenLoaderComponent } from '../components/full-screen-loader/full-screen-loader.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  // Definimos la referencia al componente del loader
  @ViewChild(FullScreenLoaderComponent) loader!: FullScreenLoaderComponent;
  
  loaderImages = [
    { src: 'assets/img1.jpg', text: 'Cargando recursos ...' },
    { src: 'assets/img2.jpg', text: 'Dame un momento estamos trabajando para darte una mayor experiencia...' },
    { src: 'assets/img3.jpg', text: 'Ya casi esta todo listo espera...' },
    { src: 'assets/img4.jpg', text: 'Finalizando carga...' }
  ];

  constructor() {}

  showLoader() {
    if (this.loader) {
      this.loader.startLoader(); // Llamamos al método startLoader del componente hijo
    }
  }
}
