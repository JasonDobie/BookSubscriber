import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBooks() {
    return this.http.get('/api/Subscription/getBooks'); 
  }

  getSubscriptions() {
    return this.http.get('/api/Subscription/getSubscriptions');
  }

  subscribe(id) {
    let params = new HttpParams().set("bookId", id)
    return this.http.get('/api/Subscription/subscribe', { params: params });
  }

  unsubscribe(id) {
    let params = new HttpParams().set("subscriptionId", id)
    return this.http.get('/api/Subscription/unsubscribe', { params: params });
  }

  deleteData(contactId) {
    return this.http.delete('/api/Subscription/' + contactId);
  }

}  
