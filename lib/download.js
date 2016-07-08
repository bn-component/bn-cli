var gitclone = require('git-clone');
var rm = require('rimraf').sync;

/**
 * Expose `download`.
 */

module.exports = download;

/**
 * Download `repo` to `dest` and callback `fn(err)`.
 *
 * @param {String} repo
 * @param {String} dest
 * @param {Function} fn
 */

function download(repo, dest, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts;
    opts = null;
  }
  opts = opts || {};
  var url = repo;

  gitclone(url, dest, { checkout: repo.checkout }, function(err) {
    if (err === undefined) {
      rm(dest + "/.git");
      fn();
    }
    else {
      fn(err);
    }
  });
}