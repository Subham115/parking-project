import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class MemberService{

    private member: {
        Fname: string, 
        Lname: string,
        Email: string
     }

    constructor(private http: Http) {}
    
    addMember(fname:string, lname: string, email: string) {

        this.member.Fname = fname;
        this.member.Lname = lname;  
        this.member.Email = email;

        return this.http.post('http://111.93.82.91:3000',this.member);
    }

    getMember() {

        return this.member;
    }

       

     
}