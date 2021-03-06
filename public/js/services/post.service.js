'use strict';

app.factory('Post', function(DS, $state) {

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

return DS.defineResource({
	name: 'posts',
	relations: {
		belongsTo: {
			users: {
				// localField: 'bbbllaaah',
				localField: '_author', //DONT KNOW
				localKey: 'author'
			}
		} 
	},
	methods: {
		go: function() {
			$state.go('post', {
				postId: this._id,
				authorId: this.author
			})
		}
	}
})

return Post;
}).run(function(Post){});


