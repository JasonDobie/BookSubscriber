import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  
})
export class AddbookComponent implements OnInit {

  constructor(private ServiceService: ServiceService) { }
  data: any;
  BookForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  ngOnInit(): void {
    this.BookForm = new FormGroup({
      bookId: new FormControl(null),
      name: new FormControl("", [Validators.required]),
      text: new FormControl("", [Validators.required]),
      purchasePrice: new FormControl("", [Validators.required])
    })
  }

  resetFrom() {
    this.BookForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }

  Save() {
    this.submitted = true;

    if (this.BookForm.invalid) {
      return;
    }

    this.ServiceService.addBook(this.BookForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();
    })
  }
}
