import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listcitas:any[]=[];

  agregarCita(cita:any){
    this.listcitas.push(cita);
    console.log(this.listcitas);
  }

  eliminarCitaListado(index:number){
    this.listcitas.splice(index,1);
  }
}

