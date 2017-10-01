var svg = d3.select('svg');

myArray = [];

for ( i =0; i < 1111; i++ ){
    var dizzy = {x1: 1000 * Math.random(), y1: 1000* Math.random(), x2: 500, y2: 500};
    myArray.push(dizzy);
}

svg.selectAll('RADIAL')
    .data(myArray).enter()
    .append('line')
    .attr('x1',function(d){
        return d.x1
    })
    .attr('x2',function(d){
        return d.x2
    })
    .attr('y1', function(d){
        return d.y1
    })
    .attr('y2', function(d){
        return d.y2
    })
    .attr('stroke','purple');


myArray2 = [];

var horz = 10;
var vert= 10;
var Ht = 10;
var wd = 10;


for( i =0; i < 111; i++){
    var rect = {x: horz  , y: vert , height: Ht, width: wd};
    horz = horz + 1;
    vert= vert + 1;
    Ht = Ht + 1;
    wd = wd + 1;
    console.log(vert);
    myArray2.push(rect);
}

console.log(myArray2);

svg.selectAll('ORTHOGONAL')
    .data(myArray2)
    .enter()
    .append('rect')
    .attr('cx', function(d){
        return d.x
    })
    .attr('cy', function(d){
        return d.y
    })
    .attr('height', function(d){
        return d.height
    })
    .attr('width', function(d){
        return d.width
    })
    .attr('fill', 'grey');
