import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component(
    {
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
    }
)
export class LoginComponent implements OnInit {
    formLogin: FormGroup;

    constructor(private formBuilder:FormBuilder, private authService:AuthService,private router:Router) {
    }

    ngOnInit(): void {
        this.formLogin = this.formBuilder.group(
            {
                correo:['',[Validators.required,Validators.email]],
                clave: ['',[Validators.required]],
            }
        );
    }

    get correo(): string {
        return this.formLogin.get('correo').value;
    }

    get clave(): string {
        return this.formLogin.get('clave').value;
    }

    ingresar() {
        if (this.correo === '')
            console.log('Debe ingresar un correo electrónico.');
        else if (this.clave === '')
            console.log('Debe ingresar una contraseña.');
        else {
            this.authService.login(this.correo,this.clave)
            .then(response => {
                this.authService.setUser(response.user);
                this.router.navigate(['/home']);
            })
            .catch(err => {
                alert("Correo electrónico no registrado, o contraseña no válida. Verifique los datos e intente nuevamente.");
            });
        }
    }

    limpiar() {
        this.formLogin.setValue(
            {
                correo: '',
                clave: ''
            }
        );
    }
}