import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:User=new User;
  public valido: boolean = false;
  public password_1="";
  public password_2="";
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  public formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      Swal.fire('El nombre de usuario es requerido');
      return;
    }
    if(this.valido){
      Swal.fire('Las contraseñas no coinciden');
      return;
    }
    this.user.password=this.password_1;
    this.userService.registrarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario Registrado con exito');
      },(error) => {
        console.log(error);
        Swal.fire(`Ha ocurrido un error (${error})`)
      }
    )
  }

  public compararPasswords(event:any): void{
    if(this.password_1 != this.password_2){
      this.valido=true;
      console.log(this.password_1+"--"+this.password_2+"--"+this.valido);
    }else{
      this.valido=false;
      console.log(this.password_1+"--"+this.password_2+"--"+this.valido);
    }
  }
}
