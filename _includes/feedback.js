$(function () {
	var
		formUrl    = 'https://docs.google.com/forms/d/1d6fvE6LVJ2JuGhDT157dbdvBPGMbm5buiTEfLevJWbc/viewform?embedded=true',
		$button    = $('<div id="feedback-btn"><div>Feedback</div></div>'),
		$body      = $(document.body),
		$container = null,
		$backdrop  = $('<div class="modal-backdrop" />');

	$button.click(function () {
		if (!$container) {
			$container    = $('<div class="modal" />');

			var $header   = $('<div class="modal-header" />');
			var $content  = $('<div class="modal-body" />').height(400);
			var $closeBtn = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
			var $iframe   = $('<iframe ' +
						'src="' + formUrl + '" ' +
						'width="100%"' +
						'height="380"' +
						'frameborder="0"' +
						'marginheight="0"' +
						'marginwidth="0">' +
							'Loading...' +
					'</iframe>');

			$closeBtn.click(function () {
				$container.fadeOut();
				$backdrop.fadeOut();
			});

			$backdrop.click(function () {
				$closeBtn.click();
			});

			$header.append($closeBtn).append($('<h3>Submit Feedback</h3>'));
			$content.append($iframe);

			$container.append($header).append($content);

			$body.append($backdrop).append($container);
		} else {
			$container.fadeIn();
			$backdrop.fadeIn();
		}
	});

	$body.append($button);
});

