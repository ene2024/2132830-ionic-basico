import { Component, OnInit } from '@angular/core';
import { alumno } from './alumno.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor(private ActionSheetController: ActionSheetController) { }

  ngOnInit() {}

  alumnos : alumno[] = [];

  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  result: string = '';

  agregarAlumno(): void {
    this.alumnos.push(this.alumno);
    this.alumno = {
      nombre: '',
      presente: false
    } 
  }


}