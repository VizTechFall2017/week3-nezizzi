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

console.log(classroom[1].age);*/


myCircle = {'cx':100 ,'cy':200, 'r':20, 'color':'blue'};

//data binding !
var myArray = [myCircle];

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(data){
        console.log(data.cx)
        return data.cx;
    })

    .attr('cy', function(d){
        console.log(d.cy)
        return d.cy
    })

    .attr('r', function(d){
        return d.r
    })

    .attr('fill', function(d){
        return d.color
    });