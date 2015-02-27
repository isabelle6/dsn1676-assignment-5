var $form = $('.form');
var $chore = $('.chore');
var $list = $('.list');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $choreP = $('<p>').html($chore.val());
    var $delete = $('<button>X</button>');
    
    $li.append($choreP, $delete);
    $list.append($li);
    
    $form[0].reset();
});

$list.on('click', 'li', function () {
    $(this).toggleClass('task-complete');
});