import CustomComponent from "../core/CustomComponent.js";

export default class Items extends CustomComponent {
  initialStateSetup() {
    this.state = { items: ["item1", "item2", "item3"] };
  }
  getChild() {
    const { items } = this.state;
    return `
					<ul>
						${items.map((item) => `<li>${item}</li>`).join("")}
					</ul>
					<button id='append'>Item 추가</button>
    		`;
  }
  setEventListener() {
    this.target.querySelector("button").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}
