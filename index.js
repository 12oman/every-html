/* for every element in the json object "elements" in elements.js, create a corresponding HTML element in the DOM"
 the deepest nested elements are for example: 
 svg: {
    children: {
        veiwbox:{
            children: {
                rect: {
                    attributes: {
                    width: '100',
                    height: '100',
                    fill: 'red',
                    },
                },

 */
for (const element in elements) {
    const el = document.createElement(element);
    if (elements[element].attributes) {
        for (const attribute in elements[element].attributes) {
            el.setAttribute(attribute, elements[element].attributes[attribute]);
        }
    }
    if (elements[element].text) {
        el.textContent = elements[element].text;
    }
    if (elements[element].children) {
        for (const child in elements[element].children) {
            const childEl = document.createElement(child);
            if (elements[element].children[child].text) {
                childEl.textContent = elements[element].children[child].text;
            }
            if (elements[element].children[child].attributes) {
                for (const attribute in elements[element].children[child].attributes) {
                    childEl.setAttribute(attribute, elements[element].children[child].attributes[attribute]);
                }
            }
            el.appendChild(childEl);
        }
    }
    document.body.appendChild(el);
}


/* old version:            //    
for (const element in elements) {
    const el = document.createElement(element);
    if (elements[element].attributes) {
        for (const attribute in elements[element].attributes) {
            el.setAttribute(attribute, elements[element].attributes[attribute]);
        }
    }
    if (elements[element].text) {
        el.textContent = elements[element].text;
    }
    if (elements[element].children) {
        for (const child in elements[element].children) {
            const childEl = document.createElement(child);
            if (elements[element].children[child].text) {
                childEl.textContent = elements[element].children[child].text;
            }
            if (elements[element].children[child].attributes) {
                for (const attribute in elements[element].children[child].attributes) {
                    childEl.setAttribute(attribute, elements[element].children[child].attributes[attribute]);
                }
            }
            el.appendChild(childEl);
        }
    }
    document.body.appendChild(el);
}
*/