function CatList(list) {
  this.list = list || [];
}

CatList.prototype.addCatAtTop = function(cat) {
  this.list.unshift(cat);
}

function localDate(str) {
  if (str) {
    var arr = str.split('-');
    var y = arr[0];
    var m = arr[1] -1;
    var d = arr[2];
    return new Date(y, m, d);
  }
}

function Cat(json) {
  Object.assign(this, json);
  this.dateOfBirth = localDate(this.born_on);
}

Cat.prototype.age = function() {
  // return how old this cat is based on d-o-b
}

Cat.create = function(cat) {
  return $.ajax({
    url:'https://stark-harbor-5038.herokuapp.com/cats',
    dataType: 'json',
    type: 'POST',
    data: cat
  }).then(function(response){
    return new Cat(response);
  })
}

Cat.all = function() {
  return $.get('https://stark-harbor-5038.herokuapp.com/cats')
  .then(function(response){
    return response.map(function(json){
      return new Cat(json);
    });
  });
}