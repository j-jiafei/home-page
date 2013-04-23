
// GET '/'
exports.index = function(req, res){
  res.render('index', {
    title: 'Jeff Jia'
    , activeTabId: 0
  });
};

// GET '/project'
exports.projects = function (req, res) {
  res.render('projects', {
    title: 'Jeff Jia - Projects'
    , activeTabId: 1
  });
};

// GET '/news'
exports.news = function (req, res) {
  res.render('news', {
    title: 'Jeff Jia - News'
    , activeTabId: 2
  });
};

// GET '/blog'
exports.blog = function (req, res) {
  res.render('blog', {
    title: 'Jeff Jia - Blog'
    , activeTabId: 3
  });
};

// GET '/gallery'
exports.gallery = function (req, res) {
  res.render('gallery', {
    title: 'Jeff Jia - Gallery'
    , activeTabId: 4
  });
};

// GET '/contact'
exports.contact = function (req, res) {
  res.render('contact', {
    title: 'Jeff Jia - Contact'
    , activeTabId: 5
  });
};
