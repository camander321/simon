import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Simon } from './simon';


function showColors(simon) {
  var id = setInterval(frame, 1000);
  var count = 0;

  function frame() {
    var jumbo = $('.jumbotron');
    jumbo.removeClass();
    jumbo.addClass("jumbotron");
    if (count === simon.colors.length) {
      clearInterval(id);
    }
    else {
      jumbo.addClass(simon.colors[count]);
      count++;
    }
  }
}


$(document).ready(function(){

  var simon = new Simon();
  simon.newRound();
  showColors(simon);

  $('button.red').click(function(){
    console.log(simon.checkInput('red'));
    if (simon.index === 0) {
      showColors(simon);
    }
  });

  $('button.blue').click(function(){
    console.log(simon.checkInput('blue'));
    if (simon.index === 0) {
      showColors(simon);
    }
  });

  $('button.green').click(function(){
    console.log(simon.checkInput('green'));
    if (simon.index === 0) {
      showColors(simon);
    }
  });

  $('button.yellow').click(function(){
    console.log(simon.checkInput('yellow'));
    if (simon.index === 0) {
      showColors(simon);
    }
  });

});
