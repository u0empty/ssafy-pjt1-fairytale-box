import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene6.css";

// 하단은 음성파일
const audio8 = new Audio("sound/8.mp3");
const start = () => {
  setTimeout(() => {
    audio8.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '구멍 사이에 있는 호랑이를 찾으세요!'
  },2118)
  setTimeout(()=>{
    subtitle.innerText = '여기? 저기? 호랑이가 어디에 있을까요?'
  },6632)
  setTimeout(()=>{
    subtitle.innerText = '호랑이와 눈이 마주쳤어요!!!'
  },12710)
  setTimeout(()=>{
    subtitle.innerText = '큰일났다!'
  },15690)
  setTimeout(()=>{
    subtitle.innerText = '오빠, 왜 그래?'
  },17170)
}
const Scene8 = () => {
  const navigate = useNavigate();
  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  const timerpage = setTimeout(() => navigate(`/scene9`), 19100);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div className="bgImg">
          <img src="img/scene8/8-배경.png"></img>
          <h2 id="Text"></h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene8;