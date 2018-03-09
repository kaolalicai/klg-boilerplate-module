'use strict';

module.exports = {
  name: {
    desc: 'project name',
  },
  description: {
    desc: 'project description',
  },
  author: {
    desc: 'project author',
  }
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
