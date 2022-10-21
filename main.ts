controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . c a c b a c b b a c . . . . 
    . . . . . c b . . c c . . . . . 
    . . . . . a b . . . . . . . . . 
    . . . . c b c b b c . . . . . . 
    . . . e c c b a c a 6 . . . . . 
    . e 4 c a c b 9 6 6 6 6 . . . . 
    . 2 5 c b b a 6 9 6 6 6 . . . . 
    . . 2 5 c c b b b c 6 . . . . . 
    . . . e c b a c a c . . . . . . 
    . . . . . b c . . . . . . . . . 
    . . . . . c a . . c c . . . . . 
    . . c a c b b b c b a c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(mySprite, 100, 100)
effects.blizzard.startScreenEffect()
music.pewPew.play()
otherSprite.destroy(effects.fire, 100)
info.changeLifeBy(-1)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b b b b b b b 
        . . . . . . . . . b b . . . . . 
        . . . . . . . . . b b . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . . . . b b b b b 2 . . . 
        . . . . . . . 9 9 b b b b . . . 
        . . . . . . . 9 9 b b b b . . . 
        . . . . . . . b b b b b 2 . . . 
        . . . . . . . . b b b b . . . . 
        . . . . . . . . . b b . . . . . 
        . . . . . . . . . b b . . . . . 
        . . . . b b b b b b b b b b b b 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setVelocity(-100, 0)
    mySprite2.setPosition(180, randint(10, 110))
})
