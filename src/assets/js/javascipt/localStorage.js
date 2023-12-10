const set_key = async (token,key) => {
  try {
    localStorage.setItem(key, token);
  } catch (error) {
    return null;
  }
};
const get_key = async (key) => {
  try {
    return await localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

module.exports = {
    set_key,
    get_key,
  };
  