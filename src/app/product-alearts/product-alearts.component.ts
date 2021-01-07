import { Component, OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alearts",
  templateUrl: "./product-alearts.component.html",
  styleUrls: ["./product-alearts.component.css"]
})
export class ProductAleartsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter;
  constructor() {}

  ngOnInit() {}
}
