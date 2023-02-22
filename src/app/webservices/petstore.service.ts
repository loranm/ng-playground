import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pet } from '@models/pet/pet';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PetstoreService {
  readonly #http = inject(HttpClient);

  private get availablePetsPath() {
    return `${environment.api.petStoreApi}/pet/findByStatus?status=available`;
  }

  private get petDetailsPath() {
    return `${environment.api.petStoreApi}/pet`;
  }

  readonly petsAvailable$ = () => this.#http.get<Pet[]>(this.availablePetsPath);

  readonly getPetDetails$ = (id: string) => this.#http.get<Pet>(`${this.petDetailsPath}/${id}`);
}
