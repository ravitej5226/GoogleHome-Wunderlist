function List(item){
this.listItem=item
}

List.prototype.GetAllLists=function(){
   var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': 'da49c7638bb410ceeefbff7c771b5c0c86664a3949f308c8ed1cd8082945',
  'clientID': '71aea34e01ca73de4685'
});

wunderlistAPI.http.lists.all()
  .done(function (lists) {
    /* do stuff */
    // 143507542
    return lists;
  })
  .fail(function () {
    console.error('there was a problem');
  });


  wunderlistAPI.http.tasks.create({
  "list_id":143507542,
  "title":this.listItem
}).done(function(res){
  return "success"
}).fail(function(err){
  return "Fail"
})

}


module.exports=List;