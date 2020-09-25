import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Login } from '@core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() imagen: string;
  @Input() model: Login;
  @Output() loginClicked: EventEmitter<any> = new EventEmitter();
  opciones = {
    onValueChanges: 'fechaCambio()'
  };
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hay cambios');
    console.log(changes);
  }

  ngOnInit(): void {
  }
  loginOnClick(): void {
    this.loginClicked.emit();
  }

  fechaCambio(): void {
    console.log('Cambio la fehca');
  }

}
