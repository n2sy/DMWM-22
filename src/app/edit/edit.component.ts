import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  candidatUpdated;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.candidatUpdated = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  editCandidat() {
    console.log('xxxxxx');

    console.log(this.candidatUpdated);
  }
}
