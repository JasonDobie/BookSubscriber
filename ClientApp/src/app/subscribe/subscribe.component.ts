import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from './service.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddbookComponent } from './../addbook/addbook.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html'
})
  @NgModule({
    imports: [FormsModule, ReactiveFormsModule]
})

export class SubscribeComponent implements OnInit {
  public subscriptions: Subscription[];
  public books: Book[];

  constructor(private ServiceService: ServiceService) { }
  data: any;
  SubscriptionForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  ngOnInit(): void {
    this.getbooks();
    this.getsubscriptions();
  }

  getbooks() {
    this.ServiceService.getBooks().subscribe((data: any[]) => {
      this.books = data;
    })
  }

  getsubscriptions() {
    this.ServiceService.getSubscriptions().subscribe((data: any[]) => {
      this.subscriptions = data;
    })
  }

  subscribe(id) {
    this.ServiceService.subscribe(id).subscribe((data: any[]) => {
      this.data = data;
      this.getsubscriptions();
      this.getbooks();
    })
  }

  unsubscribe(id) {
    this.ServiceService.unsubscribe(id).subscribe((data: any[]) => {
      this.data = data;
      this.getsubscriptions();
      this.getbooks();
    })
  }
}

interface Subscription {
  userId: number,
  bookId: number,
  subscriptionDate: string 
}

interface Book {
  bookId: number,
  name: string,
  text: string,
  purchasePrice: string
}
