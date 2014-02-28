var newsOl = d3.select('#newslist');
d3.json('/content/news.json', function (err, data) {
  data.sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
  var item = newsOl.selectAll('li')
      .data(data)
    .enter().append('li')
      .classed('news-item', true);

  item.append('p')
    .classed('news-content', true)
    .text(function (i) { return i.content; });

  item.append('p')
    .classed('news-date', true)
    .text(function (i) { return i.date; });
});

var projectsDiv = d3.select('#projects');
d3.json('/content/projects.json', function (err, data) {
    console.log(data);
  // binding sections.
  var section = projectsDiv.selectAll('div.proj-sec')
      .data(data)
    .enter().append('div')
      .classed('proj-sec', true);
  section.append('h4').attr('class', 'proj-sec-title').text(function (d) { return d.title; });
  // binding projects for each section.
  var project = section.selectAll('div.proj')
      .data(function (d) { return d.projects; })
    .enter().append('div')
      .classed('proj', true);
  project.append('h5').attr('class', 'proj-title').text(function (d) { return d.title; });
  var projectDate = project.append('p').attr('class', 'proj-date');
  projectDate.append('span').attr('class', 'proj-start').text(function (d) { return d.startdate; });
  projectDate.append('span').attr('class', 'proj-end').text(function (d) { return d.enddate; });
  var projectOrg = project.append('p').attr('class', 'proj-org');
  projectOrg.append('span').attr('class', 'proj-team').text(function (d) { return d.team; });
  projectOrg.append('span').attr('class', 'proj-company').text(function (d) { return d.company; });
  project.selectAll('p.proj-desc')
      .data(function (d) { return d.description; })
    .enter().append('p')
      .classed('proj-desc', true)
      .text(function (d) { return d; });
});
