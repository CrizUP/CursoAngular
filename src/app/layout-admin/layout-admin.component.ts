import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {

  constructor() { }
  title = 'GestionAutos';
  userName: string;
  isMaps(path) {
    return false;
  }
  // tslint:disable-next-line: ban-types
  click(texto: String) {
    console.log(texto);
  }
  ngOnInit(): void {
  }
}
