describe('Angular simple test', () => {
  let expected = '';
  let notExpected = '';

  beforeEach(() => {
    expected = 'helloTest';
    notExpected = 'HelloBatman';
  });

  afterEach(() => {
    expected = '';
    notExpected = '';
  });

  it('check hellotest is hellotest', () => {
    expect('helloTest').toBe(expected);
  });
  it('check hellotest is not hellotest', () => {
    expect('helloTest').not.toBe(notExpected);
  });
});
