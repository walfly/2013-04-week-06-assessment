var returnArguments = function(){ return arguments; };

describe("_.each", function() {
  it("should provide value and iteration count (click to view test)", function() {
    _.each([1, 2, 3], function(num, i) {
      expect(num).to.equal(i + 1);
    });
  });

  it("should iterate over objects, ignoring the object prototype (click to view test)", function() {
    var answers = [];
    var obj = {one : 1, two : 2, three : 3};
    obj.constructor.prototype.four = 4;
    _.each(obj, function(value, key){ answers.push(key); });
    expect(answers.join(", ")).to.equal('one, two, three');
  });


  it("should be able to reference the original collection from inside the iterator (click to view test)", function() {
    var answer = null;
    _.each([1, 2, 3], function(num, index, arr){ if (arr.indexOf(num)>0) answer = true; });
    expect(answer).to.be(true);
  });

  it("should handle a null value gracefully (click to view test)", function() {
    var answers = 0;
    _.each(null, function(){ ++answers; });
    expect(answers).to.equal(0);
  });
});

describe("_.filter", function() {
  it("should return each even number in an array (click to view test)", function() {
    var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
    expect(evens.join(', ')).to.equal('2, 4, 6');
  });

  it("should return each odd number in an array (click to view test)", function() {
    var odds = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 !== 0; });
    expect(odds.join(', ')).to.equal('1, 3, 5');
  });
});
