function insertBeforeElementsByTag(tagName, tagToInsert) {
  let elements = document.getElementsByTagName(tagName);
  for (let element of elements) {
      element.insertAdjacentHTML('beforebegin', tagToInsert)
  }
}