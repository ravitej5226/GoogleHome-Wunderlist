function list() {

}

list.prototype.AddItemToList = function (item) {
  var WunderlistSDK = require('wunderlist');
  var wunderlistAPI = new WunderlistSDK({
    'accessToken': 'da49c7638bb410ceeefbff7c771b5c0c86664a3949f308c8ed1cd8082945',
    'clientID': '71aea34e01ca73de4685'
  });

  wunderlistAPI.http.tasks.create({
    "list_id": 143507542,
    "title": item
  }).done(function (res) {
    return "success"
  }).fail(function (err) {
    return "Fail"
  })

}


module.exports = list;