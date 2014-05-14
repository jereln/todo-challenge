$(document).ready(function(){
    $('.add-item').on('submit', function(){
        var toDoValue = $('#new-item').val();
        $('#new-item').val('');
        var addToDo = $('<li>'+toDoValue+'</li>');
        $(this).next('.todo').prepend(addToDo);
        return false;     
    }); 
   
  
  $('.todo').on('click', 'li', function(){
        $(this).hide();
        return false;
    });      
});
