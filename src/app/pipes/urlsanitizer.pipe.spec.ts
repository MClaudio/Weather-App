import { UrlsanitizerPipe } from './urlsanitizer.pipe';

describe('UrlsanitizerPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlsanitizerPipe();
    expect(pipe).toBeTruthy();
  });
});
