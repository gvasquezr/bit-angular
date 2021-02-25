import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  userInfo= {
    correo:"",
    clave:""
  }

  ingresar() {
    if (this.userInfo.correo === "")
      console.log("Debe ingresar un correo electrónico.");
    else if (this.userInfo.clave === "")
      console.log("Debe ingresar una contraseña.");
    else {
      localStorage.setItem('userCorreo',JSON.stringify(this.userInfo.correo));
      this.router.navigate(['/home']);
      console.log("Ha iniciado sesión satisfactoriamente con el correo " + this.userInfo.correo);
    }
  }

  limpiar() {
    this.userInfo.correo="";
    this.userInfo.clave="";
    localStorage.clear;
  }
}
