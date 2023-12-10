const save_auto_post = async (
  type,
  group_id,
  group_victim_id,
  tag_id,
  type_time,
  time_post,
  is_image,
  time_delay
) => {
  try {
    var data = {
      type: type,
      group_id: group_id,
      group_victim_id: group_victim_id,
      tag_id: tag_id,
      type_time: type_time,
      time_post: time_post,
      is_image: is_image,
      time_delay:time_delay
    };
    localStorage.setItem("save_auto_post", JSON.stringify(data));
  } catch (error) {
    return null;
  }
};
const get_auto_post = async () => {
  const locations = JSON.parse(localStorage.getItem("save_auto_post")) || {};
  return locations;
};
const save_auto_approve = async (type_1,
  type_2,
  type_3,
  keyword_1,
  keyword_2,
  keyword_3
) => {
  try {
    var data = {
      type_1: {
        type: type_1,
        auto: {},
        manual: keyword_1,
      },
      type_2: {
        type: type_2,
        auto: {},
        manual: keyword_2,
      },
      type_3: {
        type: type_3,
        auto: {},
        manual: keyword_3,
      },
    };
    localStorage.setItem("save_auto_approve", JSON.stringify(data));
  } catch (error) {
    return null;
  }
};
const get_auto_approve = async () => {
  const locations = JSON.parse(await localStorage.getItem("save_auto_approve")) || {};
  return locations;
};
module.exports = {
  save_auto_post,
  get_auto_post,
  save_auto_approve,
  get_auto_approve,
};
