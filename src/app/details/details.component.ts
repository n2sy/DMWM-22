import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() candidatSelected: Candidat;
  constructor(private recServ: ListRecruesService, private router: Router) {}

  ngOnInit(): void {}

  ajouterRecrue() {
    this.recServ.addNewRecrue(this.candidatSelected);
  }

  goToInfos() {
    this.router.navigate(['cv', this.candidatSelected.id]);
  }
}
