import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  progress: number = 0; // Inicializamos el progreso en 0
  images: string[] = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg', 'assets/img4.jpg'];
  currentImage: string = this.images[0]; 
  currentIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.startProgress();
  }

  startProgress() {
    const totalDuration = 8000; // Duración total de la animación (8 segundos)
    const intervalTime = 80; // Intervalo para avanzar el progreso (cada 80ms)
    const increment = 100 / (totalDuration / intervalTime); // Incremento en cada intervalo

    const interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval); // Detenemos cuando llega al 100%
      } else {
        this.progress += increment;

        // Cambia de imagen en los porcentajes 25%, 50%, 75%, 100%
        const newIndex = Math.min(Math.floor(this.progress / 25), this.images.length - 1);
        if (newIndex !== this.currentIndex) {
          this.currentIndex = newIndex;
          this.currentImage = this.images[this.currentIndex];
        }
      }
    }, intervalTime);
  }
}
