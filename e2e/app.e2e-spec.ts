import { CheckinPage } from './app.po';

describe('checkin App', () => {
  let page: CheckinPage;

  beforeEach(() => {
    page = new CheckinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
