let value;

const newLink = document.createElement("a");
const parentEl = document.getElementsByClassName("card-body")[1];

newLink.href = "https://www.google.com.tr";

newLink.id = "newLink";
newLink.className = "btn btn-primary";
newLink.target = "_blank";
newLink.appendChild(document.createTextNode("Başka Sayfaya Git"));

parentEl.appendChild(newLink);

// newLink.textContent = "Burası!!";
// newLink.text = "Burası da mı işe yarıyo yoksa :/";
// const text = document.createTextNode(
//   "Naber Gelmedi Senden bi haber merak ettim . öldün mü kaldın mı endişelendim bu hayat çok zor malum elle yanlışla düşünecektir onu başına naber"
// );
// parentEl.appendChild(text);
// newLink.style.textDecoration = "none";
// newLink.style.fontSize = "24px";
// value = parentEl;

value = newLink;
console.log(value);
