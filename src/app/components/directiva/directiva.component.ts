import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {


  listaEstudiantes: Array<string> = ['Seba', 'Alex', 'Jaime', 'Camilo', 'Andres'];

  
  constructor() { }

  ngOnInit(): void {
  }

}
