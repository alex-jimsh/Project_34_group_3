const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// our stats 'every game has you look like idiot now'
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const PLAYER_SIZE = 50;
const OBSTACLE_SIZE = 50;
const OBSTACLE_SPEED = 9;
const PLAYER_SPEED = 6;
const FPS = 60;

// Colors = more color more cool just dont pick adhd ones
const WHITE = '#ffffff';
const RED = '#ff0000';
const GREEN = '#00ff00';
const BLACK = '#000000';

// no need for variables but it makes everything more sense like easier
// if u are lazy to explain it to bunch of dudes it better
let playerX = WIDTH / 2;
let playerY = HEIGHT - 2 * PLAYER_SIZE;
let playerDx = PLAYER_SPEED;
let playerDy = PLAYER_SPEED;
let obstacles = [];
let score = 0;
let running = true;

// wow scary obstacle incoming better start running it's going to crush you ohohoh
function addObstacle() {
    const xPos = Math.random() * (WIDTH - OBSTACLE_SIZE);
    const yPos = -OBSTACLE_SIZE;
    obstacles.push({ x: xPos, y: yPos });
}

// they gotta move such a buzz kill -_-
function moveObstacles() {
    obstacles.forEach(obs => obs.y += OBSTACLE_SPEED);
    obstacles = obstacles.filter(obs => obs.y <= HEIGHT);
}

// oh oh we die we die such a stupid game
function detectCollision(px, py, ox, oy) {
    return px < ox + OBSTACLE_SIZE &&
           px + PLAYER_SIZE > ox &&
           py < oy + OBSTACLE_SIZE &&
           py + PLAYER_SIZE > oy;
}

// now now hear me out on this one we dont have delusions we dont play game inside our heads
// player needs so actually see game to play so DRAW THAT SHIT ON SCREEN BRO -_-
function draw() {
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = GREEN;
    ctx.fillRect(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE);

    ctx.fillStyle = RED;
    obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, OBSTACLE_SIZE, OBSTACLE_SIZE));

    ctx.fillStyle = WHITE;
    ctx.font = '36px Arial';
    ctx.fillText(`Score: ${score}`, 10, 40);
}

// GAME LOOP if i dont know what game loop is please dont ask
// very basic but hard every game has it no game loop= no game
// basically if i dont sleep everyday u dont wake up everyday that's that 
function gameLoop() {
    if (!running) return;

    // player needs to move idk why more cool if u lose 100 times i will love take credits
    if (keys['ArrowLeft'] && playerX > 0) playerX -= playerDx;
    if (keys['ArrowRight'] && playerX < WIDTH - PLAYER_SIZE) playerX += playerDx;
    if (keys['ArrowUp'] && playerY > 0) playerY -= playerDy;
    if (keys['ArrowDown'] && playerY < HEIGHT - PLAYER_SIZE) playerY += playerDy;

    if (keys['a'] && playerX > 0) playerX -= playerDx;
    if (keys['d'] && playerX < WIDTH - PLAYER_SIZE) playerX += playerDx;
    if (keys['w'] && playerY > 0) playerY -= playerDy;
    if (keys['s'] && playerY < HEIGHT - PLAYER_SIZE) playerY += playerDy;

    // more obsticales so its not boring it's about probability so more cool more random
    // please dont ask this to simple
    if (Math.random() < 0.05) addObstacle();

    // if you get hit. IMAGINE u get hit and we know you did we caught you in 4K now you lose
    // and my text of shit talking to you will be displayed will go over that in a second
    moveObstacles();
    obstacles.forEach(obs => {
        if (detectCollision(playerX, playerY, obs.x, obs.y)) {
            running = false;
        }
    });

    //ohhh we are not playing in 0fps screen gotta update oohhh
    //i never knew this ooh tecnology
    draw();
    score++;

    // we need frames per sec =FPS you dumb fuck
    if (running) {
        requestAnimationFrame(gameLoop);
    } else {
        showGameOver();
    }
}

// HAHAHA YOU LOST NOW I WILL GET TO MAKE FUN OF YOU. IMAGINE LOSING IN JAVASCRIPT GAME
// FUN FACT I WROTE THIS IN PYGAME AND TOOK ME 25 MINS TO CHANGE IT FOR JAVASCRIPT
// AND I WILL SHAME YOU IN EVERY BACK-END LANGUAGE
function showGameOver() {
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = RED;
    ctx.font = '48px Arial';
    ctx.fillText("HAHAHAHAHA", WIDTH / 2 - 150, HEIGHT / 2 - 50);
    ctx.fillStyle = WHITE;
    ctx.font = '36px Arial';
    ctx.fillText("YOU LOST", WIDTH / 2 - 100, HEIGHT / 2);
    ctx.font = '24px Arial';
    ctx.fillText("TIME FOR YOUR PUNISHMENT", WIDTH / 2 - 150, HEIGHT / 2 + 50);
}

// controls so you dont have to use telecines to move god damn cube
const keys = {};
window.addEventListener('keydown', (e) => keys[e.key] = true);
window.addEventListener('keyup', (e) => keys[e.key] = false);

// i hate this part
// game starts here :((
gameLoop();
// worst choice of your life
