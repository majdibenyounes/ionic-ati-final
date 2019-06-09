import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private header;
  constructor(private http: HttpClient) {
  }

  // getAnnonceById( id: string ){
  //     return this.annonces.find(
  //     annonce => annonce.id === id
  //     );
  // }

  public findAll5(): Observable<any> {
    this.header = new HttpHeaders({'Accept': 'application/json'});
    return this.http.get('http://127.0.0.1:8000/api/actualites', {headers: this.header });
  }
  public findone(id): Observable<any> {
    this.header = new HttpHeaders({'Accept': 'application/json'});
    return this.http.get('http://127.0.0.1:8000/api/actualites/' + id, {headers: this.header });
  }
  public register(user): Observable<any> {
    this.header = new HttpHeaders({'Accept': 'application/json'});
    return this.http.post('http://127.0.0.1:8000/register', user, {headers: this.header });
  }
  public login(user): Observable<any> {
    this.header = new HttpHeaders({'Accept': 'application/json'});
    return this.http.post('http://127.0.0.1:8000/login_check', user, {headers: this.header });
  }
  public getUser() {
    this.header = new HttpHeaders({'Accept': 'application/json', 'Authorization' : localStorage.getItem('token')});
    console.log(localStorage.getItem('token'));
    return this.http.get('http://127.0.0.1:8000/api/user', {headers: this.header });
  }
}
