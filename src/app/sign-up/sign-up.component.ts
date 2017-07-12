import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MemberService } from '../member.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('f') signUpForm;
  
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.signUpForm.form.controls.firstName.value);

    this.memberService.addMember(this.signUpForm.form.controls.firstName.value,
      this.signUpForm.form.controls.firstName.value,
      this.signUpForm.form.controls.firstName.value).subscribe(

        (response) => console.log("Successfull"+response),
        (error) => console.log("Failure"+error)
      );
  }

}
