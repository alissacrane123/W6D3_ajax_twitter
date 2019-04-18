const FollowToggle = require('./follow_toggle');
const APIUtil = require('./APIUtil');

$(() => {
  const $buttons = $('.follow-toggle');
  $buttons.each((_i, el) => {
    let $el = $(el)
    new FollowToggle($el)
  })
});
