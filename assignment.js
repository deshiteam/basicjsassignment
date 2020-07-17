// 1st Problem Solved => Converting Feet To Mile
function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}
var mile = feetToMile(52000);
    if(mile <0){
        console.log("Distance can't be negative value. Please input postive Value");
    }
    else if(mile <1){
        console.log("This is very small value. It's not ZERO but near to ZERO " + mile.toFixed(5));
    
    }
    else{
        console.log(mile.toFixed(2) + " Mile");
    }





//2nd Problem Solved => Wood Calculation

//When chair need 1 cubic feet, Table Need 3 cubic feet  and Bed Need 5 cubic feet
function woodCalculator(chair, table, bed) {
    var totalWood = chair*1 + table*3 + bed*5;
    return totalWood;
}

    totalWood = woodCalculator(10,10,10);
    console.log("You Need " + totalWood + " Cubic Feet Wood")



    
//3rd Problem Solved => Bricks cCalculator
   
function brickCaculator(floor){
        if(floor <= 10){
        var totalBricks = floor*15000;
            return totalBricks;
        }
        else if(floor > 10 && floor <= 20){
        var  extraFloor = floor-10;
        var  highBuildingBricks = extraFloor*12000;
           highBuildingTotalBricks = highBuildingBricks + 150000;
           return highBuildingTotalBricks;
        }
        
        else if(floor > 20){
        var topFloor = floor-20;
        var topBuildingBricks = topFloor*10000;
            topBuildingTotalBricks = topBuildingBricks + 270000;
            return topBuildingTotalBricks;
        }
}

    bricksTotal = brickCaculator(30);
    console.log("You need Total " + bricksTotal + " Bricks");



    // 4th Problem Solved => Tiny Friend

function tinyFriend(friends){
        var smallName = friends[0];
        for( var i= 0; i<friends.length; i++){
            var nameItem = friends[i];
            if(nameItem.length<friends.length){
                smallName= nameItem;
            }
            
        }
        return smallName;
}
   var tinyName = tinyFriend(["shohag", "joy", "Shanto" ,"Shuvo", "Abdullah"]);
   console.log("Your Tiny Friend is " + tinyName);