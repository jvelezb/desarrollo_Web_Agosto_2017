import { Component } from '@angular/core';


const ALUMNOS: Alumno[] = 
[
	{matricula: 9453, nombre: 'Luis Camanei'},
	{matricula: 9342, nombre: 'Pedrito Fernandez'},
	{matricula: 42342, nombre: 'Pedrito Sola'},
	{matricula: 4232211, nombre:'juan gabriel'}

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Otra cosa';
  nombreProfesor = 'Juan Velez';
  alumnos = ALUMNOS;
}



export class Alumno
{
	matricula: number;
	nombre: string;
}
