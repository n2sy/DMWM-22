import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private candSer: ListCandidatsService, private router: Router) {}

  ngOnInit(): void {}
  addNewCandidat(newP) {
    console.log(newP);
    this.candSer.addCandidatAPI(newP).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Erreur avec addCandidat');
      },
    });
  }
}
