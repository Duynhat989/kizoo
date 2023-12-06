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
    let response = await fetch(
      "https://facebook.com/adsmanager/",
      requestOptions
    );
    if (response.status === 200) {
      var data = await response.text();
      var regex = /window\.location\.replace\("([^"]+)"\);/;
      var match = regex.exec(data);
      var act_id = match[1];
      var correctedUrl = act_id.replace(/\/+(?=\?|$)/, "");
      fb_token = await split_token_eaab(correctedUrl);
      return fb_token;
    } else {
      return "false";
    }
  } catch (error) {
    return "error";
  }
}
async function split_token_eaab(act_id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let response = await fetch(act_id, requestOptions);
  if (response.status === 200) {
    var data = await response.text();
    var act_id = "EAA" + data.match('EAA(.*?)"')[1];
    return act_id;
  } else {
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
    get_fb_dtsg
}