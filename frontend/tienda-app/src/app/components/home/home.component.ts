import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="p-10 text-center">
      <h1 class="text-4xl font-bold">¡Bienvenido a nuestra tienda!</h1>
      <p class="mt-4 text-lg">Explora nuestros productos y conoce más sobre nosotros.</p>
    </section>
  `
})
export class HomeComponent {}
