Game.MainMenu = function(game) {


};

Game.MainMenu.prototype = {

    create:function(game) {


    },

    update:function(game) {

    },

    createButton:function(game, string, x, y, w, h, callback) {

        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;

        var txt = game.add.text(button1.x, button1.y, string, {font:"14px Arial", fill
                                                            : "#fff", align:"center"});
        
    }
}