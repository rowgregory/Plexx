var Game = {};

Game.Boot = function(game) {

};

Game.Boot.prototype = {

    init:function() {

        
        this.input.maxPointers = 1;

        this.state.disableVisibilityChange = true;
        
    },

    preload:function() {
        
        
        
        this.load.image('preloaderBar', '/images/loadingBar.jpg');
        
    
    },

    create:function() {
        
        this.state.start('Preloader');
        
    }
}