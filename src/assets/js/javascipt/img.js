const env = require("../config/env.js");

const list = async (api_key, id_post) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bear ${api_key}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("id_post", id_post);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  var res = await fetch(`${env.domain}/api/img/list`, requestOptions);
  return JSON.parse(await res.text());
};
const register = async (api_key, img_link) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bear ${api_key}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("url", img_link);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  var res = await fetch(`${env.domain}/api/img/register`, requestOptions);
  return JSON.parse(await res.text());
};
const update =async (api_key,id_post,id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bear ${api_key}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_post", id_post);
    urlencoded.append("id", id);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    var res = await fetch(`${env.domain}/api/img/update`, requestOptions);
    return JSON.parse(await res.text());
};

module.exports = {
  list,
  register,
  update,
};
