'use  strict';
app.factory('User', function(DS) {
  return DS.defineResource({
    name: 'users',
    relations: {
    	hasMany: {
    		post: {
    			localField: 'posts',
    			foreignKey: 'postId'
    		}
    	}
    }
  });
}).run(function (User) {}); 
// If you're wondering about what this .run function does, 
// look it up in the docs: https://docs.angularjs.org/guide/module