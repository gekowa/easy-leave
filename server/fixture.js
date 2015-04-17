if (TimeOffRequests.find().count() === 0) {
	TimeOffRequests.insert({
    "email": "xhguo@nltechdev.com",
    "fullName": "Guo Xinghua",
    "leaveFrom": "2015-2-2 14:00",
    "hours": "3",
    "sumitted": "2015-2-1",
    "reason": "Got so sick...",
    "type": Configs.timeOffTypes.VACATION
	});

  TimeOffRequests.insert({
    "email": "another@nltechdev.com",
    "fullName": "Ma Yun",
    "leaveFrom": "2015-2-2 14:00",
    "hours": "3",
    "sumitted": "2015-2-1",
    "reason": "Got so sick...",
    "type": Configs.timeOffTypes.COMPENSATORY
  });

  TimeOffRequests.insert({
    "email": "xhguo@nltechdev.com",
    "fullName": "Yang yuanqing",
    "leaveFrom": "2015-2-2 14:00",
    "hours": "3",
    "sumitted": "2015-2-1",
    "reason": "Got so sick...",
    "type": Configs.timeOffTypes.Marriage
  });
}