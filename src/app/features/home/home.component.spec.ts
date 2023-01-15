import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: MockedComponentFixture<HomeComponent>;

  beforeEach(() => MockBuilder(HomeComponent));

  beforeEach(async () => {
    fixture = MockRender(HomeComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
