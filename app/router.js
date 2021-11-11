import EmberRouter from '@ember/routing/router';
import config from 'black-tech-startups/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('supabase-ember-directory', { path: '/', as: 'directory' });
});
