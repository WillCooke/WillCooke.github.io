$.getJSON('blog.json', function(data){
    $.each(data.article, function(i, f) {
        var article = "<div class='article'><div class='article_title'><div class='box_left'>" + f.title + "</div><div class='box_right'>" + f.date + "</div></div><p>" + f.content + "</p></div><br>";
        $(article).appendTo('#blog');
    });
});