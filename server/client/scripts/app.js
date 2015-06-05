// YOUR CODE HERE:
$(document).ready(function(){
  var requestTime = '2014-05-25T23:19:10.140Z';
  var roomOptions = {};
  var currentRoom = 'all';
  var friends = {};
  var updateRooms = function(room){
    if(!roomOptions[room]) {
      roomOptions[room] = true;
      $('#roomSelect').append('<option class="roomItem" data="' + room +'">' + room + '</option>');
    }
  };
  var data = function(){
    $.ajax({
      url:'http://127.0.0.1:3000/classes/',
      context: document.body
    }).done(function(data){
      data = JSON.parse(data);
      for(var i = 0; i < data.results.length; i++) {
        if(data.results[i].text && data.results[i].username && new Date(data.results[i].createdAt) > new Date(requestTime)
          && data.results[i].roomname) {
          var user = _.escape(data.results[i].username.toString());
          var message = _.escape(data.results[i].text.toString());
          var room = _.escape(data.results[i].roomname.toString()).replace(/ /, "_");
          updateRooms(room);

          if(currentRoom === room || currentRoom === 'all') {
            $('#messages').prepend('<div class="all '+room+'">' +'<span data="' + user + '">' + user + '</span> ' + message + ' Room: ' + room + '</div>');
          } else {
            $('#messages').prepend('<div class="all '+room+'">' +'<span data="' + user + '">' + user + '</span> ' + message + ' Room: ' + room + '</div>').hide();
          }
        }
      }

      if(data.results.length) {
        requestTime = data.results[data.results.length -1].createdAt;
      }

      updateFriends();
    });
  };

// data();
  setInterval(data, 1000);

  $('#submitButton').click(function(){
    // debugger;
    var roomAssignment = $('#roomSelect').val();
    if(roomAssignment === 'New Room') {
      roomAssignment = prompt('Create a new room');
    }
    var message = {
      'username': name,
      'text': $('#messageInput').val(),
      'roomname': roomAssignment
    };
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message');
      }
    });
  });


  $('#roomSelect').on('change', function(){
    // $('#messages').hide();
    // $('.' + $('#roomSelect').val()).show();


    currentRoom = $('#roomSelect').val();

    $('#messages').children().filter('.'+ currentRoom).show();
    $('#messages').children().not('.'+ currentRoom).hide();
  });

  $(document).on('click', 'span', function() {
    var user = $(this).attr('data');
    console.log(user);
    if(friends[user]) {
      delete friends[user];
    } else {
      friends[user] = true;
    }
    console.log(friends);
    updateFriends();
  });

  var updateFriends = function(){
    $('#messages > .all > span').removeClass('bold');
    for(var key in friends) {
      $('#messages > .all > span').filter(function(){
        return $(this).attr('data') === key;
      }).addClass('bold');
    }
  };
});
