
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};
var $form = $('form#appointment_form'),
    url = 'https://script.google.com/macros/s/AKfycbwaL5yOON17HtIkXVyLKub-yctFfC3GZCtNX-RGF2lJQen9aO5v_VfijxiPb2xdMNc7XQ/exec';
           
$('#get_appointment').on('click', function(e) {
	console.log("form data = ",$form.serializeObject(),)
  e.preventDefault();

  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    // data: JSON.stringify({"name":$("#name").val(),"phone":$("#phone").val()})
    data:$form.serializeObject(),
  }).success(
    // do something
    alert("We Will Contact you shortly :-)")
  );
  $('#book_appointment').modal('hide');
})

// window.onload = function() {
//     window.addEventListener("beforeunload", function (e) {
//         $('#book_appointment').modal('show');
//         return "Thank You";
//     });
// };
// $(window).bind('beforeunload', function(e){
// 	// $('#book_appointment').modal('show');
//     return "";
// });
setTimeout(function(){
     $('#book_appointment').modal('show');
},60000)

