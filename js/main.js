



$("#addItem").on("pageinit",  function(){
	var myForm = $('#gig-form'); // creates a jquery object.
/*  	myForm.validate({
      invalidHandler: function (myForm, validator) {
          var errors = validator.numberOfInvalids();
          if (errors) {
              var message = errors == 1 ? "You missed 1 field. It has been highlighted"
              : "You missed " + errors + " fields. They have been highlighted";
              $('div.error span').html(message).appendTo('.content');
              $('div.error').show();
          } else {
              $('div.error').hide();
          }
      },
      // if no errors return pure form
      submitHandler: function () {
      	console.log("Valid Code You may Proceed");
	     });
    }); 
*/
    function storeLocal(key ) {
      if (!key) {
        var id = Math.floor(Math.random()*1000001);
      } else { 
        id = key;
      }
      var item = {}
        item.paid = 	["Paid:", $("#paid").val()]; 
        item.kind = 	["Type", $("#gig-select").val()]; 
        item.area = 	["Area", $("input:checked").val()];
        item.date = 	["Date", $("#date").val()];
        item.post = 	["Post Title", $("#post").val()];
        item.details = 	["Details", $("#details").val()];
        item.cName =	["Contact Name:", $("#name").val()];
        item.email = 	["Contact Email:", $("#email").val()];
        item.phone = 	["Conact Phone:", $("#phone").val()];
        localStorage.setItem(id, JSON.stringify(item));
        alert("Post Saved to local storage");
    }
    function displayLocal() {
      if (localStorage.length == 0) {
        alert("You have nothing saved.")
      } else {
        alert(JSON.parse(localStorage.item))
      }

    }
    // Events
    $("#submit").on("click", function (e) {
        e.preventDefault()
        storeLocal();
    });
    $("#display").on("click", function(e) {
        e.preventDefault();
        displayLocal();
    });

});


  		
  	
 

