var svg = d3.select('svg');

randomArray = [];

for (i=0; i < 111; i++ ){
    lines = {x1:100*Math.random(), y1: Math.random(), x2:500, y2:500};
    randomArray.push(lines);
}

console.log(randomArray);

