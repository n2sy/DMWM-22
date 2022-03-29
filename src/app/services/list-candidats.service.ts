import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'Nidhal', 'jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Homer', 'simpson', 58, 'Plombier', 'homer.jpg'),
    new Candidat(3, 'Bart', 'Simpson', 38, 'Eleve'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.tabCandidats;
  }

  addCandidat(newC) {
    this.tabCandidats.push(newC);
  }

  getCandidatById(_id) {
    return this.tabCandidats.find((c) => c.id == _id);
  }
}
