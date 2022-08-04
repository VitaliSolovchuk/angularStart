import { Component, OnInit } from '@angular/core';
import { IProduct } from "./models/product";

// import { products as data } from './data/products'
import { ProductsService } from "./services/products.service";
import { Observable, tap } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angularStart'
    isLoading: boolean = false

    products$: Observable<IProduct[]>

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.isLoading = true
        this.products$ = this.productsService.getAll().pipe(
            tap(() => this.isLoading = false)
        )
        // this.productsService.getAll().subscribe((products) => {
        //     this.products = products
        //     console.log(products)
        //     this.isLoading = false
        // })
    }
}
