import { map, timer } from 'rxjs';

import { Injectable } from '@angular/core';

import { ONBOARDING } from './mocked-onboarding';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  onboarding$ = timer(2000).pipe(map(() => ONBOARDING));
}
