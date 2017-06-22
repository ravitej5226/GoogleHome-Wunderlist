var Enumerable = require('linq');

function list() {
this.listId=307524936;
}

list.prototype.AddItemToList = function (item,callback) {
  var WunderlistSDK = require('wunderlist');
  var wunderlistAPI = new WunderlistSDK({
    'accessToken': 'da49c7638bb410ceeefbff7c771b5c0c86664a3949f308c8ed1cd8082945',
    'clientID': '71aea34e01ca73de4685'
  });

//143507542

// Check if item is already available
wunderlistAPI.http.tasks.forList(this.listId)
.done(function(tasks,statusCode){
  var isTaskPresent=Enumerable.from(tasks).where(function(x){return x.title==item}).count()>0;

if(isTaskPresent)
{
  callback('Item already present');
  return;
}
})
.fail(function(response,statusCode){

})
// If yes, push notification saying the same
// If no, add the item to the list
// Push the notification about the status of the operation

  wunderlistAPI.http.tasks.create({
    "list_id": 307524936,
    "title": item
  }).done(function (res) {
    callback('Success');
    return "success"
  }).fail(function (err) {
    return "Fail"
  })

}


module.exports = list;