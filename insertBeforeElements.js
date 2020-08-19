function insertBeforeElements(className, tagToInsert) {
    let elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.insertAdjacentHTML('beforebegin', tagToInsert)
    }
}

insertBeforeElements("heading_", "<hr>")
insertBeforeElements("class_16", "<p></p>")