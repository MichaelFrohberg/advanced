
$("browse").on("pageinit", function() {

});
$("#addItem").on("pageinit",  function(){

    function storeData( ) {
      var key = $('#submit').attr('data-role');
      if ($.isNumeric(key) === false) {
        var key = Math.floor(Math.random() * 100001);
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
        
        localStorage.setItem(key, JSON.stringify(item));
        alert("Post Saved to local storage")
        $('#submit').removeAttr('data-role');
        //location.reload(true);
    };
    $('#submit').on('click',function(e) {
        e.preventDefault();
        storeData()
    });
    


    function autoFillData() {
      for (var n in json) {
        var id = Math.floor(Math.random() * 1000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
      }
    }
    function displayLocal() {
      if (localStorage.length == 0) {
        alert("Nothing Stored...Demo gigs will be used.")
        autoFillData();
      }
      for (var i= 0, j=localStorage.length; i<j ; i++){
            $("#results").append("<ul data-role='listview' data-inset='true'></ul><li>");
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            $("<h3>"+item.post[1]+"</h3>"+
                "<p>"+item.kind[1]+ " Gig" + "</p>"+
                "<p>"+item.date[1]+"</p>" +
                "<p>"+item.area[1]+"</p>" +
                "<p>"+item.paid[1]+"</p>" +
                "<p>"+item.details[1]+"</p>" +
                "<p>"+item.cName[1]+" "+item.email[1]+" "+item.phone[1]+"</p>").appendTo("#results")
                var editLink = $("<a href='#addItem' class='edit'>Edit</a>").appendTo("#results").attr('id', key)

                var deleteLink = $("<a href='#' class='delete'>Delete</a>").appendTo("#results").attr('id', key);
                editLink.on('click', editItem)
                deleteLink.on('click', deleteItem)
            } // end for loop
      };
      $("#display").on('click', displayLocal)

      function clearLocal() {
        confirm('Are you sure you wish to delete your entries');
        localStorage.clear();
        location.reload(true);
      };
      $('clear').on('click', clearLocal);

      function deleteItem() {
        var deleteKey = this.id;
        localStorage.removeItem(this.id);
        window.location.reload();
      };
      function byID(x) {
        var elem = document.getElementById(x);
        return elem;
      };
      
      function editItem() {
        window.location.reload();
        var editKey = localStorage.getItem(this.id);
        var item = JSON.parse(editKey);
        byID('paid').value = item.paid[1]
        byID('gig-select').value = item.kind[1]
        byID('date').value = item.date[1]
        byID('post').value = item.post[1]
        byID('details').value = item.details[1]
        byID('name').value = item.cName[1]
        byID('email').value = item.email[1]
        byID('phone').value = item.phone[1]
        $('input:checked').val(item.area[1])
       };
        
    $('#json').on('click', function () {
    $.ajax({
        url: "xhr/data.json",
        type: "GET",
        dataType: "json",
        success: function (data, status) {
            console.log(status, data);
            console.log(data.item1.activity[1]);
            console.log(data);
            alert("JSON Data Loaded and Stored")
            localStorage.clear();
            var item = [
                data.item1,
                data.item2,
                data.item3,
                data.item4,
                data.item5
            ]
            for (var i= 0, j=localStorage.length; i<j ; i++){
            $("#results").append("<ul data-role='listview' data-inset='true'></ul><li>");
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            $("<h3>"+item.post[1]+"</h3>"+
                "<p>"+item.kind[1]+ " Gig" + "</p>"+
                "<p>"+item.date[1]+"</p>" +
                "<p>"+item.area[1]+"</p>" +
                "<p>"+item.paid[1]+"</p>" +
                "<p>"+item.details[1]+"</p>" +
                "<p>"+item.cName[1]+" "+item.email[1]+" "+item.phone[1]+"</p>").appendTo("#results")
                var editLink = $("<a href='#addItem' class='edit'>Edit</a>").appendTo("#results").attr('id', key)

                var deleteLink = $("<a href='#' class='delete'>Delete</a>").appendTo("#results").attr('id', key);
                editLink.on('click', editItem)
                deleteLink.on('click', deleteItem);
            } // end for loop
        }
    });
});

$('#xmlData').on('click', function () {
    console.log("XML data fired");
    $.ajax({
        url: "xhr/data.xml",
        //        type : "GET",
        dataType: "xml",
        success: function (data, status) {
            console.log(status, data);
            for (i = 1; i <= $(data).find('activity').length; i++) {
                var newItems = "item" + i;
                console.log(newItems);
                var items = {}

                items.activity = ["activity", $(data).find(newItems + ">activity").text()];
                items.date = ["date", $(data).find(newItems + ">date").text()];
                items.cost = ["cost", $(data).find(newItems + ">cost").text()];
                items.details = ["details", $(data).find(newItems + ">details").text()];
                items.include = ["include", $(data).find(newItems + ">include").text()];

                console.log(items);
                var key = Math.floor(Math.random() * 100001);
                localStorage.setItem(key, JSON.stringify(items));

            }
        },    
       error: function (error, parseerror) {
          console.log(error, parseerror);
        }

    });
});
});