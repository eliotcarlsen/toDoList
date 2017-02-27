function list (errand,place,time,date){
  this.errand = errand;
  this.place = place;
  this.time = time;
  this.date = date;
};

$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var timeInput = $("#time").val();
    var dateInput = $("#date").val();
    var errandInput = $("#errand").val();
    var placeInput = $("#place").val();

    var newlist = new list (errandInput, placeInput, timeInput, dateInput);

    $(".list ol").append("<li id=\"" + newlist.errand + "\"><input type=\"checkbox\" name=\"list\">" + newlist.errand + " at " + newlist.place + " at " + newlist.time + " " + newlist.date + "</li>");


    $("li#" + newlist.errand + "").click(function(){
      $("#" + newlist.errand + "").remove();
    });
  });
});
