var svg = d3.select('svg');

randomArray = [];

for ( i =0; i < 111; i++ ){
    var dizzy = {x1: 100 * Math.random(), y1: 100* Math.random(), x2: 500, y2: 500};
    randomArray.push(dizzy);
}


svg.selectAll('line')
    .data(randomArray)
    .enter()
    .append('line')
    .attr('x1', function(d){
        console.log(x1);
        return d.x1
    })
    .attr('x2', function(d){
        return d.x2
    })
    .attr('y1', function(d){
        return d.y1
    })
    .attr('y2', function(d){
        return d.y2
    });

