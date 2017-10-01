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

