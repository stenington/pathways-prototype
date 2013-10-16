Template.badgeItem.rendered = function () {
  console.log(this.data);
  $(this.firstNode).draggable({ snap: true }); 
};
