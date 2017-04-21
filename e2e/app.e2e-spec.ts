import { TP3ArchitecturePage } from './app.po';

describe('tp3-architecture App', () => {
  let page: TP3ArchitecturePage;

  beforeEach(() => {
    page = new TP3ArchitecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
