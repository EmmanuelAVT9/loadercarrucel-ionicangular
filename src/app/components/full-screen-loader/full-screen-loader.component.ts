import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-screen-loader',
  templateUrl: './full-screen-loader.component.html',
  styleUrls: ['./full-screen-loader.component.scss'],
})
export class FullScreenLoaderComponent  implements OnInit {

  @Input() images: { src: string, text: string }[] = [];
  @Input() intervalDuration: number = 2000; // Tiempo configurable entre imágenes (ms)
  @Input() redirectionRoute: string = ''; // Ruta a la que se redirigirá después del loader

  progress: number = 0; // Inicializamos el progreso en 0
  currentImage: string = ''; 
  currentText: string = ''; 
  currentIndex: number = 0;
  isLoaderActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.images.length > 0) {
      this.currentImage = this.images[0].src;
      this.currentText = this.images[0].text;
    }
  }

  startLoader() {
    this.isLoaderActive = true;
    const totalDuration = this.images.length * this.intervalDuration; // Duración total del loader
    const intervalTime = 80; // Intervalo para avanzar el progreso (cada 80ms)
    const increment = 100 / (totalDuration / intervalTime); // Incremento en cada intervalo

    const interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval); // Detenemos cuando llega al 100%
        this.isLoaderActive = false; // Ocultamos el loader
        this.router.navigate([this.redirectionRoute]); // Redireccionar después de cargar
      } else {
        this.progress += increment;

        // Cambiar imagen y texto a los intervalos configurados
        const newIndex = Math.floor((this.progress / 100) * this.images.length);
        if (newIndex !== this.currentIndex && newIndex < this.images.length) {
          this.currentIndex = newIndex;
          this.currentImage = this.images[this.currentIndex].src;
          this.currentText = this.images[this.currentIndex].text;
        }
      }
    }, intervalTime);
  }
}
