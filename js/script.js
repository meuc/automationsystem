for (var i = 0; i < house.rooms.length; i++) {
	var roomId		= house.rooms[i].id;
	var roomName	= house.rooms[i].name;
	var roomWidth	= house.rooms[i].width;
	var roomHeight= house.rooms[i].height;
	var roomTop 	= house.rooms[i].top;
	var roomLeft 	= house.rooms[i].left;
	var floor 		= house.rooms[i].floor;
	
	var room = $("<div id='room" + roomId + "' class='room'></div>");
	
	$("#house").append(room);	
	$("#room" + roomId).css({
		top: roomTop,
		left: roomLeft,
		width: roomWidth,
		height: roomHeight,
		"background": "url(img/" + floor + ")"
	});
	
	for (var j = 0; j < house.rooms[i].doors; j++) {
		var door = "<img src='img/door.png' class='door door" + j + " part' alt='door'>";
		
		room.append(door);
	}
	
	for (var j = 0; j < house.rooms[i].radiators; j++) {
		var radiator = "<img src='img/radiator.png' class='radiator radiator" + j + " part' alt='radiator'>";
		
		room.append(radiator);
	}
	
	for (var j = 0; j < house.rooms[i].windows; j++) {
		var openWindow = "<img src='img/window_open.png' class='window open-window" + j + "' alt='window'>";
		var closedWindow = "<img src='img/window.png' class='window closed-window window" + j + "' alt='window'>";
		
		room.append(openWindow, closedWindow);
	}

	for (var j = 0; j < house.rooms[i].furniture.length; j++) {
		var furniture = house.rooms[i].furniture;		
		room.append(furniture);
	}
	
	for (var j = 0; j < house.rooms[i].electronics.length; j++) {
		var electronics = house.rooms[i].electronics[j].tag;		
		room.append(electronics);
	}
	
	for (var j = 0; j < house.rooms[i].tabs.length; j++) {
		var tabs = house.rooms[i].tabs[j].tag;		
		room.append(tabs);
	}
	
	var overlay = "<div class='overlay overlay" + roomId + "'></div>";
	$(room).append(overlay);
	$(".overlay" + roomId).css({
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		"background-color": "rgba(0,0,0,.5)"
	});
	
	var lightButton = "<button data-itemId='light" + roomId + 
									"' class='light-button'>" + roomId + "</button>";
	$(".control-panel .light-controls").append(lightButton); 
}

$(document).on("click", ".door", function(){
	var img = $(this);

	var closedDoor = "img/door.png";
	var openDoor = "img/door_open.png";

	img.attr('src', img.attr('src') == closedDoor ? openDoor : closedDoor);
});
$(document).on("click", ".closed-window", function(){
	$(this).toggleClass("transparent");
});
$(document).on("click", ".light-button", function() {
	var roomId = $(this).attr('data-itemId').replace(/\D+/g, '');

	$(".overlay" + roomId).toggle();
});	
$(document).on("click", ".bedlamp", function(){
	var img = $(this);

	var off = "img/bed_lamp.png";
	var on = "img/bed_lamp_on.png";

	img.attr('src', img.attr('src') == off ? on : off);
});
$(document).on("click", ".ikea-bulp", function(){
	var img = $(".ikea-lamp");

	var off = "img/ikea_lamp.png";
	var on = "img/ikea_lamp_on.png";

	img.attr('src', img.attr('src') == off ? on : off);
});
$(document).on("click", ".mac", function(){
	var img = $(this);

	var off = "img/mac.png";
	var on = "img/mac_on.png";

	img.attr('src', img.attr('src') == off ? on : off);
});
$(document).on("click", ".tv", function(){
	$(this).toggleClass("flickering");
});

// var electronics = "<i id='electronics" + roomId + "' class='fa fa-plug electronics icon'></i>"
// var light 			= "<i id='light" + roomId + "' class='fa fa-lightbulb-o bulp icon'></i>";
// var water 			= "<i id='water" + roomId + "' class='fa fa-tint water icon'></i>";
// var radiator 		= "<i id='radiator" + roomId + "' class='fa fa-fire radiator icon'></i>";

// $(".drag-controls").append(electronics, light, water, radiator);
// $( ".drag-controls i" ).draggable();





// TODO: add local storage stuff
// $(document).on("click", "#login-button", function(){
// 	var userImage = "<img src='img/profilpic.png' class='profilpic' alt='userimage'>"
// 	var username = $("#name").val();
// 	var password = $("#password").val();
//
// 	$(".user").append(userImage + " <span>" + username + " ▾</span>");
//
// 	$(".login").hide();
// });
//
// $(".user").click(function(){
// 	$(".user p").toggle();
// });
//
// $(".user p").click(function(){
// 	$(".login").show();
// });




















