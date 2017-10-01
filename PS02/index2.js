var svg = d3.select('svg');

d3.csv('./data.csv', function(data){


    svg.selectAll('rect1')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', function(d){
            return d.x
        })
        .attr('y', function(d){
            return d.y
        })
        .attr('height', function(d){
            return d.height
        })
        .attr('width', function(d){
            return d.width
        })
        .attr('stroke', function(d){
            return d.stroke
        })
        .attr('stroke-width', function(d){
            return d.strokeWidth
        })
        .attr('fill', function(d){
            return d.fill
        });

    svg.selectAll('rect1')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', function(d){
            return d.x
        })
        .attr('y', function(d){
            return d.y
        })
        .attr('height', function(d){
            return d.width
        })
        .attr('width', function(d){
            return d.height
        })
        .attr('stroke', function(d){
            return d.stroke
        })
        .attr('stroke-width', function(d){
            return d.strokeWidth
        })
        .attr('fill', function(d){
            return d.fill
        });

    svg.selectAll('rect1')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', function(d){
            return d.y
        })
        .attr('y', function(d){
            return d.x
        })
        .attr('height', function(d){
            return d.height
        })
        .attr('width', function(d){
            return d.width
        })
        .attr('stroke', function(d){
            return d.stroke
        })
        .attr('stroke-width', function(d){
            return d.strokeWidth
        })
        .attr('fill', function(d){
            return d.fill
        });


    svg.selectAll('rect1')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', function(d){
            return d.y
        })
        .attr('y', function(d){
            return d.x
        })
        .attr('height', function(d){
            return d.width
        })
        .attr('width', function(d){
            return d.height
        })
        .attr('stroke', function(d){
            return d.stroke
        })
        .attr('stroke-width', function(d){
            return d.strokeWidth
        })
        .attr('fill', function(d){
            return d.fill
        });



    svg.selectAll('circle1')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return d.x
        })
        .attr('cy', function(d){
            return d.y
        })
        .attr('r', function(d){
            return d.r
        })
        .attr('fill', function(d){
            return d.stroke
        })
        .attr('stroke', function(d){
            return d.fill
          })
        .attr('stroke-width', function(d) {
            return d.strokeWidth
        });

    svg.selectAll('circle2')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return d.y
        })
        .attr('cy', function(d){
            return d.x
        })
        .attr('r', function(d){
            return d.r
        })
        .attr('fill', function(d){
            return d.stroke
        })
        .attr('stroke', function(d){
            return d.fill
        })
        .attr('stroke-width', function(d) {
            return d.strokeWidth
        });




});

