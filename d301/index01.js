

function main() {
// all d3 code goes here

d3.select('p')
    .style('color', 'salmon')


d3.selectAll('.div01 p')
    .style('background-color', 'blue')

d3.select('.div01')
    .style('padding', '1rem')
    .style('margin', '1rem')
    .style('outline', '1px dotted red')




d3.select('.div02')
    .style('padding', '1rem')
    .style('margin', '1rem')
    .style('outline', '1px dotted red')



d3.select('.div03 tr')
    .selectAll('td')
    .style('background-color', 'blue')

d3.select('.div03')
    .selectAll('td')
    .style('padding', '1rem')
    .style('outline', '1px dotted yellow')



}