import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suscripcion',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-4">Suscríbete a nuestras novedades</h2>
      <form>
        <input
          type="email"
          placeholder="Tu correo electrónico"
          class="border p-2 w-full mb-4"
        />
        <button class="bg-green-600 text-white px-4 py-2">Suscribirse</button>
      </form>
    </section>
  `
})
export class SuscripcionComponent {}
