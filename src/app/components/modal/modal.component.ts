import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  @Input() isVisible: boolean = false;
  @Input() currentLoan: any = {};
  @Output() requestCloseModal = new EventEmitter<boolean>();
  @Output() requestInvest = new EventEmitter();

  close() {
    this.requestCloseModal.emit(false);
  }

  invest(value: any) {
    if (isNaN(value) || value <= 0) {
      alert(`Tester detected :D`);
      return;
    }
    if (value > +this.currentLoan.available.split(',').join('')) {
      alert(
        `You can't specify amount more than ${this.currentLoan.available} `
      );
      return;
    }

    this.requestInvest.emit({ loan: this.currentLoan, value: value });
  }

  ngOnInit(): void {}
}
