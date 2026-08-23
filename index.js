function slugify(t) { return t.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/[\s_-]+/g, '-'); }
module.exports = slugify;
