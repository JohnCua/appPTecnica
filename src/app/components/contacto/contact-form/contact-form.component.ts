import { ContactFormService } from './contact-form.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactoForm = this.formBuilder.group({
    nombre:  ['', [Validators.required]],
    correo:  ['', [Validators.required, Validators.email]],
    telefono:  ['', [Validators.required, Validators.maxLength(10)]],
    mensaje:  ['', Validators.required]
  });

  submitted = false;

  url:any

  @Input('maxCaracters') maxCaracters: number;

  constructor(private formBuilder: FormBuilder, private contactFormService:ContactFormService ) { }

  ngOnInit(): void {
    this.prueba()
  }

  submitForm() {
    this.submitted = true;

    // this.contactFormService.postContactoForulario(this.contactoForm.value).subscribe((respuesta)=> {
    //   console.log('respuesta')
    // })
   
  }

  get f() {
    return this.contactoForm.controls;
  }

  getErrorMessage(campo:any,tex1:string, text2?:string) {
    if (this.contactoForm.get(campo).hasError('required')) {
      return `${tex1}`;
    }

    return this.contactoForm.get(campo).hasError('email') ? `${text2}` : '';
  }

  prueba() {
    this.url = this.contactFormService.URL
    console.log(this.url)
  }


}
