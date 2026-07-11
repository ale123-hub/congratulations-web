import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  // Cuando lo subamos a Render cambiaremos esta URL, por ahora probamos en local:
  apiUrl = 'https://congratulations-api.onrender.com/api'; 
  mensajeRespuesta: string = '';
  enviado: boolean = false;
  cargando: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 🕵️‍♂️ Registro silencioso: en cuanto carga la página, Laravel se entera.
    this.http.post(`${this.apiUrl}/registrar-visita`, {}).subscribe({
      error: (err) => console.log('El back está apagado o falta configurar CORS, pero la carta se muestra igual.')
    });
  }

  enviarMensaje() {
    if (!this.mensajeRespuesta.trim()) return;

    this.cargando = true;
    this.http.post(`${this.apiUrl}/enviar-respuesta`, {
      mensaje: this.mensajeRespuesta
    }).subscribe({
      next: () => {
        this.enviado = true;
        this.mensajeRespuesta = '';
        this.cargando = false;
      },
      error: () => {
        alert('Hubo un problema al enviar tu mensaje. Inténtalo más tarde.');
        this.cargando = false;
      }
    });
  }
}