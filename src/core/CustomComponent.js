/*
 * CustomComponent : 추상화 통해 컴포넌트 사용 방법 강제.
 **/
export default class CustomComponent {
  target;
  state;
  constructor(target) {
    this.target = target;
    this.initialStateSetup();
    // 이벤트 버블링을 통해 삭제 이벤트 처리하기위해서는 컴포넌트 라이프사이클 위치 변경 필요
    this.setEventListener();
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
    // this.setEventListener();
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

  // TODO 다시보기
  /*
   * handleEventBubble : 이벤트 버블링을 활용한 이벤트 리스너 등록 함수
   **/
  handleEventBubble(eventType, selector, cbFunc) {
    const children = [...this.target.querySelectorAll(selector)];

    // selector에 명시한 것보다 더 하위요소가 선택되는 경우를 무시하기 위한 코드
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      cbFunc(event);
    });
  }
}
