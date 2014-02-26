//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    add();
};
$(document).bind('pageinit', init);

function add() {
	/*var alarm = new window.tizen.AlarmRelative(window.tizen.alarm.PERIOD_MINUTE/2);
	window.tizen.alarm.add(alarm, "org.tizen.clock"); 	
	console.log("The alarm triggers " + alarm.getRemainingSeconds() + " seconds later");*/
	

	var alarm = new window.tizen.AlarmRelative(window.tizen.alarm.PERIOD_MINUTE/2);
	var appControl = new window.tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view", "http://www.tizen.org");
	window.tizen.alarm.add(alarm, "org.tizen.browser", appControl);
	
	console.log("Alarm added with id: " + alarm.id);
}
