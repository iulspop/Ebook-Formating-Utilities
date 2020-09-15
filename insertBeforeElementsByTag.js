function insertBeforeElementsByTag(tagName, tagToInsert) {
  let elements = document.getElementsByTagName(tagName);
  for (let element of elements) {
      element.insertAdjacentHTML('beforebegin', tagToInsert)
  }
}

insertBeforeElementsByTag('h1', '<hr>')
insertBeforeElementsByTag('h2', '<hr>')