import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Simon } from './simon';

function disableButtons(boolean){
  $('button.red').prop('disabled', boolean);
  $('button.yellow').prop('disabled', boolean);
  $('button.green').prop('disabled', boolean);
  $('button.blue').prop('disabled', boolean);
}

function meanOutput(color, simon){
  if (!simon.checkInput(color)) {
    $('#output').text("Try not to be so awful next time.");
    disableButtons(true);
  }
  else if (simon.index === 0)
    showColors(simon);
}


function showColors(simon) {
  var id = setInterval(frame, 500 + 500/simon.colors.length);
  var count = 0;
  disableButtons(true);
  function frame() {
    var jumbo = $('.jumbotron');
    jumbo.removeClass();
    jumbo.addClass("jumbotron");
    if (count === simon.colors.length * 2) {
      clearInterval(id);
      disableButtons(false);
    }
    else if (count % 2 == 0) {
      jumbo.addClass(simon.colors[count / 2]);
    }
    count++;
  }
}

$(document).ready(function(){
  var simon;
  disableButtons(true);
  $('#play').click(function(){
    simon = new Simon();
    simon.newRound();
    showColors(simon);
  });

  $('button.red').click(function(){
    meanOutput('red', simon);
  });

  $('button.blue').click(function(){
    meanOutput('blue', simon);
  });

  $('button.green').click(function(){
    meanOutput('green', simon);
  });

  $('button.yellow').click(function(){
    meanOutput('yellow', simon);
  });

});
