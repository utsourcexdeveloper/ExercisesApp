//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var ActiveBar = require('ui/common/Activebar');
	var self = Ti.UI.createView();
	
	var activeBar = new ActiveBar('Exercises');
		self.add(activeBar);

	return self;
}

module.exports = FirstView;
