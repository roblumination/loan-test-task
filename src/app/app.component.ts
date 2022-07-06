import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loan-list';

  currentAmmount: any;
  isModalVisible = false;
  currentLoan = {};

  loans = [
    {
      id: '1',
      title: 'Voluptate et sed tempora qui quisquam.',
      tranche: 'A',
      available: '11,959',
      annualised_return: '8.60',
      term_remaining: '864000',
      ltv: '48.80',
      amount: '85,754',
      isInvested: false,
    },
    {
      id: '5',
      title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
      tranche: 'B',
      available: '31,405',
      annualised_return: '7.10',
      term_remaining: '1620000',
      ltv: '48.80',
      amount: '85,754',
      isInvested: false,
    },
    {
      id: '12',
      title:
        'Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.',
      tranche: 'C',
      available: '12,359',
      annualised_return: '4.80',
      term_remaining: '879000',
      ltv: '48.80',
      amount: '85,754',
      isInvested: false,
    },
  ];

  constructor() {
    this.updateTotalAmmount();
  }

  updateTotalAmmount() {
    let result = 0;
    this.loans.forEach((loan) => {
      result += +loan.available.split(',').join('');
    });

    this.currentAmmount = this.separateNumberWithCommas(result);
  }

  invest(param: any) {
    const { loan, value } = param;
    const loanToChange = this.loans.filter((lo) => lo.id == loan.id)[0];
    let aval = +loan.available.split(',').join('') - value;
    loanToChange.available = this.separateNumberWithCommas(aval);
    if (!loanToChange.isInvested) loanToChange.isInvested = true;

    this.closeModal();
    this.updateTotalAmmount();
  }

  showModal(loan: any) {
    this.currentLoan = loan;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  separateNumberWithCommas(num: any) {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
