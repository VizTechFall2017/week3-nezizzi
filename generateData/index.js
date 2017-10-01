var svg = d3.select('svg');

/* Your code goes here */
/*var array = [ 'milk', 'eggs', 'bread', 'butter'];
 console.log(array[0]);

 var student = { 'name': 'Nicole', 'job': 'student', 'age': 25};

 console.log(student.age);

 var classroom = [{ 'name': 'Nicole', 'job': 'student', 'age': 25},
     { 'name': 'Nicole1', 'job': 'student1', 'age': 26},
     { 'name': 'Nicole2', 'job': 'student2', 'age': 27}
 ];

console.log(classroom);

console.log(classroom[1]);

console.log(classroom[1].age);


//*myCircle = {'cx':100 ,'cy':200, 'r':20, 'color':'blue'};

//data binding !
//var myArray = [myCircle];

var myArray = [myCircle,
    {'cx':40 ,'cy':200, 'r':20, 'color':'blue'},
    {'cx':60 ,'cy':200, 'r':20, 'color':'blue'},
    {'cx':80 ,'cy':200, 'r':20, 'color':'blue'},
    {'cx':100 ,'cy':200, 'r':20, 'color':'blue'}
];

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(data){
        //console.log(data.cx);
        return data.cx;
    })

    .attr('cy', function(d){
        //console.log(d.cy);
        return d.cy
    })

    .attr('r', function(d){
        return d.r
    })

    .attr('fill', function(d){
        return d.color
    }); */

/*myArray = [{}, {}, {}, {}, {}];

for (i = 0; i <5; i++){
    //console.log('circle'+i);
    //myArray[i].none = 'circle' + i;

    myArray[i].cx = i*100;
    myArray[i].cy = i*100;
    myArray[i].r = Math.random()*100;
}

console.log(myArray);

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(data){
        return data.cx;
    })
    .attr('cy', function(d){
        return d.cy
    })
    .attr('r', function(d){
        return d.r
    })
    .attr('fill', function(d){
        return d.color
    });*/

/*myArray = [{}, {}, {}, {}, {}];

myArray.forEach(function(element, i){
  element.cx= i *100;
  element.cy= i*100;
  element.r=20
});

console.log(myArray);*/


myArray = [];

for( i =0; i < 100; i++){
    var object = {cx: 400 * Math.random(), cy: 400 * Math.random(), r: 10};
    myArray.push(object);
}

console.log(myArray);


svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(data){
        return data.cx
    })
    .attr('cy', function(d){
        return d.cy
    })
    .attr('r', function(d){
        return d.r
    })
    .attr('fill', function(d){
        return d.color
    });
