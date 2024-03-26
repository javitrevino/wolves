class SideMenu extends HTMLElement {

  constructor() {
    super();
    fetch('sidemenu.html')
      .then(stream => stream.text())
      .then(text => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const template = doc.querySelector("#sidemenu");
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
      });
  }

}
customElements.define('side-menu', SideMenu);
