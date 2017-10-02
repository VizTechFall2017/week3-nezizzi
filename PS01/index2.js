var svg = d3.select('svg');


myArray3 = [];

for ( i =0; i < 4000; i++ ){
    var dizzy3 = {x1: 1000 * Math.random(), y1: 1000* Math.random(), x2: 500, y2: 500};
    myArray3.push(dizzy3);
}

svg.selectAll('RADIAL3')
    .data(myArray3).enter()
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
    .attr('stroke','#424949');


myArray2 = [];

for ( i =0; i < 1111; i++ ){
    var dizzy2 = {x2: 1000 * Math.random(), y2: 1000* Math.random(), x1: 500, y1: 500};
    myArray2.push(dizzy2);
}

svg.selectAll('RADIAL2')
    .data(myArray2).enter()
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
    .attr('stroke','#7F8C8D');


myArray = [];

for ( i =0; i < 400; i++ ){
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



