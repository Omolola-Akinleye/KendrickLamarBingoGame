
$(document).ready(function(){
	var id= $('#kdotLingo').attr('id');
     var kdotToggle= SC.Widget(id);

	$('.playKdot ').click(function(){
	 $(this).find('i').toggleClass('fa-pause');
	 kdotToggle.toggle();
	});

	 $('.next').click(function(){

		      kdotToggle.next();
	 });

	 $('.prev').click(function(){
		  kdotToggle.prev();
	 });


	 $('#tracker').hide();

$(document).on('click', '.btrack', function(){

	// body...
 $('#tracker').toggle();

});


  $(document).on('click', '#exit', function(){

  window.location.href='exit.html';

	});


  $(document).on('click', '#newGame', function(){
		$('#pop-up').remove();
	});


	$(document).on('click', '#toggle', function(event){
			 $(this).toggleClass('on');
			 $('#gme-btn').toggle();
			 $('#gme-btn').toggleClass('menu-style');
			 event.preventDefault();
		 });

   $(function(){
	   var offSet =$('#questions').offset().top;

	   var stickyBar = function (){
		   var scroll_top= $(window).scrollTop();

		   if(scroll_top > offSet){
			   $('#questions').addClass('stick');
		   }
			 else if(scroll_top > 300){
				 $('#questions').addClass('stick');
			 }
		   else{
			   $('#questions').removeClass('stick');
		   }
	   }
	   stickyBar();

	   $(window).scroll(function(){
		   stickyBar();
	   });
   });
   $('#instructions').hide();
   $('.instruct').click(function(){
		  $("#instructions").slideToggle();
	 });



    $('[data-toggle="tooltip"]').tooltip();
});
