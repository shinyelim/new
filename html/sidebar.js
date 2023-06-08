//변수 선언:var,let,const
//javascipt는 변수명을 지을때 카멜 표기법을 사용한다.
const gnbIconbtn=document.querySelector('.gnb-icon-btn');
//const gnbconbtn=document.getElementsByClassName(클래스명)
//const gnbconbtn=document.getElementById(id명)
console.log(gnbIconbtn);
const gnbIconbtn=document.querySelector('.gnb-icon-btn')
const sidebar =document.querySelector('.sidebar ');
const sidebarOverlay=document.querySelector('.overlay')
function 함수명(){

}
function openSidebar(){
  //우리가 하고 싶은 내용
  //1.gnbIconbtn 클릭 했을때 sidebar,sidebarOverlay한테 is-active 클래스
  //DoM 메소드를 이용해서 쉽게 클래스를 추가 및 제거 할 수 있다.
  //Dom이란 자바스크립트 같은  스크립팅언어가 우리가 만들어 놓은 웹 페이지에 접근해서
  //그 요소를 쉽게 조작하는 역할을 한다//
  //현재 웹 브라우저에서 DOM을 조작하는 언어는 자바스크립트가 유일함//
  //DOM는 데이터 타입(메소드,프로퍼티,이벤트 리스너,스타일 등)
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active');

  //내가 gnbIconbtn한테 이벤트를 하나 추가할건데, click이벤트를 추가하고
  // 개를 클릭했을때  openSidebar이 함수를 실행시켜라
gnbIconbtn.addEventListener('click',openSidebar);

function closesidebar(){
 
 sidebar.classList.remove('is-active');
 sidebarOverlay.classList.remove('is-active'); 
}
sidebarOverlay.addEventListener('click',closesidebar)
}