var newsOl = d3.select('#newslist');
d3.json('/content/news.json', function (err, data) {
  data.sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
  var item = newsOl.selectAll('li')
      .data(data)
    .enter().append('li');

  item.append('p')
    .classed('news-content', true)
    .text(function (i) { return i.content; });

  item.append('p')
    .classed('news-date', true)
    .text(function (i) { return i.date; });
});

var projectsDiv = d3.select('#projects');
d3.json('/content/projects.json', function (err, data) {
  var section = projectsDiv.selectAll('div')
      .data(data)
    .enter().append('div')
    .each(function (s, i) {
      d3.select(this).append('h4').text(s.title);
      d3.select(this).append('div')
      .classed('projectlist')
      .selectAll('div')
      .data(s.projects)
      .enter().append('div');
    });
});
