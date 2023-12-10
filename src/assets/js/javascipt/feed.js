const feed_group_post = async (user_id, group_id, fb_dtsg, cursor) => {
  try {
    var urlencoded = new URLSearchParams();
    urlencoded.append("av", user_id);
    urlencoded.append("__user", user_id);
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "1");
    urlencoded.append("__hs", "19672.HYP:comet_pkg.2.1..2.1");
    urlencoded.append("dpr", "1.5");
    urlencoded.append("__ccg", "GOOD");
    urlencoded.append("__rev", "");
    urlencoded.append("__s", "");
    urlencoded.append("__hsi", "");
    urlencoded.append("__dyn", "");
    urlencoded.append("__csr", "");
    urlencoded.append("__comet_req", "15");
    urlencoded.append("__aaid", "0");
    urlencoded.append("server_timestamps", "true");
    urlencoded.append("fb_dtsg", fb_dtsg);
    urlencoded.append("fb_api_caller_class", "RelayModern");
    urlencoded.append(
      "fb_api_req_friendly_name:",
      "GroupsCometFeedRegularStoriesPaginationQuery"
    );
    urlencoded.append("doc_id", "8350149461667055");
    urlencoded.append(
      "variables",
      JSON.stringify({
        UFI2CommentsProvider_commentsKey:
          "CometGroupDiscussionRootSuccessQuery",
        count: 3,
        cursor: cursor,
        displayCommentsContextEnableComment: null,
        displayCommentsContextIsAdPreview: null,
        displayCommentsContextIsAggregatedShare: null,
        displayCommentsContextIsStorySet: null,
        displayCommentsFeedbackContext: null,
        feedLocation: "GROUP",
        feedType: "DISCUSSION",
        feedbackSource: 0,
        focusCommentID: null,
        privacySelectorRenderLocation: "COMET_STREAM",
        renderLocation: "group",
        scale: 1,
        sortingSetting: null,
        stream_initial_count: 1,
        useDefaultActor: false,
        id: group_id,
        __relay_internal__pv__IsWorkUserrelayprovider: false,
        __relay_internal__pv__IsMergQAPollsrelayprovider: false,
        __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider: false,
        __relay_internal__pv__CometUFIIsRTAEnabledrelayprovider: false,
        __relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider: true,
        __relay_internal__pv__StoriesRingrelayprovider: false,
      })
    );
    const data = await requestPost(
      urlencoded,
      "https://www.facebook.com/api/graphql/"
    );
    return data;
  } catch (error) {
    return null;
  }
};
async function get_request(url_request) {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let response = await fetch(url_request, requestOptions);
    return await response.json();
  } catch (error) {
    return "error";
  }
}
async function get_fb_dtsg() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let response = await fetch("https://m.facebook.com", requestOptions);
    if (response.status === 200) {
      var data = await response.text();
      var act_id = data.match('fb_dtsg" value="(.*?)"')[1];
      return act_id;
    } else {
      return "false";
    }
  } catch (error) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let response = await fetch("https://mbasic.facebook.com", requestOptions);
    if (response.status === 200) {
      var data = await response.text();
      var act_id = data.match('fb_dtsg" value="(.*?)"')[1];
      return act_id;
    } else {
      return "false";
    }
  }
}

const requestPost = async (body, url, profile_id = null) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
      redirect: "follow",
    };
    if (profile_id != null) {
      await changeProfileId(profile_id);
    }
    var kq = await fetch(url, requestOptions);
    return await kq.text();
  } catch (error) {
    return null;
  }
};
module.exports = {
  feed_group_post,
  get_fb_dtsg,
};
