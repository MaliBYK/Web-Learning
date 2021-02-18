//*Window Object
let value;

// value = document;
// value = document.all;

// // for (i = 0; i < value.length; i++) console.log(value[i]);

// console.log(typeof value, value);

// const collections = Array.from(value);

// // collections.forEach(function (collection) {
// //   console.log(collection);
// // });

// console.log(typeof collections);
// // console.log(value);

value = document.body;
value = document.URL;
value = document.location.host;
value = document.location.hostname;
value = document.location.port;
value = document.location.pathname;
value = document.characterSet;
value = document.charset;
value = document.doctype;

value = document.scripts;
value = document.scripts.length;

value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1];
value = document.links[document.links.length - 1].getAttribute("class");

// console.log(document.links[document.links.length - 1].getAttribute("href"));
// console.log(document.links[document.links.length - 1].getAttribute("id"));

value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].href;
value = document.links[document.links.length - 1].classList;
value = document.links[document.links.length - 1].id;

value = document.forms;
value = document.forms.length;
value = document.forms[0];

value = document.forms["form"];
value = document.forms["form"].id;
value = document.forms[0].name;
value = document.forms[0].method;

console.log(value);
