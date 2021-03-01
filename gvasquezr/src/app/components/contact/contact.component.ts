import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  
    formContact: FormGroup;

    constructor(private formBuilder:FormBuilder, private authService: AuthService) {}

    ngOnInit(): void {
        this.formContact = this.formBuilder.group({
            nombre: ['', [Validators.required]],
            correo: [this.authCorreo, [Validators.required, Validators.email]],
            celular: ['', [Validators.required]],
            mensaje: ['', [Validators.required]],
        });
    }

    get authCorreo(): string {
        return this.authService.isLoggedIn ? this.authService.getUser().email : 'x';
    }

    get correo() {
        return this.formContact.get('correo').value;
    }

    get nombre() {
        return this.formContact.get('nombre').value;
    }

    get celular() {
        return this.formContact.get('celular').value;
    }

    get mensaje() {
        return this.formContact.get('mensaje').value;
    }

    enviar() {
      if (this.nombre === '' || this.correo === '' || this.celular === '' || this.mensaje === '')
          console.log('Debe diligenciar todos los campos.');
      else {
          alert(this.nombre + ', su mensaje se ha registrado con éxito.');
          this.limpiar();
      }
    }

    limpiar() {
        this.formContact.setValue(
            {
                nombre:'', 
                correo:this.authCorreo, 
                celular:'', 
                mensaje:''
            }
        );
    }
}