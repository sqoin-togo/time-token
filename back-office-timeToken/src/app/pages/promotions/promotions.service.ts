import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Promotion } from "./promotion.model"
import { API_URL } from '../../app.constant';
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })

export class PromotionsService {
  private userUrl: string = API_URL+'user';
  private adminUrl: string= API_URL+'admin';
  private companyUrl:string=API_URL+'company';
  private promotionUrl:string=API_URL+'promotion';
  private oauthUrl: string = "/";
  constructor(private http: HttpClient){}

 

   getAllPromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(this.promotionUrl+'/getAllPromotions')
   }

   getPromotionsDetails(search):Observable<Object>{
     return this.http.get<Object>(this.promotionUrl+'/getPromotionsDetails?search='+search)
   }

   getPromotionsByCompanyId(companyId:number):Observable<any>{
      return this.http.get<any>(this.promotionUrl+'/getPromotionsByCompanyId?id='+companyId)
  }

   getPromotionById(promotionId:number):any{
    return this.http.get<any>(this.promotionUrl+'/getPromotionById?id='+promotionId);
  }

  getPromotionDetailsById(promotionId:number):any{
    return this.http.get<any>(this.promotionUrl+'/getPromotionDetailsById?id='+promotionId);
  }

   createPromotion(promotion:object):Observable<Object>{
    return this.http.post(this.promotionUrl+'/createPromotion',JSON.stringify(promotion), {responseType: 'text'});
  }

  deletePromotion(id: number): Observable<Object> {
    return this.http.post(this.promotionUrl + '/deletePromotion?id='+id, {responseType: 'text'});
  }
  
  updatePromotion(id: number, promotion: Object): Observable<any> {
    return this.http.post(this.promotionUrl+'/updatePromotion?id='+id, promotion, {responseType: 'text'});
  }

   verifyPromotion(id:number):Observable<any> {
    return this.http.post(this.promotionUrl+'/verifyPromotion?id='+id,{responseType: 'text'});
  }
 
}