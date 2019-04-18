const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json',
      // success: (res) => {
      //   this.followState = "true";
      //   this.render();
      // }
    })
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json',
      // success: (res) => {
      //   this.followState = "false";
      //   this.render();
      // }
    })
  }
}

module.exports = APIUtil;