$(document).ready(function() {

	// Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
	// $(document).foundation();

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});
	document.querySelector('.nav-toggle-button').addEventListener('click', function() {
		slideout.toggle();
	  });

	// show header-top block
	document.querySelector('.top-add-info-show').addEventListener('click', function() {
		const mainHeight = getComputedStyle(this);
		var obj = document.getElementsByClassName('top-add-info')[0];
		var button = this;
		button.style.cssText = 'opacity: 0; \
								max-height: 0; \
								pointer-events: none;';
		$('top-add-info-show').closest('div').css('height','0px')

		obj.style.cssText = "max-height: " + mainHeight + "; \
							max-height: 40px; \
							opacity: 1; \
							height: auto;";

		$(document).mouseup(function (e) {
			var container = $(".top-add-info");
			if (container.has(e.target).length === 0){
				obj.style.cssText = "max-height: 0px; \
									opacity: 0; \
									height: auto; \
									pointer-events: none;";
				button.style.cssText = 'opacity: 1; \
										max-height: ' + mainHeight + '; \
										pointer-events: auto;';
				$(document).unbind();
				}
		});
	});
});
