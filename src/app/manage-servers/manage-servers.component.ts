import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent implements OnInit {
  listServers = [
    {
      name: 'Production Server',
      type: 'large',
      status: 'stable',
      date_d: new Date(2020, 6, 21),
    },
    {
      name: 'Development Server',
      type: 'medium',
      status: 'offline',
      date_d: new Date(2020, 8, 21),
    },
    {
      name: 'Test Development Server',
      type: 'small',
      status: 'stable',
      date_d: new Date(2021, 6, 21),
    },
    {
      name: 'Nidhal Server',
      type: 'large',
      status: 'critical',
      date_d: new Date(2020, 3, 1),
    },
  ];
  selectedStatus: string = '';
  constructor() {}

  ngOnInit(): void {}

  affecterClass(serv) {
    return {
      'list-group-item-success': serv.status == 'stable' ? true : false,
      'list-group-item-danger': serv.status == 'critical' ? true : false,
      'list-group-item-warning': serv.status == 'offline' ? true : false,
    };
  }

  addNewServer() {
    this.listServers.push({
      name: 'New Server',
      type: 'medium',
      status: 'stable',
      date_d: new Date(2020, 8, 21),
    });
  }
}
