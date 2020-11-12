import { Component, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { Empleado } from  '../model/empleado';
import { MaterialModule } from '../material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['nombres','pais','documento','email','estado','acciones'];
  dataSource: MatTableDataSource<Empleado>;
  empleados: Empleado[]=[
    {id: 1,fLastName: 'zessi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 2,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 3,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 4,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 5,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 6,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 7,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 8,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 9,fLastName: 'messi',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'argentina',tipoI: 'CC',numI: '123456879',email: 'messi@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'},
    {id: 10,fLastName: 'pene',sLastName: 'leonel',fName: 'andres',sName: 'rucuccini',contry: 'suiza',tipoI: 'PE',numI: '123456879',email: 'jpj@teamo.com',fechaIngreso: '12/78/98',area: 'mercadeo',estado: 'activasion'}

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,private router: Router) { 
  
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.empleados);
  }
  ngOnInit(){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  editEmployee(id:number){
    this.router.navigate(['edicion',id]);;
  }

  deleteEmployee(id:number){
    var l=id;
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}




