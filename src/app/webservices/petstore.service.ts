import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PetstoreService {
  readonly #http = inject(HttpClient);

  get availablePetsPath() {
    return `${environment.api.petStoreApi}/pet/findByStatus?status=available`;
  }

  readonly petsAvailable$ = this.#http.get<unknown>(this.availablePetsPath);
}
