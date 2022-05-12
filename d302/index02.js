

function main() {
// all d3 code goes here


// attribute
d3.select('.div01')
    .attr('class', 'div01PaddinAndMarginAndOutline')


// property
d3.select('.formOne input')
    .property('checked', true)

    d3.selectAll('.formTwo input')
    .property('checked', true)


// style
d3.select('.formOne')
    .style('padding', '1rem')
    .style('margin', '1rem')
    .style('outline', '1px dotted yellow')



// classed
d3.select('.formTwo')
    .classed('div01PaddinAndMarginAndOutline', true)



}

        