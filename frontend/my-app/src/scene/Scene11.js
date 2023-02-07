import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene11.css";

// 하단은 음성파일
const audio11 = new Audio("sound/11.mp3");
const start = () => {
  setTimeout(() => {
    audio11.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 우물에 비친 오누이를 보았어요'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '얘들아, 거긴 어떻게 들어갔니?'
  },4730)
  setTimeout(()=>{
    subtitle.innerText = '오누이는 어느쪽에 있을까요?'
  },8742)
  setTimeout(()=>{
    subtitle.innerText = '오른쪽 왼쪽으로 움직이며 오누이를 찾아보세요.'
  },10742)
}
const Scene11 = () => {
  const navigate = useNavigate();

  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  // const timerpage = setTimeout(() => navigate(`/scene12`), 17000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div className="bgImg">
          <img src="img/scene11/11.png"></img>
          <h2 id="Text"></h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene11;
