import { Injectable } from '@angular/core';
import { IEmpleado } from '../app.component';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleado = new Subject<IEmpleado>()
  empleadosObservable = this.empleado.asObservable()

  private empleadosList = new BehaviorSubject<IEmpleado[]>([])
  empleadosListObservable = this.empleadosList.asObservable()

  
  employes : IEmpleado[] = [
    {
      nombre : 'james',
      apellido : 'hetfield',
      telefono : '3110000000',
    }
  ]

  constructor() { }

  //Metodo para agregar nuevos usuarios y ordernarlos alfabeticamente ---
  addNewEmploye(employe : IEmpleado){

    this.empleado.next(employe)

    const array = this.empleadosList.getValue()
    array.push(employe)

    array.sort((a, b)=>{
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    })

    this.empleadosList.next(array)

    this.employes.push(employe) // sync

    this.employes.sort((a, b)=>{
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    })

    return this.employes
  
  }

  getAllEmployes(){
    return this.employes
  }

}
