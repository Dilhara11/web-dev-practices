<?php 
$age = 25; //variable
$name = "Achintha";
$price = 12.99;

define("SITE_NAME", "MyWebsite"); // constant

echo "Name: $name, Age: $age, Price: $price\n";
echo "Website: " .SITE_NAME ."\n";


// conditionals

// if statement

$score = 85;

if($score >= 90){
    echo "Grade: A\n";
}elseif($score){
    echo "Gradee: B\n";
}else{
    echo "Grade: C\n";
}

// switch statement
$day = "Monday";
switch($day){
    case 'Monday':
        echo "Start of the week!\n";
        break;
    case 'Friday':
        echo "Weekend is near!\n";
        break;
    default:
        echo "It's a regular day!\n";
}

$day = "Friday";

$statement = match ($day) {
    'Monday'=> "Sart of the week\n",
    'Friday'=> "Weekend is near\n",
    default => "It's a regular day\n"
};

echo $statement;


// loops
// for loop

for($i = 1; $i < 5; $i++) echo "Number: $i\n";

//while loop
$x = 1;
while($x <= 3){
    echo "Count: $x\n";
    $x++;
}

$colors = ["Red", "Green", "Blue"];
foreach($colors as $color){
    echo "Color: $color\n";
}

//functions and scope
function greet($name){
    return "hello, $name \n";
}

echo greet("Achintha");

function counter(){
    static $count = 0; //static variables retain count 
    $count++;
    return $count;
}

echo "\nCounter: " .counter();
echo "\nCounter: " .counter();

//lambda expression
$hello = function($name){
    return "Hello, $name";
};

echo $hello("Dilhara")."\n";

$multiplier = 3;
// if lambda function need variable from outside its scope,
// need to use *Use* Keyword
// but when we use arrow function no need do so
$multiply = function($num) use ($multiplier){
    return $num * $multiplier;
};

echo $multiply(5)."\n";

//returning a lamda function
function getMultiplier($factor){
    return function($num) use ($factor) {
        return $num * $factor;
    };
}

$double = getMultiplier(5);
echo $double(10)."\n";

// arrow function (use of lamda expression, much shorter)
$double = fn($x) => $x * 2;

echo $double(2)."\n"; 

//in here no need to use *USE* 

$multiply = fn($num) => $num * $multiplier;

echo $multiplier."\n";

//returning lamda arrow funcion
function getMultiplier1($factor){
    return fn($num) => $num * $factor;
}

 $quardaple = getMultiplier1(4);
 echo $quardaple(10)."\n";

//in array map

$numbers = [1, 2, 3, 4];

$squared = array_map(fn($n) => $n * $n, $numbers);

print_r($squared);

//multiple parameters 

$sum = fn($a, $b) => $a + $b;

echo $sum(10, 20)."\n";
?>