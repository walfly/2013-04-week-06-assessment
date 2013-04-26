var makePhone = function(phoneNumber){
  var result = {};
  result.phoneNumber = phoneNumber;
  result.send = function(recipientPhoneNumber, message){
    console.log('sending the message "'+ message +'" to ' + recipientPhoneNumber);
  }
  return result;
};

var makeSmartPhone = function(phoneNumber, phoneEmail){
  var result = makePhone(phoneNumber);
  result.phoneEmail = phoneEmail;
  var oldSend = result.send;
  result.send = function(recipientPhoneNumberOrEmail, message){
    if(typeof recipientPhoneNumberOrEmail === 'number'){
      var recipientPhoneNumber = recipientPhoneNumberOrEmail;
      oldSend(recipientPhoneNumber, message);
    } else {
      var recipientEmail = recipientPhoneNumberOrEmail;
      console.log('sending the message "'+ message +'" to ' + recipientEmail);
    }
  }
  return result;
};
