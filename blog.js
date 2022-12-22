$.getJSON('blog.json', function(data){
    $.each(data.article, function(i, f) {
        var article = "<div class='article'><div class='article_title'><div class='box_left'>" + data.title + "</div><div class='box_right'>" + data.date + "</div></div><p>" + data.content + "</p></div><br>";
        $(article).appendTo('#blog');
    });
});