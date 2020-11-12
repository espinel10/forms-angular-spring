import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup;
  empleado:Empleado;

  constructor(public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      fLastName: ['', [Validators.required]],
      sLastName: ['', [Validators.required]],
      fName: ['', [Validators.required]],
      sName: ['', [Validators.required]],
      contry: ['', [Validators.required]],
      tipoI: ['', [Validators.required]],
      numI: ['', [Validators.required]],
      email:['',[]],
      fechaIngreso:['', [Validators.required]],
      area: ['', [Validators.required]],
      estado:['activo',[]]
    });
    
  }
  saveData(){
    console.log(this.myForm.value);
  }

  ngOnInit(): void {
  }

  

}
