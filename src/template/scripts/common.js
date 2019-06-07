$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.faq').tabs();
	$('.select select').styler();
	$('.range__wrap').slider({
		'value': 30,
		change: function( event, ui ) {
			RangeValue($(this));
		}
	});


	function RangeValue(element) {
		var input = element.parents('.range').find('input');
		input.val(element.slider('value'));
	}

	RangeValue($('.range__wrap'));

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('methods__item');
	valueElementForm('checkbox');
	valueElementForm('radio');
	

	$('.price__list').each(function(index, el) {
		var th = $(this).find('th'),
				thLength = th.length;

		if (thLength == 3) {
			$(this).addClass('price__list_3');
		} else if (thLength == 2) {
			$(this).addClass('price__list_2');
		}
	});
});
