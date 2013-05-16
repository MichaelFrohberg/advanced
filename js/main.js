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
        item.post = 	["Post Title:", $("#post").val()];
        item.details = ["Details:", $("#details").val()];
        item.cName =	["Contact Name:", $("#name").val()];
        item.email = 	["Contact Email:", $("#email").val()];
        item.phone = 	["Contact Phone:", $("#phone").val()];
        localStorage.setItem(id, JSON.stringify(item));
        alert("Post Saved to local storage");
    }
    function autoFillData() {
      for (var n in json) {
        var id = Math.floor(Math.random() * 1000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
       
     }
    }
    function displayLocal() {
      if (localStorage.length == 0) {
        alert("You have nothing saved.")
        autoFillData()
      } else { 
      for (var i = 0; i < localStorage.length; i++) {
        $("#results").append("<ul data-role='listview'></ul><li>");
        var key = localStorage.key(i)
        var value = localStorage.getItem(key)
        var object = JSON.parse(value);
        $.each(object, function(k, v) {
           var txt = v[0] + " " +v[1] + "<br />"
           $("#results").append(txt);
          })
          var editLink = $('<a href="#" data-role="button" id="edit" data-icon="edit" data-inline="true" data-iconpos="right">Edit</a>')
                            .appendTo("#results")
                            .attr('id', key)
                            .addClass('linked');
          var deleteLink = $("<a href='#' data-role='button' id='delete' data-icon='delete' data-inline='true' data-iconpos='right'>Delete</a>")
                            .appendTo("#results")
                            .attr('id', key)
                            .addClass('linked');
          $('.linked').buttonMarkup({
            create: function(event, ui) {}
          });
          $("#results").listview("refresh");
        }
      }
    }
    // Events
    

    $("#submit").on("click", function(e) {
        e.preventDefault()
        storeLocal();

    });
    

    $("#display").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        displayLocal();
    });
    
    $("#c").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        displayLocal();
    });


    $("#jsonData").on("click", function(e) {
        $.ajax({
          url: 'xhr/gigs.json',
          type: 'GET',
          dataType: 'json',
         success: function(data, status) {
            console.log(status, data);

          },
          error: function(error, parseerror) {  
            console.log(error, parseerror);
            }
        });

    });


});
  	
 

