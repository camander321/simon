export function Simon() {
  this.colors = [];
  this.index = 0;

  this.newRound = function() {
    this.index = 0;
    this.colors.push(this.getColor());
  };

  this.checkInput = function(input) {
    var result = input === this.colors[this.index];
    this.index++;
    if (this.index === this.colors.length) {
      this.newRound();
    }
    return result;
  };

  this.getColor = function() {
    var result = ['red', 'green', 'blue', 'yellow'][Math.floor(Math.random() * 4)];
    console.log(result);
    return result;
  };
}
