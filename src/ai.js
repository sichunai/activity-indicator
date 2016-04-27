var AI = {
  show: function(style){
    var mu = "<div class='fadeBox'> <div class='" + style + "'> </div> </div>";
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
