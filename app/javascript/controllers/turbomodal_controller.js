import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodal"
export default class extends Controller {
  // connect() {
  //   console.log("터보모델 연결 됨")
  // }
  submitEnd(e) {
    //console.log(e) // e 는 이벤트에대한 객체 (이벤트에대한 정보를 담고있음)
    if(e.detail.success){
      this.hideModal()
    }
    //console.log(e.detail.success) 
  }

  hideModal(){
    this.element.remove()
    // this는 따로 static변수설정 안하면 turbomodal 요소 그자체를 의미함
  }
}
