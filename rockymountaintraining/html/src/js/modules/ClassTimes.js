var ClassTimes = ( function($) {
	var classtimes = {
		loadTimes: function(pid, title) {

			$.ajax({
				type: 'GET',
				data: {
					action: 'load_times',
					pid: pid,
					title: title,
				},
				dataType: 'html',
				url: ABSPATH + 'admin-ajax.php',
				beforeSend: function() {
					$('.js-class-times .inner').slideUp(300, function(){
						$(this).remove();
					});
				},
				success: function(data) {
					$data = $(data);
					$data.height(0);
					$('.js-class-times').append($data);
					$data.animate({height: 55}, 300);
				},
				error : function(jqXHR, textStatus, errorThrown) {
	        console.log( jqXHR + " :: " + textStatus + " :: " + errorThrown );
	      }
			});

		}, 
		init: function() {

			var self = this;
			var pid = jQuery('.js-class-times').attr('data-pid');

			$(window).load(function(){
				$('#date').change( function() {
					var title = $(this).val();
					self.loadTimes(pid, title);
				});
			});

		}
	}
	return classtimes;
})(jQuery);
