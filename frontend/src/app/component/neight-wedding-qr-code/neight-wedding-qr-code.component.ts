import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'neight-wedding-qr-code',
  templateUrl: './neight-wedding-qr-code.component.html',
  styleUrls: ['./neight-wedding-qr-code.component.scss']
})
export class NeightWeddingQrCodeComponent implements OnInit {

  subscriptions: Subscription[] = [];
  name: string;
  path: String[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    console.warn("test init hehehe qr code");
    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        this.name = String(params['name']);
        const path = this.location.path();
        this.path = path.split('/');
        this.path.pop();
        this.path.push(this.name);
      }),
    );
  }

}
