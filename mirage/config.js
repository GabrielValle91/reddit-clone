export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    //routes for users
    this.get('/users');
    this.post('/users');
    this.get('/users/:id')
    this.patch('/users/:id');
    this.del('/users/:id');
    //routes for posts
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.patch('/posts/:id'); // or this.patch
    this.del('/posts/:id');
    //routes for comments
    this.get('/posts/:post_id/comments');
    this.post('/posts/:post_id/comments');
    this.get('/posts/:post_id/comments/:id')
    this.patch('/posts/:post_id/comments/:id');
    this.del('/posts/:post_id/comments/:id');
    //routes for replies to comments
    this.get('/posts/:post_id/comments/:comment_id/replies');
    this.post('/posts/:post_id/comments/:comment_id/replies');
    this.get('/posts/:post_id/comments/:comment_id/replies/:id')
    this.patch('/posts/:post_id/comments/:comment_id/replies/:id');
    this.del('/posts/:post_id/comments/:comment_id/replies/:id');
}
