/**
 * Get data from LS by key
 * @param {*} key
 * @returns
 */
function getDatas(key) {
  // Get data from LS in param and display it in nodeID
  return JSON.parse(localStorage.getItem(key)) || [];
}
/**
 * Set data in LS by key
 * @param {string} key
 * @param {Object} data
 * @returns {Array}
 */
function setData(key, data) {
  // Get datas
  const oldDatas = getDatas(key);
  // Add datas
  oldDatas.push(data);
  // Get data from LS in param and display it in nodeID
  localStorage.setItem(key, JSON.stringify(oldDatas));
  return oldDatas;
}
export { getDatas, setData };
