import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-card',
  templateUrl: './load-card.component.html',
  styleUrls: ['./load-card.component.scss'],
})
export class LoadCardComponent implements OnInit {
  @Input() loan: any;

  constructor() {}

  ngOnInit(): void {}
}
