function replaceTag(className, newTag) {
    var elements = document.getElementsByClassName(className);
    var src, el, attrs;
    for(var i=0,l=elements.length;i<l;i++) {
            src = elements[i];
            el = document.createElement(newTag);
            attrs = src.attributes;
            for(var j=0,k=attrs.length;j<k;j++) {
                    el.setAttribute(attrs[j].name, attrs[j].value);
            }
            el.innerHTML = src.innerHTML;
            src.parentNode.replaceChild(el, src);
    }
}

replaceTag("heading_", "h1");
replaceTag("heading_1", "h2");
replaceTag("class_23", "strong");
replaceTag("class_15", "strong");
replaceTag("class_26", "strong");