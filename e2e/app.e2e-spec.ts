import { ChatAppFirebasePage } from './app.po';

describe('chat-app-firebase App', () => {
  let page: ChatAppFirebasePage;

  beforeEach(() => {
    page = new ChatAppFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
