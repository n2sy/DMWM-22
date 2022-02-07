import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeaccount',
  templateUrl: './homeaccount.component.html',
  styleUrls: ['./homeaccount.component.css'],
})
export class HomeaccountComponent implements OnInit {
  listAccounts = [
    {
      id: 1,
      name: 'Nidhal Account',
      status: 'active',
    },
    {
      id: 2,
      name: 'Chams Account',
      status: 'inactive',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  recupNewAccount(newAcc) {
    newAcc.id = this.listAccounts[this.listAccounts.length - 1].id + 1;
    this.listAccounts.push(newAcc);
  }
}
