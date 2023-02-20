import { ComponentFixture, TestBed,  } from '@angular/core/testing';
import { MockedComponentFixture, MockBuilder, MockRender } from 'ng-mocks';

import { PetstoreComponent } from './petstore.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('PetstoreComponent', () => {
  let component: PetstoreComponent;
  let fixture: MockedComponentFixture<PetstoreComponent>;

  beforeEach(() => MockBuilder(PetstoreComponent).replace(RouterModule, RouterTestingModule));

  beforeEach(async () => {
    fixture = MockRender(PetstoreComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
