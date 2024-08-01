import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle]   

})
export class LoginComponent {
  
  loginForm!: FormGroup;
  token : any;
  
  constructor( private utilitiesService: UtilitiesService,
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {     
    this.loginForm = this.fb.group({
      user: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])		
    });

  }

  public login() {
    if (this.loginForm.controls['user'].value == '' || this.loginForm.controls['user'].value == null || this.loginForm.controls['password'].value == '' || this.loginForm.controls['password'].value == null){
      Swal.fire({
        title: `ERROR`,
        text: 'Debe ingresar su Usuario y Contraseña, dejo alguno en blanco',
        icon: 'error'
      });
    }else{
     var response = this.utilitiesService.loginSession(this.loginForm.controls['user'].value,this.loginForm.controls['password'].value);
        if(response.hasOwnProperty('error')){
        //ERROR CODE
          Swal.fire({
            title: `ERROR`,
            text: 'Inicio de sesion incorrecto, Revise su Usuario y Contraseña.',
            icon: 'error'
          });
        }else{
        //OK CODE
          this.loginForm.reset();
          this._router.navigate(['/dashboard']);             
        }      
   }
  }
}
