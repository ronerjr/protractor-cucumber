import { browser, by, element, ExpectedConditions } from 'protractor';


export class FormPage {
  baseUrl = browser.baseUrl;
  headerText = element(by.css('h1'));
  saveButton = element(by.buttonText('Save'));
  cancelButton = element(by.buttonText('Cancel'));
  teamSelect = element(by.name('team'));
  activity = element(by.name('activity'));
  startDate = element(by.name('startDate'));
  endDate = element(by.name('endDate'));
  statusSelect = element(by.name('status'));

  navigateTo() {
    browser.get('/form');
    browser.wait(this.getHeaderText(), 5000);
  }

  getHeaderText() {
    return this.headerText.getText();
  }

  setTeam(content) {
    this.teamSelect.sendKeys(content);
  }

  setActivity(content) {
    this.activity.sendKeys(content);
  }

  setStartDate(content) {
    this.startDate.sendKeys(content);
  }

  setEndDate(content) {
    this.endDate.sendKeys(content);
  }

  setStatus(content) {
    this.statusSelect.sendKeys(content);
  }

  clickOnSave() {
    this.saveButton.click();
  }

  clickOnCancel() {
    this.cancelButton.click();
  }

  nextPage() {
    return browser.getCurrentUrl();
  }
}
