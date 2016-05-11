function View() {
  $('#new-cat-form').on('submit', this.handleFormEvent.bind(this));
}

View.prototype.handleFormEvent = function(event) {
  event.preventDefault();
  var params = {
    name: $('#name').val(),
    born_on: $('#born_on').val(),
    breed_id: $('#breed_id').val(),
    image_url: $('#image_url').val()
  };
  this.controller.addCat(params);
}

View.prototype.showCats = function(catList) {
  var src = $('#tmpl').html();
  var compiledTemplate = Handlebars.compile(src);
  var output = compiledTemplate({cats: catList.list});
  $('#cat-div').html(output);
}