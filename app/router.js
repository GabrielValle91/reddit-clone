import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts.post', {path: '/posts/:id'});
  this.route('posts.create', {path: '/posts/new'});
  this.route('posts.edit', {path: '/posts/:id/edit'});
});

export default Router;
