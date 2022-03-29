import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServeursService {
  tabServeurs = [
    {
      id: 1,
      nom: 'Serveur de production',
      status: 'offline',
    },
    {
      id: 2,
      nom: 'Serveur de Seddik',
      status: 'online',
    },
    {
      id: 3,
      nom: 'Serveur de Test',
      status: 'offline',
    },
  ];

  getServeurById(id) {
    return this.tabServeurs.find((s) => s.id == id);
  }

  constructor() {}
}
