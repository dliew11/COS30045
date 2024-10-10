function init() {

    var w = 600;
    var h = 250;

    var maxValue = 30;

    var dataset = [24, 10, 29, 19, 8, 15, 20, 12, 9, 6,21, 28];
   
    var xScale = d3.scaleBand()
                   .domain(d3.range(dataset.length))
                   .rangeRound([0, w])
                   .paddingInner(0.05);

    var yScale = d3.scaleLinear()
                   .domain([0, d3.max(dataset)])
                   .range([0, h]);

    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)   //total length
                .attr("height", h) //total height
                .style("background-color", "powderblue");

    //Update
    d3.select("#update")
    .on("click", function() {
        //alert("Hey, the button works!")
        var numValues = dataset.length;
        
        dataset = [];
        
        for (var i = 0; i < numValues; i++) {
            var newNumber = Math.floor(Math.random() * maxValue);
            dataset.push(newNumber); 
        }

        svg.selectAll("rect")
           .data(dataset)
           .transition()
           .delay(function (d, i) {
               return i / dataset.length * 1000;
           })
           .duration(function(d, i) {
               return i* 100;
           })
           .ease(d3.easeCircleIn)
           // .attr("x", function(d, i) {                
           //     return xScale(i);
           // })
           .attr("y", function(d) {
               return h - yScale(d);
           })
           // .attr("width", xScale.bandwidth())
           .attr("height", function(d) {
               return yScale(d);
           })
           .attr("fill", function(d) {
               return "rgb(" + (d * 10) + ", 0, 0)";
           });

           svg.selectAll("text")
           .data(dataset)
           .text(function(d) {
               return d;
           })
           .attr("x", function(d, i) {
               return xScale(i) + xScale.bandwidth() / 2;
           })
           .attr("y", function(d) {
               return h - yScale(d) + 14;
           })
           .attr("fill", "white")
           .attr("text-anchor", "middle");
    });

    //Transition 1
    d3.select("#transition1")
    .on("click", function() {
        var numValues = dataset.length;

        dataset = [];
        
        for (var i = 0; i < numValues; i++) {
            var newNumber = Math.floor(Math.random() * maxValue);
            dataset.push(newNumber); 
        }

        svg.selectAll("rect")
           .data(dataset)
           .transition()
           .duration(500)
           .ease(d3.easeCircleOut)
           // .attr("x", function(d, i) {                
           //     return xScale(i);
           // })
           .attr("y", function(d) {
            return h - yScale(d);
           })
           // .attr("width", xScale.bandwidth())
           .attr("height", function(d) {
               return yScale(d);
           })
           .attr("fill", function(d) {
               return "rgb(150, 0, " + (d * 10) + ")";
           });

           svg.selectAll("text")
           .data(dataset)
           .text(function(d) {
               return d;
           })
           .attr("x", function(d, i) {
               return xScale(i) + xScale.bandwidth() / 2;
           })
           .attr("y", function(d) {
               return h - yScale(d) + 14;
           })
           .attr("fill", "white")
           .attr("text-anchor", "middle");           
    });

    //Transition 2
    d3.select("#transition2")
    .on("click", function() {
        var numValues = dataset.length;

        dataset = [];
        
        for (var i = 0; i < numValues; i++) {
            var newNumber = Math.floor(Math.random() * maxValue);
            dataset.push(newNumber); 
        }

        svg.selectAll("rect")
           .data(dataset)
           // Apply a transition effect to the selected elements
           .transition()
           // Set a delay of 1000 milliseconds (1 second) before starting the transition
           .delay(1000)
           // Set the duration of the transition to 2000 milliseconds (2 seconds)
           .duration(2000)
           // Use the 'easeElasticOut' easing function to create a bouncing effect at the end of the transition
           .ease(d3.easeElasticOut)
           // .attr("x", function(d, i) {                
           //     return xScale(i);
           // })
           .attr("y", function(d) {
               return h - yScale(d);
           })
           // .attr("width", xScale.bandwidth())
           .attr("height", function(d) {
               return yScale(d);
           })
           .attr("fill", function(d) {
               return "rgb(150, 0, " + (d * 10) + ")";
           });

        svg.selectAll("text")
           .data(dataset)
           .text(function(d) {
               return d;
           })
           .attr("x", function(d, i) {
               return xScale(i) + xScale.bandwidth() / 2;
           })
           .attr("y", function(d) {
               return h - yScale(d) + 14;
           })
           .attr("fill", "white")
           .attr("text-anchor", "middle");
    });

    svg.selectAll("rect")
        .data(dataset)
        .enter()            
        .append("rect")
        .attr("x", function(d, i) {                
            return xScale(i);
        })
        .attr("y", function(d) {
            return h - yScale(d);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) {
            return yScale(d);
        })
        .attr("fill", function(d) {
            return "rgb(150, 0, " + (d * 10) + ")";
        });

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text(function(d) {
           return d;
       })
       .attr("x", function(d, i) {
           return xScale(i) + xScale.bandwidth() / 2;
       })
       .attr("y", function(d) {
           return h - yScale(d) + 14;
       })
       .attr("fill", "white")
       .attr("text-anchor", "middle");
}

window.onload = init;