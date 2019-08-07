import { getGreeting } from '../support/app.po';

describe('hotpoints', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to hotpoints!');
  });
});
