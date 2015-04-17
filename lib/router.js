// Router.plugin('ensureSignedIn');

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'myTimeOffRequestList'});