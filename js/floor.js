/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-03 15:35:54
 * @version $Id$
 */
 $(function() {
	 $("#backtop").on("click",function() {
	 	if ($(document).scrollTop() > 100) {
	 		$('body,html').stop().animate({ scrollTop: 0},400)
	 	}
	 })
	 $("#alwaysprom").on("click",function() {
	 	console.log($(document).scrollTop())
	 	$('body,html').stop().animate({ scrollTop: $("#alwayspromhei").offset().top},600)
	 })
 })