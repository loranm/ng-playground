import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, map, startWith, tap } from 'rxjs';
import { CreateProfileComponent } from 'src/app/domains/onboarding/create-profile/create-profile.component';
import { PreferencesComponent } from 'src/app/domains/onboarding/preferences/preferences.component';
import { RoutesEnum } from 'src/routes.enum';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CardComponent } from '@commons/card/card.component';
import { OnboardingService } from '@webservices/onboarding.service';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CreateProfileComponent,
    PreferencesComponent,
  ],
  providers: [OnboardingService],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-card>
        <ng-container *ngIf="vm.showCreateProfile; then createProfile; else addPreferences"> </ng-container>
        <ng-template #createProfile>
          <h2 id="title">{{ vm.step.title }}</h2>

          <app-create-profile></app-create-profile>
        </ng-template>

        <ng-template #addPreferences>
          <h2>{{ vm.step.title }}</h2>

          <app-preferences></app-preferences>
        </ng-template>

        <footer>
          <button mat-mini-fab color="accent">
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button (click)="next()" mat-mini-fab color="primary">
            <mat-icon>chevron_right</mat-icon>
          </button>
        </footer>
      </app-card>

      <ng-template #congrats>
        <mat-dialog-content>Bravo ! votre profil a ete créé&nbsp;</mat-dialog-content>
        <mat-dialog-actions align="end">
          <button [mat-dialog-close]="true" mat-button color="primary" cdkFocusInitial>Commencer</button>
        </mat-dialog-actions>
      </ng-template>
    </ng-container>
  `,
  styles: [
    `
      :host {
        --gap: 1.5rem;
        background-color: rgb(0 0 0 / 10%);
        min-height: 100vh;
        display: grid;
        place-items: center;
        gap: var(--gap);
        outline: 2px solid;

        ul {
          display: grid;
          gap: var(--gap);

          li {
            background-color: rgb(0 0 0 / 10%);
          }
        }

        footer {
          display: flex;
          justify-content: center;
          gap: var(--gap);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingComponent implements OnDestroy {
  @ViewChild('congrats') congratsDialog!: TemplateRef<any>;
  readonly #matDialog = inject(MatDialog);
  readonly #router = inject(Router);

  readonly #onboarding$ = inject(OnboardingService).onboarding$.pipe(distinctUntilChanged());
  readonly currentStepIndexSubject$ = new BehaviorSubject(0);

  readonly #initialStepIndex$ = this.#onboarding$.pipe(
    tap((onboarding: { initialStep: number | null }): void => {
      if (onboarding.initialStep === null) {
        return;
      }
      this.currentStepIndexSubject$.next(onboarding.initialStep + 1);
    })
  );

  readonly #onboardingIsDone$ = combineLatest([this.#onboarding$, this.currentStepIndexSubject$]).pipe(
    filter(([{ steps, isDone }, step]) => steps.length === step || isDone),
    tap(() => {
      this.#matDialog
        .open(this.congratsDialog, { width: '250px' })
        .afterClosed()
        .subscribe({
          next: () => this.#router.navigate(['/', RoutesEnum.HOME]),
        });
    })
  );

  readonly vm$ = combineLatest([
    this.#onboarding$,
    this.currentStepIndexSubject$,
    this.#initialStepIndex$,
    this.#onboardingIsDone$.pipe(startWith(null)),
  ]).pipe(
    map(([onboarding, currentStep]) => ({
      step: onboarding.steps[currentStep],
      showCreateProfile: onboarding.initialStep === null,
    }))
  );

  next() {
    this.currentStepIndexSubject$.next(this.currentStepIndexSubject$.value + 1);
  }

  ngOnDestroy(): void {
    this.currentStepIndexSubject$.complete();
  }
}
