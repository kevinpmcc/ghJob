ghJob.controller('ghJobController',  ['ghJobService', function(ghJobService){

  var self = this;
	
  ghJobService.getAll().then(function(users){
    self.users = users;
  })

  // self.getAll = function(filter = "orgs/makersacademy/public_members") {
  // 	self.users = [];
  //   return $http.get("https://api.github.com/"+filter)
  //     .then(function(resp){
  //       _handleResponseFromApi(resp.data);
  //     }, function(err){});
  //     return self.users
  // }

  // self.searchUsersFor= function(user){
  // 	return "https://api.github.com/search/users?q="+user
  // };

  // function _handleResponseFromApi(data) {
  //   data.forEach(function(userData){
  //     self.users.push(userData);
  //   })
  // }


}]);