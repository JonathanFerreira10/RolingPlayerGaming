import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms'; 
import { Usuario } from '../../app/atributos';
import { using } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario: Usuario = new Usuario();

  // usuario: Usuario = {
  //   email: "",
  //   senha: "",
  // };





//   pessoasForm = new FormGroup({
//     email: new FormControl(''), 
//     senha: new FormControl('')
//   })


// incluirUsuario(){
//   let pessoa: Usuario = new Usuario(); 
//   console.log(this.pessoasForm.value['email']); 
//   pessoa.email = this.pessoasForm.value['email']; 
//   this.pessoas.push(pessoa); 
// }

fazerLogin(){

  this.authService.fazerLogin(this.usuario);

  console.log(this.usuario);  
  

}
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

}
