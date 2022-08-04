import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "../../models/product";
import { ProductsService } from "../../services/products.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export class ProductComponent{
    @Input() product: IProduct

    details: boolean = false

}
