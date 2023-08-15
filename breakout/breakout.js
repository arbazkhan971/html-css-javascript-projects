const canvas = document.getElementById("breakout");
const ctx = canvas.getContext("2d");
console.log(canvas)
console.log(canvas.width)
console.log(canvas.height)
let score= 0;
// ball
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 10;
let ballSpeedX = 2;
let ballSpeedY = 2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0395DD";
    ctx.fill();
    ctx.strokeStyle = "#0395DD";
    ctx.stroke();
    ctx.closePath();
}


// paddle
let paddleHeight = 20;
let paddleWidth = 100;
let paddleX = canvas.width/2 - paddleWidth/2;
let paddleY = canvas.height - paddleHeight - 10;
let paddleSpeed = 15;

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0395DD";
    ctx.fill();
    ctx.strokeStyle = "#0395DD";
    ctx.stroke();
    ctx.closePath();
}

// Bricks
let brickRowCount = 6;
let brickColumnCount = 10;
let brickWidth = 75;
let brickHeight = 20;
let marginFromTop = 30;
let marginFromLeft = 30;
let brickPadding = 10;
let bricks = [];
for(let c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    for(let r = 0; r < brickRowCount; r++){
        bricks[c][r] = {x: 0, y: 0, alive:1};
    }
}

function drawBricks(){
    for(let c=0; c < brickColumnCount; c++){
        for(let r=0; r < brickRowCount; r++){
            if( bricks[c][r].alive === 1){
                let brickx = (c * (brickWidth + brickPadding)) + marginFromLeft; 
                let bricky = (r * (brickHeight + brickPadding)) + marginFromTop;
                console.log(brickx, bricky);
                bricks[c][r].x = brickx;
                bricks[c][r].y = bricky;
                ctx.beginPath();
                ctx.rect(brickx, bricky, brickWidth, brickHeight);
                ctx.fillStyle = "#0395DD";
                ctx.fill();
                ctx.strokeStyle = "#0395DD";
            }
        }
    }
}

function detectCollision(){
    for(let c= 0; c < brickColumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
            let b = bricks[c][r];
            if( b.alive === 1){
                if( ballX > b.x && ballY > b.y && ballX < b.x + brickWidth && ballY < b.y + brickHeight ){
                    bricks[c][r].alive = 0;
                    ballSpeedY = - ballSpeedY;
                    score++;
                }               
            }
        }
    }
}

//score
function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0395DD";
    ctx.fillText("Score: "+ score, 800, 20);
}


document.addEventListener("keydown", handleKey);
document.addEventListener("keyup", handleKey);

function handleKey(e){
    console.log(e);
    console.log(e.key)

    if( e.key === "ArrowLeft" && paddleX > 0){
        console.log("left");
        paddleX -= paddleSpeed;
    } else if( e.key === "ArrowRight" && paddleX + paddleWidth < canvas.width ){
        console.log("right");
        paddleX += paddleSpeed;
    }
}


function gameStart(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
    detectCollision();
    console.log("helloo")

    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if( ballY - ballRadius < 0){
        ballSpeedY = - ballSpeedY;
    }
    if(ballY + ballRadius > canvas.height){
        document.location.reload();
    }
    if(ballX + ballRadius > canvas.width || ballX - ballRadius < 0){
        ballSpeedX = - ballSpeedX;
    }

    if( ballX + ballRadius > paddleX && ballY + ballRadius> paddleY && ballX + ballRadius < paddleX + paddleWidth){
        ballSpeedY = - ballSpeedY;
    }


    requestAnimationFrame(gameStart);
}

gameStart();