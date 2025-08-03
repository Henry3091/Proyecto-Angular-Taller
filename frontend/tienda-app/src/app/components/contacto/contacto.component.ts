import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="p-6 max-w-lg mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Contáctanos</h2>
      <form>
        <label class="block mb-2">Nombre:</label>
        <input class="border w-full mb-4 p-2" type="text" />

        <label class="block mb-2">Correo:</label>
        <input class="border w-full mb-4 p-2" type="email" />

        <label class="block mb-2">Mensaje:</label>
        <textarea class="border w-full mb-4 p-2"></textarea>

        <button class="bg-blue-500 text-white px-4 py-2">Enviar</button>
      </form>
    </section>
  `
})
export class ContactoComponent {}

