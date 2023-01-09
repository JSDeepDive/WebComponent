import CustomComponent from "../core/CustomComponent.js";

export default class Items extends CustomComponent {
  initialStateSetup() {
    this.state = { items: ["item1", "item2", "item3"] };
  }
  getChild() {
    const { items } = this.state;
    return `
					<ul>
						${items
              .map(
                (item, key) => `
							<li key='${key}'>
								${item}
								<button class='delete' id=${key}>삭제</button>
							</li>
						`
              )
              .join("")}
					</ul>
					<button id='append'>Item 추가</button>
    		`;
  }
  setEventListener() {
    this.target.querySelector("#append").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    this.target.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const { items } = this.state;
        items.splice(event.target.id, 1);
        this.setState({ items });
      });
    });
  }
}
