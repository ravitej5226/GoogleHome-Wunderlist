function List(item){
this.listItem=item
}

List.prototype.GetAllLists=function(){
   var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': '',
  'clientID': ''
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