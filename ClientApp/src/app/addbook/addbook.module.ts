import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddbookComponent } from './addbook.component';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddbookComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AddbookComponent],
  exports: [
    ReactiveFormsModule
  ]
})
export class AddbookModule { }
