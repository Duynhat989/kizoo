const save_auto_post = async (
  type,
  group_id,
  group_victim_id,
  tag_id,
  type_time,
  time_post,
  is_image,
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
    };
    localStorage.setItem("save_auto_post", JSON.stringify(data));
  } catch (error) {
    return null;
  }
};
const get_auto_post = async () => {
  const locations = JSON.parse(localStorage.getItem("save_auto_post")) || {};
  return locations
} 
const save_auto_approve = async (
  type,
  group_id,
  group_victim_id,
  is_image,
  tag_id
) => {
  try {
    var data = {
      type: type,
      group_id: group_id,
      group_victim_id: group_victim_id,
      is_image: is_image,
      tag_id: tag_id,
    };
    localStorage.setItem("save_auto_approve", JSON.stringify(data));
  } catch (error) {
    return null;
  }
};
const get_auto_approve = async () => {
  const locations = JSON.parse(localStorage.getItem("save_auto_approve")) || {};
  return locations
} 
module.exports = {
  save_auto_post,
  get_auto_post,
  save_auto_approve,
  get_auto_approve
};
