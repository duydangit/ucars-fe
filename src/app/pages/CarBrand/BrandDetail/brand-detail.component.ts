import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-brand-detail',
    templateUrl: './brand-detail.component.html',
    styleUrls: ['./brand-detail.component.scss']
})

export class BrandDetailComponent implements OnInit {

    constructor(private http: HttpClient) {}

    ngOnInit(): void {}
 
}