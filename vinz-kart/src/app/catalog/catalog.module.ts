import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogService } from './catalog.service';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    HttpClientModule
  ],
  declarations: [ProductlistComponent, ProductComponent],
  providers: [CatalogService]
})
export class CatalogModule { }
