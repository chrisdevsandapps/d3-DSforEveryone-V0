

function main() {
// all d3 code goes here


// change text inside first paragraph
d3.select('.div01 p')
    .text('this is first paragraph inside div01')

d3.select('.div02 p')
    .text('this is first paragraph inside div02')


// append
d3.select('.div01')
    .append('p')
    .text('hello there')
    .append('p')
    .text('wazzup')


// insert
d3.select('.div02')
    .insert('p')
    .text('inserted paragraph here')
    .style('color', 'orange')    


// remove first element
d3.select('.div03 p')
    .remove()


// insert html
d3.select('.div03 p')
    .html('<span>haha i am inserted here!</span>')

// insert html
d3.select('.div03')
    .html('<p>hello there! this is a new html inserted</p>')

}