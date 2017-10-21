
var margin = {
	top: 10,
	bottom: 10,
	left: 20,
	right: 10
}

var height = 600 - margin.bottom - margin.top;

var svg = d3.select('.chart-container').append('svg')
														.attr('id', 'chart')
														.attr('height', height)
														.attr('width', width);

function dataReceiver(data) {

	var x = d3.scale.linear()
									.domain([0, d3.max(data)['C']])
									.range([0, width]);

	var y = d3.scale.linear()
									.domain([0, data.length])
									.range([0, height]);

	function plot(params) {

		this.selectAll('.bar')
				.data(data)
				.enter()
						.append('rect')
						.classed('bar', true)
						.attr('x', 0)
						.attr('y', function(d,i) {
							return y(i);
						})
						.attr('width',function(d,i) {
							return x(d['C']);
						})
						.attr('height', function(d,i) {
							return y(1)-1;
						})
	}

	plot.call(svg, {
		data: data
	})

}
