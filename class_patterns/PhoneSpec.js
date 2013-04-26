describe('Phone', function() {
  var phone;

  beforeEach(function() {
    // Hey! You should edit this line to work for psuedo-classical.
    phone = makePhone(5553216788);
  });

  it('should store the passed-in phone number', function () {
    expect(phone.phoneNumber).toEqual(5553216788);
  });

  describe('#send', function () {
    it('should exist', function () {
      expect(typeof phone.send).toEqual('function');
    });
  });
});

describe('SmartPhone', function () {
  var smartPhone;

  beforeEach(function() {
    // Hey! You should edit this line to work for psuedo-classical.
    smartPhone = makeSmartPhone(5553216788, "bacon.is@del.ico.us");
  });

  it('should store the passed-in phone number', function () {
    expect(smartPhone.phoneNumber).toEqual(5553216788);
  });

  it('should store the passed-in email', function () {
    expect(smartPhone.phoneEmail).toEqual("bacon.is@del.ico.us");
  });

  describe('#send', function () {
    it('should exist', function () {
      expect(typeof smartPhone.send).toEqual('function');
    });
  });
});
