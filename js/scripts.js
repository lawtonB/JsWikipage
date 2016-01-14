
$(function() {
  var languages = ['<a href="markdown.html">Markdown</a>','<a href="block.html">Block elements</a>','<a href="inline.html">Inline elements</a>','<a href="css.html">CSS</a>','<a href="bootstrap.html">Bootstrap</a>','<a href="divspan.html">Divs and spans</a>','<a href="floats.html">Floats</a>','<a href="boxmodel.html">Box model</a>','<a href="cascading.html">Cascading styles</a>','<a href="grid.html">Grid system</a>','<a href="responsive.html">Responsive design</a>','<a href="javascript.html">JavaScript (JS) arithmetic</a>','<a href="js_variable.html">JS variables</a>','<a href="js_method.html">JS methods</a>','<a href="js_string.html">JS strings</a>','<a href="js_function.html">JS functions</a>','<a href="DOM.html">DOM manipulation and traversal</a>','<a href="form.html">Forms</a>','<a href="attributes.html">Attributes</a>','<a href="branching.html">Branching</a>','<a href="arrays.html">Arrays</a>','<a href="looping.html">Looping</a>'];

  languages.forEach(function(language) {
    $(".list").append('<p>' + language + '</p>');
});
});
