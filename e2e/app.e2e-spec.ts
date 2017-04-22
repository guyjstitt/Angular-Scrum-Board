import { ScrumBoardPage } from './app.po';

describe('scrum-board App', () => {
  let page: ScrumBoardPage;

  beforeEach(() => {
    page = new ScrumBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
