export class HeaderDOM {
   constructor() {
   }
   buildHead() {
    const body = document.body;

    const header = document.querySelector("header");

    const linkHome = document.createElement("a");
    linkHome.href = "./index.html";
    linkHome.classList.add("linkHome");
    const logo = document.createElement("img");
    logo.src = "./Images/lpp_logo.svg";
    const h1 = document.createElement("h1");
    h1.innerHTML = "Les petits plats";
  
    linkHome.append(logo);
    linkHome.append(h1);
    header.append(linkHome);
    body.append(header);
   }
 }