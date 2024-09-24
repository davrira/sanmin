import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './services/empleado.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

export interface IEmpleado {
  nombre : string
  apellido : string
  telefono : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employes : IEmpleado[] = []

  employesAsync! : Observable<IEmpleado[]>

  title = 'prueba_tecninca';

  form = {
    formGroup : new FormGroup({
      nombre : new FormControl('', {
        validators : [Validators.required]
      }),
      apellido : new FormControl('', {
        validators : [Validators.required]
      }),
      telefono : new FormControl('', {
        validators : [Validators.required]
      }),
    })    
  }

  empleadosSubscription! : Subscription

  constructor(private empleadoService : EmpleadoService) {}

  ngOnInit(): void {

    const employes = this.empleadoService.getAllEmployes()
    this.employes = employes

    this.employesAsync = this.empleadoService.empleadosListObservable

  }

  get controls(){
    return this.form.formGroup.controls
  }

  agregarEmpleado(){

    //validación

    const nombre = this.controls.nombre.value!
    const apellido = this.controls.apellido.value!
    const telefono = this.controls.telefono.value!

    const employe = {
      nombre,
      apellido,
      telefono
    }

    const newEmployes = this.empleadoService.addNewEmploye(employe)
    this.employes = newEmployes

    this.controls.nombre.setValue('')
    this.controls.apellido.setValue('')
    this.controls.telefono.setValue('')

  }

}
