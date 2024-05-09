// create a json object with all currently valid HTML elements. Nested elements will be sub-objects.
// the object will be used to programmatically create all HTML elements in the DOM.
const elements = {
    a: {
        attributes: {
        href: 'https://youtu.be/dQw4w9WgXcQ?si=RuLECODOpZ__inwX',
        target: '_blank',
        },
        text: 'Click me!',
    },
    div: {
        attributes: {
        class: 'container',
        },
        children: {
        p: {
            text: 'I am a paragraph',
        },
        },
    },
    img: {
        attributes: {
        src: 'https://64.media.tumblr.com/630397bb201abdb94c0c982fe762705a/4ba6e7c0e852b0c1-3f/s2048x3072/62aa64130d048e75b5f4034ba38d3e3cb3ba3bf7.jpg',
        alt: 'Roman Mitch, Uptown Panel, 2018, Electroplated abraded computer side panel, 44 x 41.5 cm',
        },
    },
    input: {
        attributes: {
        type: 'text',
        placeholder: 'Enter your name',
        },
    },
    button: {
        text: 'Click me!',
    },
    select: {
        children: {
        option: {
            text: 'Option 1',
        },
        },
    },
    textarea: {
        attributes: {
        placeholder: 'Enter your message',
        },
    },
    form: {
        children: {
        input: {
            attributes: {
            type: 'text',
            placeholder: 'Enter your name',
            },
        },
        button: {
            text: 'Submit',
        },
        },
    },
    table: {
        children: {
        thead: {
            children: {
            tr: {
                children: {
                th: {
                    text: 'Header 1',
                },
                th: {
                    text: 'Header 2',
                },
                },
            },
            },
        },
        tbody: {
            children: {
            tr: {
                children: {
                td: {
                    text: 'Row 1, Cell 1',
                },
                td: {
                    text: 'Row 1, Cell 2',
                },
                },
            },
            },
        },
        },
    },
    ul: {
        children: {
        li: {
            text: 'List item 1',
        },
        li: {
            text: 'List item 2',
        },
        },
    },
    ol: {
        children: {
        li: {
            text: 'List item 1',
        },
        li: {
            text: 'List item 2',
        },
        },
    },
    hr: {},
    br: {},
    h1: {
        text: 'Heading 1',
    },
    h2: {
        text: 'Heading 2',
    },
    h3: {
        text: 'Heading 3',
    },
    h4: {
        text: 'Heading 4',
    },
    h5: {
        text: 'Heading 5',
    },
    h6: {
        text: 'Heading 6',
    },
    p: {
        text: 'I am a paragraph',
    },
    span: {
        text: 'I am a span',
    },
    strong: {
        text: 'I am bold',
    },
    em: {
        text: 'I am italic',
    },
    i: {
        text: 'I am italic',
    },
    b: {
        text: 'I am bold',
    },
    u: {
        text: 'I am underlined',
    },
    s: {
        text: 'I am strikethrough',
    },
    code: {
        text: 'I am code',
    },
    pre: {
        text: 'I am preformatted text',
    },
    blockquote: {
        text: 'I am a blockquote',
    },
    q: {
        text: 'I am a quote (q)',
    },
    cite: {
        text: 'I am a citation (cite)',
    },
    address: {
        text: 'I am an address',
    },
    del: {
        text: 'I am deleted text',
    },
    ins: {
        text: 'I am inserted text (ins)',
    },
    mark: {
        text: 'I am highlighted text (mark)',
    },
    small: {
        text: 'I am small text',
    },
    sub: {
        text: 'I am subscript text',
    },
    sup: {
        text: 'I am superscript text',
    },
    article: {
        children: {
        h1: {
            text: 'Article Heading',
        },
        p: {
            text: 'Article content',
        },
        },
    },
    aside: {
        children: {
        h1: {
            text: 'Aside Heading',
        },
        p: {
            text: 'Aside content',
        },
        },
    },
    details: {
        children: {
        summary: {
            text: 'Summary',
        },
        p: {
            text: 'Details content',
        },
        },
    },
    figcaption: {
        text: 'Figure caption',
    },
    figure: {
        children: {
        img: {
            attributes: {
            src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
            alt: 'Google Logo',
            },
        },
        figcaption: {
            text: 'Figure caption',
        },
        },
    },
    footer: {
        text: 'I am a footer',
    },
    header: {
        text: 'I am a header',
    },
    main: {
        text: 'I am the main content (main)',
    },
    nav: {
        text: 'I am a navigation (nav)',
    },
    section: {
        text: 'I am a section',
    },
    article: {
        text: 'I am an article',
    },
    aside: {
        text: 'I am an aside',
    },
    details: {
        text: 'The text element of details only displays when the details are set to open',
    },
    dialog: {
        text: 'I am a dialog',
    },
    summary: {
        text: 'I am a summary',
    },
    data: {
        text: 'I am data',
    },
    time: {
        text: 'I am time',
    },
    address: {
        text: 'I am an address',
    },
    map: {
        text: 'I am a map',
    },
    area: {
        text: 'I am an area',
    },

    // SVG elements must have a viewBox attribute not working using code
    // svg: {
    //         "attributes": {
    //             "viewBox": "0 0 100 100"
    //         },
    //         "children": {
    //             "rect": {
    //                 "attributes": {
    //                     "width": "100",
    //                     "height": "100",
    //                     "fill": "red"
    //                 }
    //             },
    //             "circle": {
    //                 "attributes": {
    //                     "cx": "50",
    //                     "cy": "50",
    //                     "r": "40",
    //                     "fill": "blue"
    //                 }
    //             },
    //             "line": {
    //                 "attributes": {
    //                     "x1": "0",
    //                     "y1": "0",
    //                     "x2": "100",
    //                     "y2": "100",
    //                     "stroke": "green"
    //                 }
    //             }
    //         }
    //     },
    // MathML elements
    math: {
        children: {
        mrow: {
            children: {
            mi: {
                text: 'x',
            },
            mo: {
                text: '+',
            },
            mi: {
                text: 'y',
            },
            },
        },
        },
    },
    // Custom elements
    custom: {
        children: {
        custom: {
            text: 'I am a custom element',
        },
        },
    },
    // Deprecated elements
    basefont: {
        text: 'I am a basefont (deprecated)',

    },
    big: {
        text: 'I am big (deprecated)',
    },
    center: {
        text: 'I am center (deprecated, now use CSS)',
    },
    font: {
        text: 'I am font (deprecated, now set font styles with CSS)',
    },
    strike: {
        text: 'I am strike (deprecated, now use s)',
    },
    tt: {
        text: 'I am tt (deprecated, now use code)',
    },
    u: {
        text: 'I am u (deprecated, once used for underlining, now use CSS property text-decoration: underline)',

    },
    xmp: {
        text: 'I am xmp (deprecated, now use pre)',
    },
    applet: {
        text: 'I am applet (deprecated)',
    },
    frame: {
        text: 'I am frame (deprecated, use iframe)',
       
    },

    // TODO: Add obsolete elements

};