import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-yeet',
  templateUrl: './product-yeet.component.html',
  styleUrls: ['./product-yeet.component.css']
})
export class ProductYeetComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
  }

}