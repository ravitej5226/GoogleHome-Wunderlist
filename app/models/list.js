function List(item){
this.listItem=item
}

List.prototype.GetAllLists=function(){
   var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': 'b5661b28d1fc6eac5f175ea93b84e7da916d8981d495828a37c87a8e092e',
  'clientID': '71aea34e01ca73de4685'
});

wunderlistAPI.http.lists.all()
  .done(function (lists) {
    /* do stuff */
    return lists;
  })
  .fail(function () {
    console.error('there was a problem');
  });
}

module.exports=List;