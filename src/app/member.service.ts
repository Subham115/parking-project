import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class MemberService{

    private member: {
        fname: string, 
        lname: string,
        email: string
     }

    constructor(private http: Http) {}
    
    setMember(fname:string, lname: string, email: string) {

        this.member.fname = fname;
        this.member.lname = lname;  
        this.member.email = email;

        //this.http.post()
    }

    getMember() {

        return this.member;
    }

       

     
}