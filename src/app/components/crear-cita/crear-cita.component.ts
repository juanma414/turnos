import { outputAst } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {
  nombre='';
  fecha = '';
  hora='';
  sintomas='';

  formularioIncorrecto=false;
  @Output() nuevaCita = new EventEmitter<any>()
  
  agregarCita(){
    if(this.nombre==''||this.fecha==''||this.hora==''||this.sintomas==''){
      this.formularioIncorrecto=true;
      return;
    }
    this.formularioIncorrecto=false;
    //creamos obj para enviarselo al padre
    const CITA = {
      nombre:this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      sintomas:this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }

  resetCampos(){
    this.nombre='';
    this.fecha = '';
    this.hora='';
    this.sintomas='';
  }
}

