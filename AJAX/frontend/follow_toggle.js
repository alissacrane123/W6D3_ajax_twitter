const APIUtil = require('./APIUtil');

class FollowToggle {
  constructor($el) {
    this.userId = $el.attr('data-user-id');
    this.followState = $el.attr('data-initial-follow-state');
    this.$el = $el;
    this.render();
    $el.on('click', (e) => {
      e.preventDefault();
      this.handleClick();
    })
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text('Follow!');
      this.$el.prop('disabled', false);

    } else if (this.followState === "followed") {
      this.$el.text('Unfollow!');
      this.$el.prop('disabled', false);

    } else if (this.followState === "following") {
      this.$el.prop('disabled', true);
      this.$el.text('following');
    } else {
      this.$el.prop('disabled', true);
      this.$el.text('unfollowing');
    }
  }


  handleClick() {
    if (this.followState === "unfollowed") {
      this.followState = "following"
      APIUtil.followUser(this.userId).then((res) => {
        this.followState = 'followed';
        this.render();
      });
    } else {
      this.followState = "unfollowing"
      APIUtil.unfollowUser(this.userId).then((res) => {
        this.followState = 'unfollowed';
        this.render();
      });
    }
    this.render();
  }

}


module.exports = FollowToggle;