const set_token = async (token) => {
  try {
    localStorage.setItem("eaab_token", token);
  } catch (error) {
    return null;
  }
};
const get_token = async () => {
  try {
    return await localStorage.getItem("eaab_token");
  } catch (error) {
    return null;
  }
};
const get_info_facebook = async () => {
  try {
    var token_api = await get_token()
    var url = `https://graph.facebook.com/me?access_token=${token_api}`
    var data = await requestGet(url)
    set_key(JSON.stringify(data),"fb_info")
    return data.id
  } catch (error) {
    return null;
  }
};
const get_page_facebook = async () => {
  try {
    var token_api = await get_token()
    var url = `https://graph.facebook.com/me/accounts?fields=access_token,id,name&limit=100&access_token=${token_api}`
    var data = await requestGet(url)
    return data
  } catch (error) {
    return null;
  }
};
async function requestGet(url_path) {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let response = await fetch(
      url_path,
      requestOptions
    );
    if (response.status === 200) {
      var data = await response.json();
      return data;
    } else {
      return "false";
    }
  } catch (error) {
    return "error";
  }
}
const set_key = async (token,key) => {
  try {
    localStorage.setItem(key, token);
  } catch (error) {
    return null;
  }
};
const get_key = async (key) => {
  try {
    return await JSON.parse(localStorage.getItem(key)) || {}
  } catch (error) {
    return {}
  }
};
module.exports = {
  set_token,
  get_token,
  get_info_facebook,
  set_key,
  get_key,
  get_page_facebook
};
