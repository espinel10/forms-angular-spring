import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../model/empleado';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  id: number;
  empleado:Empleado;
  myForm: FormGroup;
  constructor(public fb: FormBuilder,private route: ActivatedRoute,private router: Router) {
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


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  saveData(){
    console.log(this.myForm.value);
  }

}
