//Sintaxe function:

const Avatar = function(_x, _y, _coin){
    position_x = _x;
    position_y = _y;
    bag = _coin

    //setter
    function setPosition_x(move_x) {
        position_x = position_x + move_x;
        return position_x
    }

    function setPosition_y(move_y) {
        position_y = position_y + move_y;
        return position_y
    }

    function setCoin(newCoin) {
        bag = bag + newCoin;
        return bag
    }

    function Forward() {
        return setPosition_y(1);
    }
    
    function Back() {
        if(position_y>0){
            return setPosition_y(-1);
        }
        else{
            return "Unable to move to this position"
        }
    }
    
    function Right() {
        return setPosition_x(1);
    }
    
    function Left() {
        if(position_y>0){
            return setPosition_x(-1);
        }
        else{
            return "Unable to move to this position"
        }
    }

    function addCoin() {
        return setCoin(1);
    }

    //getter 
    function getPosition_x() {
       return position_x
    }

    function getPosition_y() {
        return position_y
    }
    function getCoin() {
        return bag
    }

    return {Forward, Back, Right, Left, setCoin, addCoin, getPosition_x, getPosition_y, getCoin}
}

const infos = new Avatar(15, 20, 0 )

//Initial Position
console.log(infos.getPosition_x())
console.log(infos.getPosition_y())
console.log(infos.getCoin())

//Move forward
console.log(`Moved forward one square, new position: ${infos.Forward()}`)

//Move back
console.log(`Moved back one square, new position: ${infos.Back()}`)

//Move right
console.log(`Moved right one square, new position: ${infos.Right()}`)

//Move left
console.log(`Moved left one square, new position: ${infos.Left()}`)

//Find coin
console.log(`Found a coin, new amount of coins in the bag: ${infos.addCoin()}`)


//Sintaxe class:
class Avatar2 {
    constructor(_x, _y, _coin){
        this.x = _x;
        this.y = _y;
        this.coin = _coin;
    }
    initialPosition(){
        console.log(`Initial position x = ${this.x}`)
        console.log(`Initial position y = ${this.y}`)
        console.log(`Initial coins = ${this.coin}`)
    }
    move_x(value){
            this.x = this.x + value
        if(this.x>0){
            return this.x 
        }
        else{
            return "Unable to move to this position"
        }
    }
    move_y(value){
        this.y = this.y + value
    if(this.y>0){
        return this.y 
    }
    else{
        return "Unable to move to this position"
    }
}
}

const infos2 = new Avatar2 (30, 30, 0)

infos2.initialPosition();

console.log(`Moving 5 spaces to the right, new position: ${infos2.move_x(5)}`)

console.log(`Error moving to negative position: ${infos2.move_x(-35)}`)

