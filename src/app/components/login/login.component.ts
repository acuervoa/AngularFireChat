import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor() { }

  ingresar( proveedor: string ){
      console.log(proveedor);
  }


}