import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactInfo ={
    nombre:"",
    correo:"",
    celular:"",
    mensaje:""
  }

  enviar() {
    if (this.contactInfo.nombre==="" || this.contactInfo.correo==="" || this.contactInfo.celular==="" || this.contactInfo.mensaje==="")
      console.log("Debe diligenciar todos los campos.");
    else {
      localStorage.setItem('contactInfo',JSON.stringify(this.contactInfo));
      alert(this.contactInfo.nombre + ", su mensaje se ha registrado con éxito.");
    }
  }

  limpiar() {
    this.contactInfo.nombre = "";
    this.contactInfo.correo = "";
    this.contactInfo.celular = "";
    this.contactInfo.mensaje = "";
  }
}
