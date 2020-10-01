import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../app/atributos';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Array<Usuario> = [];

  usuarioForm = new FormGroup({
    email: new FormControl(''), 
    senha: new FormControl('')
  })


incluirUsuario(){
  let pessoa: Usuario = new Usuario(); 
  //Console Log para mostrar no terminar do Google o Email e senha que está sendo digitado. 
  console.log(this.usuarioForm.value['email']); 
  console.log(this.usuarioForm.value['senha']); 
  pessoa.email = this.usuarioForm.value['email'];
  pessoa.senha = this.usuarioForm.value['senha'];  
  this.usuario.push(pessoa); 
  
}


  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    //this.router.navigate(['']); 

  }

}
