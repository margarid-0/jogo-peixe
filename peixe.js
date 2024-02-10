var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var peixe 
var game = new Phaser.Game(config);
var grama 

function   preload() {
    this.load.image('fundo', 'assets/bg_azul-claro.png')
    this.load.image('logo', 'assets/logo-inteli_branco.png')
    this.load.image('peixe', 'assets/peixes/peixe_serio.png')
    this.load.image('grama', 'assets/transparent-grass-clipart-9.png')
    
}

function create() {
    this.add.image(400, 300, 'fundo')
    grama = this.add.image(500, 400, 'grama').setScale(0.5)

    this.add.image(400, 550, 'logo').setScale(0.5)
    
    peixe = this.add.image(400, 300, 'peixe')
    peixe.setFlip(true, false)
}   

function update() {

    peixe.x = this.input.x
    peixe.y = this.input.y

}



