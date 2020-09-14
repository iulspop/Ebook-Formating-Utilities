function insertBeforeElementsByClass(className, tagToInsert) {
    let elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.insertAdjacentHTML('beforebegin', tagToInsert)
    }
}

insertBeforeElementsByClass("heading_", "<hr>")
insertBeforeElementsByClass("class_16", "<p></p>")