async function uploadImages(xpath, id_group, access_token) {
  try {
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("access_token", access_token);
    formdata.append("url", xpath);
    formdata.append("message", "upload kizoo");
    formdata.append("published", false);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    var res = await fetch(
      `https://graph.facebook.com/${id_group}/photos`,
      requestOptions
    );
    var req = await res.text();
    console.log(req);
    var result = JSON.parse(req);
    return result.id;
  } catch (error) {
    return "";
  }
}

async function get_request(url_request) {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let response = await fetch(url_request, requestOptions);
    return await response.arrayBuffer();
  } catch (error) {
    return "error";
  }
}
async function uploadPost(message, photos, access_token, id_group) {
  try {
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("message", message);
    formdata.append("access_token", access_token);
    for (let index = 0; index < photos.length; index++) {
      var photo_id = photos[index];
      formdata.append(
        `attached_media[${index}]`,
        `{"media_fbid":"${photo_id}"}`
      );
    }
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    var res = await fetch(
      `https://graph.facebook.com/${id_group}/feed`,
      requestOptions
    );
    var req = await res.text();
    var response = JSON.parse(req);
    return response.id;
  } catch (error) {
    console.error(error);
    return "false";
  }
}
module.exports = {
  get_request,
  uploadPost,
  uploadImages,
};
