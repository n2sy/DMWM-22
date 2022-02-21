import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent implements OnInit {
  tabRecrues: Candidat[] = [];
  constructor(private recSer: ListRecruesService) {}

  ngOnInit(): void {
    this.tabRecrues = this.recSer.tabRecrues;
  }
}
