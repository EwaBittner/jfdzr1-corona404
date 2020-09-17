function fallingObjects() {
    function movedown() {

        var products = ['1.png', '1_flag.png', '2_flag.png', '4.png', '3points.png', 'pulapka.png', 'pulapka.png', 'pulapka.png']

        var player = document.getElementById("cart"),
            game = document.querySelector(".game")

        var product = document.createElement("div");
        product.classList.add('product');
        game.appendChild(product);

        var top = 0
        let randomPositionX = Math.floor(Math.random() * game.clientWidth);
        product.style.left = randomPositionX + "px";
        product.style.backgroundImage = "url(" + products[Math.floor(Math.random() * products.length)] + ")";


        function frame() {
            top++
            product.style.top = top * speed + 'px'
            var productPosition = product.getBoundingClientRect(),
                playerPosition = player.getBoundingClientRect()

            if (product.style.backgroundImage === 'url("1.png")' && productPosition.left < playerPosition.left + playerPosition.width &&
                productPosition.left + productPosition.width > playerPosition.left &&
                productPosition.top < playerPosition.top + playerPosition.height &&
                productPosition.height + productPosition.top > playerPosition.top) {
                clearInterval(id)
                product.remove();
                updateScore1()
                movedown()
                collectItem.play()
            } else {
                if (product.style.backgroundImage === 'url("1_flag.png")' && productPosition.left < playerPosition.left + playerPosition.width &&
                    productPosition.left + productPosition.width > playerPosition.left &&
                    productPosition.top < playerPosition.top + playerPosition.height &&
                    productPosition.height + productPosition.top > playerPosition.top) {
                    clearInterval(id)
                    product.remove();
                    updateScore2()
                    movedown()
                    collectItem.play()
                } else {
                    if (product.style.backgroundImage === 'url("2_flag.png")' && productPosition.left < playerPosition.left + playerPosition.width &&
                        productPosition.left + productPosition.width > playerPosition.left &&
                        productPosition.top < playerPosition.top + playerPosition.height &&
                        productPosition.height + productPosition.top > playerPosition.top) {
                        clearInterval(id)
                        product.remove();
                        updateScore3()
                        movedown()
                        collectItem.play()
                    } else {
                        if (product.style.backgroundImage === 'url("4.png")' && productPosition.left < playerPosition.left + playerPosition.width &&
                            productPosition.left + productPosition.width > playerPosition.left &&
                            productPosition.top < playerPosition.top + playerPosition.height &&
                            productPosition.height + productPosition.top > playerPosition.top) {
                            clearInterval(id)
                            product.remove();
                            updateScore4()
                            movedown()
                            collectItem.play()
                        } else {
                            if (product.style.backgroundImage === 'url("3points.png")' && productPosition.left < playerPosition.left + playerPosition.width &&
                                productPosition.left + productPosition.width > playerPosition.left &&
                                productPosition.top < playerPosition.top + playerPosition.height &&
                                productPosition.height + productPosition.top > playerPosition.top) {
                                clearInterval(id)
                                product.remove();
                                updateScore5()
                                movedown()
                                reward.play()
                            } else {
                                if (product.style.backgroundImage === 'url("pulapka.png")' && productPosition.left < playerPosition.left + playerPosition.width &&
                                    productPosition.left + productPosition.width > playerPosition.left &&
                                    productPosition.top < playerPosition.top + playerPosition.height &&
                                    productPosition.height + productPosition.top > playerPosition.top) {
                                    clearInterval(id)
                                    product.remove();
                                    movedown()
                                    lifeLost()
                                    bomb.play();

                                } else {
                                    if (top === game.clientHeight) {
                                        clearInterval(id);
                                        product.remove();
                                        movedown()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        var id = setInterval(frame, 1);

        var timer = document.querySelector(".timer").innerHTML;

        if (timer === "3:00") {
            speed = 1;
        } else {
            if (timer === "2:00") {
                speed = 1.3;
            } else {
                if (timer === "1:00") {
                    speed = 1.6;
                }
            }
        }

        if (timer === "0:00") {
            product.style.visibility = "hidden";
            clearTimeout(id);
        }
    }

    for (var i = 0; i < 4; i++) {
        movedown();
    }

    var score = 0

    function updateScore1() {
        score = score + 1;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".score-screen").innerHTML = "Score: " + score;
    }

    function updateScore2() {
        score = score + 2;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".score-screen").innerHTML = "Score: " + score;
    }

    function updateScore3() {
        score = score + 2;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".score-screen").innerHTML = "Score: " + score;
    }

    function updateScore4() {
        score = score + 1;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".score-screen").innerHTML = "Score: " + score;
    }

    function updateScore5() {
        score = score + 3;
        document.querySelector(".score").innerHTML = score;
        document.querySelector(".score-screen").innerHTML = "Score: " + score;
    }
}