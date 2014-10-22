/**
 * jQuery Plugin for creating collapsible fieldset
 * @requires jQuery 1.2 or later
 *
 * Copyright (c) 2010 Lucky <bogeyman2007@gmail.com>
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * "animation" and "speed" options are added by Mitch Kuppinger <dpneumo@gmail.com>
 */

(function($) {
	function hideFieldsetContent(obj, options){
		if(options.animation==true)
			obj.find('div').slideUp(options.speed);
		else
			obj.find('div').hide();
		
		obj.removeClass("expanded");
		obj.addClass("collapsed");
	}
	
	function showFieldsetContent(obj, options){
		if(options.animation==true)
			obj.find('div').slideDown(options.speed);
		else
			obj.find('div').show();
		
		obj.removeClass("collapsed");
		obj.addClass("expanded");
	}
	
	$.fn.coolfieldset = function(options){
		var setting={collapsed:false, animation:true, speed:'medium'};
		$.extend(setting, options);
		
		this.each(function(){
			var fieldset=$(this);
			fieldset.addClass("collapsible");
			var legend=fieldset.children('legend');
			
			if(setting.collapsed==true){
				hideFieldsetContent(fieldset, setting);
			} else {
				showFieldsetContent(fieldset, setting);
			}
			
			// legend.bind('touchstart mousedown', function() {
			legend.bind('click', function() {
				if(fieldset.hasClass("collapsed")) {
					showFieldsetContent(fieldset, setting);
				} else {
					hideFieldsetContent(fieldset, setting);
				}
			});
		});
	}
})(jQuery);