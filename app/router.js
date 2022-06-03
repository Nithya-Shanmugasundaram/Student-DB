import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('management', {path: '/management'}, function() {
    this.route('insert');
    this.route('delete');
    this.route('update');
    this.route('read');
    this.route('reevaluate');
  });
  this.route('student');
});

export default Router;
