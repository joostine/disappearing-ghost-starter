$(".hide-button").click(function() {
  $(".ghost-image").fadeOut();
});

$(".show-button").click(function() {
  $(".ghost-image").fadeIn();
});

$(".update-img-button").click(function() {
  $("img").attr("src" , "https://i.pinimg.com/originals/53/04/96/530496f5dcf65046e8c0360d7d89b10a.gif");
});

$(".message-button").click(function() {
  let message = $("input").val();
  $(".message").text(message);
});

$(".name-button").click(function() {
  let name = $("input").val();
  $(".name").text("Hello! My name is " + name);
});