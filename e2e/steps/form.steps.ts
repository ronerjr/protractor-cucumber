// import { setWorldConstructor } from 'Cucumber';
import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { FormPage } from '../pages/form.po';
import { browser } from '../../node_modules/protractor';

const page = new FormPage();

Given('I am on the form', () => page.navigateTo());

When('I set my team {string}', (team) => {
  page.setTeam(team);
});

When('I set my activity {string}', (activity) => {
  page.setActivity(activity);
});

When('I set my start date {string}', (startDate) => {
  page.setStartDate(startDate);
});

When('I set my end date {string}', (endDate) => {
  page.setStartDate(endDate);
});

When('I set my status {word}', (status) => {
  page.setStatus(status);
});

When('I click on save button', () => {
  page.clickOnSave();
});

Then('I\'m redirected to result page', () => {
  page.nextPage().then(url => {
    expect(url).to.equal(browser.baseUrl + '/result');
  });
});
