/*
 * CustomComponent : 추상화 통해 컴포넌트 사용 방법 강제.
 **/
export default class CustomComponent {
  target;
  state;
  constructor(target) {
    this.target = target;
    this.initialStateSetup();
    this.render();
  }
  /*
   * initialSetup : 초기 상태값 설정.
   **/
  initialStateSetup() {}
  /*
   * getChild : 초기 컴포넌트 내부에 들어갈 child Components 문바열 형태로 반환.
   **/
  getChild() {
    return "";
  }
  /*
   * render : 컴포넌트 렌더링해 화면에 표시.
   **/
  render() {
    this.target.innerHTML = this.getChild();
    this.setEventListener();
  }
  /*
   * setEventListener : 컴포넌트에 이벤트 리스너 추가.
   **/
  setEventListener() {}
  /*
   * setState : 컴포넌트 내부 상태 변경.
   **/
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
