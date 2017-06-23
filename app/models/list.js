var Enumerable = require('linq');
var WunderlistSDK = require('wunderlist');
var googlehome = require('google-home-notifier');

var wunderlistAPI;
var listId=143507542;

var deviceName = 'Google-Home-9cd89fed89119ebf8d3195745a5da8f2';
googlehome.device(deviceName);

function list() {


  wunderlistAPI = new WunderlistSDK({
    'accessToken': 'da49c7638bb410ceeefbff7c771b5c0c86664a3949f308c8ed1cd8082945',
    'clientID': '71aea34e01ca73de4685'
  });
}

list.prototype.AddItemToList = function (item,callback) {
 //307524936
//143507542

// Check if item is already available
wunderlistAPI.http.tasks.forList(listId)
.done(function(tasks,statusCode){
  var isTaskPresent=Enumerable.from(tasks).where(function(x){return x.title==item}).count()>0;

if(isTaskPresent)
{
  // If yes, push notification saying the same
  // TODO: push notification
  text=item+' already present'
    googlehome.notify(text, function(res) {
      console.log(res);
    });
  callback(text);
  
  return;
}
else{
// If no, add the item to the list
// Push the notification about the status of the operation
CreateTask(item,callback);
}
})
.fail(function(response,statusCode){
  text='There was an error adding '+item+'  to groceries'
      googlehome.notify(text, function(res) {
      console.log(response);
    });
    callback(text);
})



}

var CreateTask=function(item,callback)
{


  wunderlistAPI.http.tasks.create({
    "list_id": listId,
    "title": item
  }).done(function (res) {
    // TODO: push notification
    text=item+' added to groceries'
      googlehome.notify(text, function(res) {
      console.log(res);
    });
    callback(text);
    return "success"
  }).fail(function (err) {
      // TODO: push notification
       text='There was an error adding '+item+'  to groceries'
      googlehome.notify(text, function(res) {
      console.log(err);
    });
    callback(text);
    return "Fail"
  })

}


module.exports = list;