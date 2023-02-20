import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PetstoreService {
  readonly #http = inject(HttpClient);
  readonly petStoreApi = 'https://petstore.swagger.io/v2/pet' as const;

  get availablePets() {
    return `${this.petStoreApi}/findByStatus?status=available`;
  }

  readonly petsAvailable$ = this.#http.get<unknown>(this.availablePets);
}
