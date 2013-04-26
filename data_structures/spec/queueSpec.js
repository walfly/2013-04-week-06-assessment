describe("Queue", function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  describe("#add", function() {
    it("should exist", function() {
      expect(typeof queue.add).to.equal('function');
    });

    it("adds an element to the queue", function() {
      queue.add("Gobias Industries");
      expect(queue.length()).to.equal(1);
    });
  });

  describe("#remove", function() {
    it("should exist", function() {
      expect(typeof queue.remove).to.equal('function');
    });

    it("returns the first added value that has not already been removed", function() {
      queue.add("I just blue myself");
      queue.add("I've made a huge mistake");
      expect(queue.length()).to.equal(2);

      expect(queue.remove()).to.equal("I just blue myself");
      expect(queue.remove()).to.equal("I've made a huge mistake");
      expect(queue.length()).to.equal(0);
    });
  });

  describe("#length", function() {
    it("should exist", function() {
      expect(typeof queue.length).to.equal('function');
    });

    it("returns number of items in the queue", function() {
      queue.add("They're *illusions*, Michael!");
      queue.add("A trick is something a whore does for money.");
      expect(queue.length()).to.equal(2);

      queue.remove("they're *illusions*, michael!");
      expect(queue.length()).to.equal(1);
    });
  });
});
