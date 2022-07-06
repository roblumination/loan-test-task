import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-card',
  templateUrl: './load-card.component.html',
  styleUrls: ['./load-card.component.scss'],
})
export class LoadCardComponent implements OnInit {
  @Input() loan: any;
  @Output() requestOpenModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  invest() {
    this.requestOpenModal.emit(this.loan);
  }
}
