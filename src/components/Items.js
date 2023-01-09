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
					<button class='append'>Item 추가</button>
    		`;
  }
  setEventListener() {
    /*
     * 추가 버튼에 이벤트 리스너 등록
     **/
    // this.target.querySelector("#append").addEventListener("click", () => {
    //   const { items } = this.state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });

    /*
     * 각 버튼에 삭제 이벤트 리스너 등록
     **/
    // this.target.querySelectorAll(".delete").forEach((btn) => {
    //   btn.addEventListener("click", (event) => {
    //     const { items } = this.state;
    //     items.splice(event.target.id, 1);
    //     this.setState({ items });
    //   });
    // });

    /*
     * 상위 요소인 target에만 이벤트 등록해도 이벤트 버블링에 의해 감지 가능
     **/
    // this.target.addEventListener("click", (event) => {
    //   const { items } = this.state;

    //   const classList = event.target.classList;

    //   if (classList.contains("append")) {
    //     this.setState({ items: [...items, `item${items.length + 1}`] });
    //   }

    //   if (classList.contains("delete")) {
    //     items.splice(event.target.id, 1);
    //     this.setState({ items });
    //   }
    // });

    this.handleEventBubble("click", ".append", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    this.handleEventBubble("click", ".delete", (event) => {
      const items = [...this.state.items];
      items.splice(event.target.id, 1);
      this.setState({ items });
    });
  }
}
