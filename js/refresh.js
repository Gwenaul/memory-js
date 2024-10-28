/**
 * Get data from LS in param and display it in nodeID
 * @param datas
 * @param nodeID
 */
export function refresh(datas, nodeID) {
  // ul
  const $nodeToDisplay = document.getElementById(nodeID);
  // Empty node
  $nodeToDisplay.innerHTML = "";
  // Add datas
  datas.map((data) => {
    $nodeToDisplay.insertAdjacentHTML("beforeend", `<li>${data.email}</li>`);
  });
}