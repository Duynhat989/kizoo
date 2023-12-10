const joinGroup = async (urlencoded, profile_id = null) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    if (profile_id != null) {
      await changeProfileId(profile_id);
    }
    var kq = await fetch(
      "https://www.facebook.com/api/graphql/",
      requestOptions
    );
    return await kq.text();
  } catch (error) {
    return null;
  }
};
async function change_profile_user_id(i_user) {
  await chrome.cookies.set(
    { url: "https://www.facebook.com", name: "i_user", value: i_user },
    function (cookie) {}
  );
}
async function remove_profile_user_id() {
  await chrome.cookies.remove(
    { url: "https://www.facebook.com", name: "i_user" },
    function (cookie) {}
  );
}
async function get_token_eaab() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    var response = await fetch(
      "https://www.facebook.com/dialog/oauth?scope=user_about_me,pages_read_engagement,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,email,manage_notifications,manage_pages,publish_actions,publish_pages,read_friendlists,read_insights,read_page_mailboxes,read_stream,rsvp_event,read_mailbox&response_type=token&client_id=124024574287414&redirect_uri=fb124024574287414://authorize/&sso_key=com&display=&fbclid=IwAR1KPwp2DVh2Cu7KdeANz-dRC_wYNjjHk5nR5F-BzGGj7-gTnKimAmeg08k",
      requestOptions
    );
    if (response.status === 200) {
      var data = await response.text();
      var fb_dtsg = get_value_with_name(
        data,
        /name=\\"fb_dtsg\\"\s+value=\\"(.*?)\\"/
      );
      var scope = get_value_with_name(
        data,
        /name=\\"scope\\"\s+value=\\"(.*?)\\"/
      );
      var encrypted_post_body = get_value_with_name(
        data,
        /name=\\"encrypted_post_body\\"\s+value=\\"(.*?)\\"/
      );
      var fb_token = await split_token_eaab(
        scope,
        fb_dtsg,
        encrypted_post_body
      );
      return fb_token;
    } else {
      return "false";
    }
  } catch (error) {
    return "error";
  }
}
const get_value_with_name = (string, scopeRegex) => {
  const scopeMatch = string.match(scopeRegex);
  return scopeMatch?.[1];
};
async function split_token_eaab(scope, fb_dtsg, encrypted_post_body) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append("Upgrade-Insecure-Requests", "1");
    var formdata = new FormData();
    formdata.append("fb_dtsg", fb_dtsg);
    formdata.append("from_post", "1");
    formdata.append("__CONFIRM__", "1");
    formdata.append("scope", scope);
    formdata.append("display", "page");
    formdata.append("sso_device", "ios");
    formdata.append("encrypted_post_body", encrypted_post_body);
    formdata.append("return_format[]", "access_token");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let response = await fetch(
      "https://www.facebook.com/v1.0/dialog/oauth/skip/submit/",
      requestOptions
    );
    if (response.status === 200) {
      var data = await response.text();
      var act_id = "EAA" + data.match("EAA(.*?)&")[1];
      return act_id;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
async function get_list_ads_account(user_id, eaab_token) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let response = await fetch(
    `https://graph.facebook.com/v14.0/me/adaccounts?limit=100&fields=name,account_id,account_status,userpermissions.user(${user_id}){role}&access_token=${eaab_token}&summary=1&locale=en_US`,
    requestOptions
  );
  if (response.status === 200) {
    var data = await response.text();
    return data;
  } else {
    return null;
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
module.exports = {
  joinGroup,
  change_profile_user_id,
  remove_profile_user_id,
  get_token_eaab,
  get_list_ads_account,
  get_fb_dtsg,
};
