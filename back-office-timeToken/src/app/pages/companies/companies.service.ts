import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL, baseUrlKey, TEST_ID } from '../../app.constant';
import { Company } from './company.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CompaniesService {
  private userUrl: string = API_URL + 'user';
  private adminUrl: string = API_URL + 'admin';
  private companyUrl: string = API_URL + 'company';
  private baseUrlKey: string = baseUrlKey;
  private oauthUrl: string = "/";

  constructor(private http: HttpClient) {
  }

  getAllCompanies(search): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl + '/getAllCompanies?search='+search);
  };
  //user/getUserIdByEmail?email=taw456@gmail.com

  getuserIdByEmail(email: string): any {
    //console.log("service " + email)//taw456@gmail.com
    return this.http.get<any>(this.userUrl + '/getUserIdByEmail?email=' + email);
  }

  getPublicAddressByUserId(id: number): any {
    //console.log(" service id " + id) // 856
    return this.http.get<any>(this.baseUrlKey + '/api/getPublicAddressByUserId?coin=SAGE&userId=' + id);
  }

  getCompanyById(id: number): any {
    console.log("id+++++" + id)
    return this.http.get<any>(this.companyUrl + '/getCompanyById?id=' + id);
  }

  addCompany(company: Object): Observable<Object> {
    return this.http.post(this.companyUrl + `/createCompany`, JSON.stringify(company), { responseType: 'text' });
  }

  deleteCompany(id: number): Observable<Object> {
    return this.http.post(this.companyUrl + '/deleteCompany?id=' + id, { responseType: 'text' });
  }


  updateCompany(id: number, company: Object): Observable<Object> {
    return this.http.post(this.companyUrl + '/updateCompany?id=' + id, company, { responseType: 'text' });
  }
  _PrivateKey(pravitekey: Object): Observable<Object> {

    return this.http.post(this.baseUrlKey + 'api/generatePrivateKey', pravitekey, { responseType: 'text' });
  }



}