var $form = $('.form');
var $chore = $('.chore');
var $list = $('.list');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $choreP = $('<p>').html($chore.val());
    var $del = $('<button>X</button>');
    
    $li.append($choreP, $del);
    $list.append($li);
    
    $li.addClass('list-item');
    $del.addClass('delete-button');
    $choreP.addClass('list-text');
    $choreP.add($del).addClass('inline-block');
    
    $form[0].reset();
    
    $del.on('click', function () {
        $li.remove();
    });
});

$list.on('click', 'li', function () {
    $(this).toggleClass('task-complete');
});