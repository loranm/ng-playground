import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockedRouteComponent } from './mocked-route.component';

describe('MockedRouteComponent', () => {
  let component: MockedRouteComponent;
  let fixture: ComponentFixture<MockedRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MockedRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
