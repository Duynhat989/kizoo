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

module.exports = {
  set_token,
  get_token,
};
