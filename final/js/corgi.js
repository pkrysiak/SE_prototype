jQuery(document).ready(function() {
	$(".show_comment_link").click(function(e){
		e.preventDefault();
		$(this).closest('.feed_item').find('.comment_area').slideToggle(400);
	});
	$(".share_wrapper").hover(
		function() {
			$(this).find('.share_hidden').show();
		},
		function() {
			$(this).find('.share_hidden').hide();
		}
	);
	$("#add_new_question").click(
		function() {
			$('.span8').find('#new_question_form').show();
		}
	);
	$("#new_form_submit").click(
		function() {
			$(this).closest('.corgi_feed_well').hide();
		}
	);
	$("#new_message").click(
		function() {
			$('.span8').find('#new_msg_form').show();
		}
	);
	$("#add_new_publication").click(
		function() {
			$('.span8').find('#new_publication_form').show();
		}
	);
});