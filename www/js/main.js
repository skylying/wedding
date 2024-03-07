import { getCurrentTimeFormat, sayHello } from './helper.js';


// Comment click event
$(document).ready(function() {
  $('#submit').click(function() {
    var message = $('#message').val();
    if ($.trim(message) !== '') {
      // Get message
      // Get time
      // Get name
      var data = {
        'name':'Peyton',
        'time':getCurrentTimeFormat(),
        'comment': message
      }
      var commentTemplate = $('#comment-template').html();
      var rendered = Mustache.render(commentTemplate, data);
      $('#comment-container').append(rendered);

      $('#message').val('');
      $('#comment-container').scrollTop($('#comment-container')[0].scrollHeight);
    } else {
      alert('記得打字唷 ^_^');
    }
  });
});
