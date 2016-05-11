function Controller(catList, view) {
  this.catList = catList;
  this.view = view;
  this.index();
}

Controller.prototype.index = function() {
  Cat.all().then(function(arrayOfCats){
    this.catList = new CatList(arrayOfCats);
    this.view.showCats(this.catList);
  }.bind(this));
};

Controller.prototype.addCat = function(params) {
  var c = new Cat(params);
  Cat.create(c).then(function(newlySavedCat){
    this.catList.addCatAtTop(newlySavedCat);
    this.view.showCats(this.catList);
  }.bind(this));
};


$(document).ready(function(){
  var cl = new CatList();
  var v = new View();
  var c = new Controller(cl, v);
  v.controller = c;
});


