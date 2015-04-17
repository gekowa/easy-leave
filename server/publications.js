Meteor.publish("myTimeOffRequests", function () {
	return TimeOffRequests.find();
});