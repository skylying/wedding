import { getCurrentTimeFormat, sayHello } from './helper.js';
import { initializeApp } from 'firebase/app';

console.log(initializeApp);

// Comment click event
$(document).ready(function() {

  var initialCommentTextareaHeight = $('#comment-textarea').height();

  $('#submit').click(function() {
    var message = $('#comment-textarea').val();
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

      $('#comment-textarea').val('');
      // TODO: reposition height
      $('#comment-textarea').height(initialCommentTextareaHeight);
      $('#comment-container').scrollTop($('#comment-container')[0].scrollHeight);
    } else {
      alert('記得打字唷 ^_^');
    }
  });


  // Textarea resize
  $('#comment-textarea').on('keydown', function(){
    $(this).height('auto');
    $(this).height($(this).prop('scrollHeight'));
  })

});
