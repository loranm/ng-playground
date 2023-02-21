import { CapitalizeDirective } from './pet-name.directive';

describe('PetNameDirective', () => {
  it('should create an instance', () => {
    const directive = new CapitalizeDirective();
    expect(directive).toBeTruthy();
  });
});
