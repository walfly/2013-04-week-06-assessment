describe('recursiveNumPrinter', function() {
  it("should print a string of numbers from a nested array(click to view test)", function() {
    var deeplyNestedArray = [1,2,33,[99,22,[88,[100],22,334],9000],3,9001,[315,68,88,[290],11],57];
    var expectedString = '1,2,33,99,22,88,100,22,334,9000,3,9001,315,68,88,290,11,57';
    expect(recursiveNumPrinter(deeplyNestedArray)).to.equal(expectedString);
  });
});
