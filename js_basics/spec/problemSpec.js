describe('#sumOfOddIntegers', function() {
  it('returns the sum of every odd integer between the input and zero', function () {
    expect(sumOfOddIntegers(1)).to.equal(1);
    expect(sumOfOddIntegers(5)).to.equal(9);
    expect(sumOfOddIntegers(10)).to.equal(25);
    expect(sumOfOddIntegers(101)).to.equal(2601);
  });
});

describe('#isLeapYear', function() {
  it('returns true if input is leap year', function() {
    expect(isLeapYear(2012)).to.equal(true);
    expect(isLeapYear(2032)).to.equal(true);
    expect(isLeapYear(2040)).to.equal(true);
  });
  it('returns false if input is not leap year', function() {
    expect(isLeapYear(2013)).to.equal(false);
    expect(isLeapYear(2069)).to.equal(false);
    expect(isLeapYear(2045)).to.equal(false);
  });
});
