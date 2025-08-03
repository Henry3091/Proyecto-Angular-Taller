import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  template: `
    <section class="p-8 max-w-2xl mx-auto">
      <h2 class="text-3xl font-semibold">Sobre Nosotros</h2>
      <p class="mt-4">
        Somos una empresa dedicada a brindar los mejores productos de calidad.
      </p>
    </section>
  `
})
export class NosotrosComponent {}
