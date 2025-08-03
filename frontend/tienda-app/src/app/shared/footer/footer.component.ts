import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; 2025 Tienda Web. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    footer {
      margin-top: 40px;
      text-align: center;
      padding: 1rem;
      background-color: #f4f4f4;
    }
  `]
})
export class FooterComponent {}
