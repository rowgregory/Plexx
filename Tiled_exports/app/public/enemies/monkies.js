const EnemyYeti = function(index, game, x, y) {


    this.yeti = game.add.sprite(x,  y, 'monkey');
    game.physics.arcade.enable(this.yeti);
    this.yeti.body.bounce.y = 0.2;
    this.yeti.body.gravity.y = gravity;
    this.yeti.body.collideWorldBounds = true;
    this.yeti.body.velocity.x = -100;
    this.yeti.maxDistance = 200;
    this.yeti.maxDistance2 = 300;
    this.yeti.previousX = this.yeti.x;
    this.yeti.previousX2 = this.yeti.x + 20;
    this.yeti.anchor.setTo(0.5, 0.5);
    this.yeti.name = index.toString();
    this.yeti.animations.add('left', [0, 1, 2, 3,], 10, true);
    this.yeti.animations.add('turn', [4], 20, true);
    this.yeti.animations.add('right', [5, 6, 7, 8], 10, true);

};

module.exports = EnemyYeti;