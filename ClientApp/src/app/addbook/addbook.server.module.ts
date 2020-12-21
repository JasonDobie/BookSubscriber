import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AddbookComponent } from './addbook.component';
import { AddbookModule } from './addbook.module';

@NgModule({
  imports: [AddbookModule, ServerModule, ModuleMapLoaderModule],
  bootstrap: [AddbookComponent]
})
export class AppServerModule { }
