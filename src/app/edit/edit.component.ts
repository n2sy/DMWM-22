import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.candidatUpdated = response;
          },
        });
      },
    });
  }

  editCandidat() {
    this.candSer.updateCandidatAPI(this.candidatUpdated).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Erreur avec updateCandidat');
      },
    });
  }
}
