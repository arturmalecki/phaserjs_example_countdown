var game = new Phaser.Game(300, 300, Phaser.CANVAS, "countdown", { create: create } ),
    timer = 10,
    countDownText, timerEvent;


function create() {
  timerEvent = this.time.events.loop(Phaser.Timer.SECOND, updateTimer);
  countDownText = this.add.text(0, 100, timer, { font: "65px Arial", fill: "#ff0044", align: "center" });

  this.scale.pageAlignHorizontally = true;

  centerCountDownText();
}

function updateTimer() {
  timer -= 1;
  if(timer === 0) {
    //To remove event:
    //game.time.events.remove(timerEvent);
    timer = 11;
    countDownText.setText("DONE");
  } else {
    countDownText.setText(timer);
  }
  centerCountDownText();
}

function centerCountDownText() {
  countDownText.x = (game.width / 2) - (countDownText.width / 2);
}
