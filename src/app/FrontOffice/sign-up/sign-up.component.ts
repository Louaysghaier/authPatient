import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleName } from 'src/app/Models/Role';
import { User } from 'src/app/Models/user';
import { AccountService } from 'src/app/Service/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  test : Date = new Date();
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  agreePrivacy: boolean = false;
  
  signupError: string = '';
  
  
  constructor(private authService: AccountService, private router: Router) { }
  ngOnInit() {
    this.user = {
      name: '',
      username: '',
      email: '',
      password: '',
      address: '',
      Role: '',
      number:0,
    };
  }
  user: User= {
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    //Role: '',
    number:0,
  };
  onSubmit(signupForm: NgForm) {
      if (signupForm.valid && this.agreePrivacy) {
        const user :User = {
          name: this.user.name,
          username: this.user.username, 
          email: this.user.email,
          password: this.user.password,
          address: this.user.address, 
          number: this.user.number,
        };
        //const roleName = this.user.Role ; 
        
        this.authService.register(user, "ROLE_MEDECIN").subscribe(
          
          (response) => {
            localStorage.setItem('email', this.user.email!);

            console.log('User registered successfully!');
            Swal.fire({
              title: "Open Your mail?",
              text: "check your mail account for verification !",
              icon: "success"
            });
            //alert('check your mail account for verification !');
            // this.router.navigate(['/verification']); 

          },
          (error) => {
            console.error('Error during registration.', error);

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! ",
            });
            this.signupError = 'Error during registration. Please try again.';
           // window.location.reload();

          }
        );
      } else {
        console.log('Form is invalid or Privacy Policy not agreed.');
        //window.location.reload();
      }
    }
    
}
