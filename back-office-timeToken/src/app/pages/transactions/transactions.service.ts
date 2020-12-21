import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "./transaction.model"
import { API_URL } from '../../app.constant';
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })

export class TransactionsService {
  private userUrl: string = API_URL+'user';
  private adminUrl: string= API_URL+'admin';
  private companyUrl:string=API_URL+'company';
  private transactionUrl:string=API_URL+'transaction'
  private oauthUrl: string = "/";
  constructor(private http: HttpClient){}

 

   getAllTransactions():Observable<object[]>{
    return this.http.get<Object[]>(this.transactionUrl+'/getAllTransactions')
   }

   getTransactionsByType(type:string):Observable<Object>{
     return this.http.get<Object>(this.transactionUrl+'/getTransactionsByType?type='+type)
   }

  deleteTransaction(id: number): Observable<Object> {
    return this.http.post(this.transactionUrl + '/deleteTransaction?id='+id, {responseType: 'text'});
  }
 
}