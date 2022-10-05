import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioUsuario: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.email, Validators.required]),
      contrasena: new FormControl('', [Validators.minLength(5), Validators.required]),
      admin: new FormControl(false, []),

    });
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    console.log(this.formularioUsuario);

  }

}
