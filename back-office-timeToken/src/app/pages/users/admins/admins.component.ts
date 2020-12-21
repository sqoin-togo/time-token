import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";
import { checkAndUpdatePureExpressionInline } from '@angular/core/src/view/pure_expression';
import { User } from '../user.model';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit{
pageActuel: number =1;
admins:User[]=[];
dataTable: any;
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
isAvailable = false;
ref:number;
role:string="";
firstname:"";
lastname:"";
email:"";
adresse:"";
err:number;
roles:any[];
filter: ""="";
map:Map<string,any[]>=new Map();
  constructor(private router: Router,
              private userService:UserService,
              private loginServer:LoginService) {
    //this.role=this.loginServer.currentUserValue.user.role;
    //this.ref=this.loginServer.currentUserValue.user.ref;


  }

  

  ngOnInit() {

      this.isAvailable = false;
      this.getAllAdmins(this.filter);
 }

 searchAdmins(filter){

    this.userService.getAllAdmins(filter).subscribe(
      data=>{
        this.admins=data;
        data.forEach((user:any) => {
          this.map.set(user.id,user.role)
        });
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      })
}

  getAllAdmins(input){
    //alert("ok")
  this.userService.getAllAdmins(input).subscribe(
    data=>{
      this.admins=data;
      data.forEach((user:any) => {
        this.map.set(user.id,user.role)
      });
      this.dtTrigger.next();
    },err=>{
      console.log(err);
    })
  }


  create():void{
    this.router.navigate(['/pages/user/create']);
  } 

  deleteUser(user:User):void {
    if(confirm("êtes-vous sûr de vouloir supprimer le membre "+user.firstname+" "+user.lastname+" ?")) {
    this.userService.deleteUser(user.id).subscribe(
      data=>{
        if(data==="success"){
          this.err=4;
            //alert("Suppression avec succès");
        }else{
          //alert("Vous ne pouvez pas supprimer ce commercial");
            this.err=5;
        }
        this.router.navigate(['pages/users'])
        this.userService.getAllAdmins(this.filter).subscribe(
          data=>{
            this.admins=data;
          },err=>{
            console.log(err);
            this.router.navigate(['pages/users'])
          }
        )

        this.router.navigate(['pages/users'])

        
      },err =>{
        console.log(err);
      }
    )}
  };
  
  
    

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  enableUser(email:any,userId:any){
    //this.notify("success","Please wait few seconds");
   this.userService.enableUser(email).subscribe(
    data=>{
      console.log("data "+data);
      this.updateUser(userId);
    },err=>{
      console.log("error** "+JSON.stringify(err));
    })
  }


  updateUser(userId:any){
    this.userService.setUserEnabled(userId).subscribe(
     data=>{
       console.log("data "+data);
       window.location.reload();
      // this.notify("success","User is enabled successfully");
     },err=>{
       console.log(err);
     })
   }
   
   
}

