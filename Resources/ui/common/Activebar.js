/**
 * @author harsha
 */

function activeBar(title) {

	var _p = function(densityPixels) {
		return densityPixels * Ti.Platform.displayCaps.dpi / 160;
	}
	var self = Ti.UI.createView({
		top : _p(0),
		height : _p(48),
		backgroundColor : '#2b3e51',
	});


	// Create a Label.
	var titleLabel = Ti.UI.createLabel({
		text : title,
		color : '#f4f4f4',
		left : _p(50),
		bottom : _p(12),
		font : {
			fontSize : '18sp',
			
			fontFamily : 'Helvetica Neue'
		},

	});
	// Add to the parent view.
	self.add(titleLabel);
	
	var titleImage = Ti.UI.createImageView({

		image : '/images/common/lefticon.png',
		top : _p(10),
		height : _p(30),
		width : _p(40),
		left : _p(5)

	});
	self.add(titleImage);

	return self;



}

module.exports = activeBar; 