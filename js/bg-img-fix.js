$(document).ready(function($) {
	var DIheight = $('.dialog-img').height();
	var roundedHeight = Math.round(DIheight);
	$('.dialog-img').height(roundedHeight);
	var ctaFooterHeight = $('.cta-footer').height();
	var oneSkewedAngleRemoved = Math.sin(0.0523599) / (Math.sin(1.51844)/1100);
	ctaFooterHeight -= oneSkewedAngleRemoved;
	$('.cta-footer').height(ctaFooterHeight);
});