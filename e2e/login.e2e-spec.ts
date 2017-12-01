import { browser, by, element } from 'protractor';

describe('angular-issue-tracker App', () => {
  beforeEach(() => {
    browser.get('/login');
  });

  it('should display Login', () => {
    expect(element(by.css('h2')).getText()).toEqual('Login');
  });

  it('should fail writing wrong credentails', () => {
    element(by.css('[name=username]')).sendKeys('q');
    element(by.css('[name=password]')).sendKeys('q');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('form')).getText()).toContain('Login failed!');
  });

  it('should go redirect to the right page after writing wrong credentails', () => {
    browser.get('/issues');
    expect(element(by.css('h2')).getText()).toEqual('Login');

    element(by.css('[name=username]')).sendKeys('admin');
    element(by.css('[name=password]')).sendKeys('a');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('h1')).getText()).toEqual('My issues');
  });
});
