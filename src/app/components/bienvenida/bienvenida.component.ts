import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  fechaInput: string = ''; 
  error: boolean = false;

  constructor(private router: Router) {}

  verificarAcceso() {
    const fechaCorrecta = '2001-11-03'; 

    if (this.fechaInput === fechaCorrecta) {
      this.router.navigate(['/carta']); 
    } else {
      this.error = true;
    }
  }
}