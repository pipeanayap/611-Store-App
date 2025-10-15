import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail.component',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
  standalone : false
})
export class OrderDetailComponent implements OnInit {

  id? : string | null

  constructor(
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {

      this.id = this.route.snapshot.paramMap.get("id");
      console.log(this.id)
  }
}
