import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}