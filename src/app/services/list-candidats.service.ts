import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private tabCandidats: Candidat[] = [
    // new Candidat(1, 'Nidhal', 'jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    // new Candidat(2, 'Homer', 'simpson', 58, 'Plombier', 'homer.jpg'),
    // new Candidat(3, 'Bart', 'Simpson', 38, 'Eleve'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.tabCandidats;
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  addCandidat(newC) {
    newC.id = this.tabCandidats[this.tabCandidats.length - 1].id + 1;
    this.tabCandidats.push(newC);
  }

  addCandidatAPI(newC) {
    // V1 avec HttpParams
    // let token = localStorage.getItem('my_token');
    // if (token) {
    //   let p = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, newC, { params: p });
    // }
    // return this.http.post(this.link, newC);

    // V2 avec HttpHeades
    // let token = localStorage.getItem('my_token');
    // if (token) {
    //   let headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    //   return this.http.post(this.link, newC, { headers });
    // }
    return this.http.post(this.link, newC);
  }

  getCandidatById(_id) {
    return this.tabCandidats.find((c) => c.id == _id);
  }

  getCandidatByIdAPI(_id) {
    return this.http.get(`${this.link}/${_id}`);
  }

  deleteCandidat(Cand) {
    let i = this.tabCandidats.indexOf(Cand);
    this.tabCandidats.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updateCandidat(Cand) {
    let i = this.tabCandidats.indexOf(Cand);
    this.tabCandidats[i] = Cand;
  }

  updateCandidatAPI(Cand) {
    return this.http.put(`${this.link}/${Cand['_id']}`, Cand);
  }
}
