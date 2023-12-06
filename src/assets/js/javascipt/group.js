const load_pending_post = async (fb_dtsg, user_id, group_id) => {
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
      "GroupsCometPendingPostsPostsSearchSectionQuery"
    );
    urlencoded.append("doc_id", "7738778429470816");
    urlencoded.append(
      "variables",
      JSON.stringify({
        afterTime: 0,
        authorID: null,
        beforeTime: 0,
        groupID: group_id,
        linkType: null,
        orderBy: null,
        postType: null,
        search: "",
        source: null,
        subgroupIDs: null,
        UFI2CommentsProvider_commentsKey: "GroupsCometPendingPostsContent",
        feedbackSource: 0,
        feedLocation: "GROUP_PENDING",
        privacySelectorRenderLocation: "COMET_STREAM",
        renderLocation: "group_pending_queue",
        scale: 1,
        __relay_internal__pv__IsWorkUserrelayprovider: false,
        __relay_internal__pv__IsMergQAPollsrelayprovider: false,
        __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider: false,
        __relay_internal__pv__CometUFIIsRTAEnabledrelayprovider: false,
        __relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider: false,
        __relay_internal__pv__StoriesRingrelayprovider: false,
      })
    );
    const data = await requestPost(
      urlencoded,
      "https://www.facebook.com/api/graphql/"
    );
    var res = await data.json();
    return res;
  } catch (error) {
    return null;
  }
};
const load_pending_member = async (fb_dtsg, user_id, group_id) => {
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
      "GroupsCometForumParticipantRequestsContentQuery"
    );
    urlencoded.append("doc_id", "24322251354055646");
    urlencoded.append(
      "variables",
      JSON.stringify({
        count: 10,
        cursor:
          "",
        filters: [],
        groupID: group_id,
        named: "",
        orderby: "first_possible_ordering",
        pendingParticipantFilters: {
          friends_filter: null,
          gender_filter: null,
          join_fb_age_filter: null,
          location_filter: null,
          participation_questions_filter: null,
          profile_type_filter: null,
          request_age_filter: null,
        },
        scale: 1,
        id: group_id,
      })
    );
    const data = await requestPost(
      urlencoded,
      "https://www.facebook.com/api/graphql/"
    );
    var res = await data.json();
    return res;
  } catch (error) {
    return null;
  }
};
const decline_member = async (fb_dtsg, user_id, decline_id, group_id) => {
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
      "GroupsCometModerateParticipantRequestMutation"
    );
    urlencoded.append("doc_id", "7453199698031214");
    urlencoded.append(
      "variables",
      JSON.stringify({
        input: {
          action: "DECLINE_PARTICIPANT_AND_CONTENT",
          group_id: group_id,
          user_id: decline_id,
          actor_id: user_id,
          client_mutation_id: "1",
        },
      })
    );
    const data = await requestPost(
      urlencoded,
      "https://www.facebook.com/api/graphql/"
    );
    var res = await data.json();
    return res;
  } catch (error) {
    return null;
  }
};
const approve_member = async (fb_dtsg, user_id, approve_id, group_id) => {
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
      "GroupsCometModerateParticipantRequestMutation"
    );
    urlencoded.append("doc_id", "7453199698031214");
    urlencoded.append(
      "variables",
      JSON.stringify({
        input: {
          action: "APPROVE_PARTICIPANT_AND_CONTENT",
          group_id: group_id,
          user_id: approve_id,
          actor_id: user_id,
          client_mutation_id: "2",
        },
      })
    );
    const data = await requestPost(
      urlencoded,
      "https://www.facebook.com/api/graphql/"
    );
    var res = await data.json();
    return res;
  } catch (error) {
    return null;
  }
};
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
  load_pending_post,
  load_pending_member,
  decline_member,
  approve_member,
};