// Router.plugin('ensureSignedIn');

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
  	return Meteor.subscribe("myTimeOffRequests");
  }
});

Router.route('/', {
	name: 'myTimeOffRequestList'
});

Router.route("/request/:_id", {
	name: "timeOffRequestDetail",
	data: function () {
		return TimeOffRequests.findOne({"_id": this.params._id});
	}
});