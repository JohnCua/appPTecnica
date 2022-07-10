import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactoForm:FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.contactoForm.value);
  }

}
