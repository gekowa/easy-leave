Template.myTimeOffRequestList.helpers({
  myTimeOffRequests: function () {
    return TimeOffRequests.find();
  }
});