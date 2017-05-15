import { AngularCLIBreezeJSPage } from './app.po';

describe('angular-cli-breeze-js App', () => {
  let page: AngularCLIBreezeJSPage;

  beforeEach(() => {
    page = new AngularCLIBreezeJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
