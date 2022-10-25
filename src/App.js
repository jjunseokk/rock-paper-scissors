import { useState } from 'react';
import './App.css';
import Box from './component/box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist, faHand, faHandScissors } from "@fortawesome/free-solid-svg-icons";

/*
1. 가위 바위 보 버튼을 누르면 각 사진이 나온다.
2. 컴퓨터가 랜덤으로 가위 바위 보를 나타낸다.
3. 이긴사람 win, lose, tie 표시
4. 이긴사람은 그린, 진사람은 빨강, 비기면 보라색 테두리 표시
*/

function App() {
  const choice = {
    rock: {
      name: "Rock",
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png"
    },
    paper: {
      name: "Paper",
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png"
    },
    scissors: {
      name: "Scissors",
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png"
    }
  }

  const [userSelect, setuserSelect] = useState(null);
  const [computerSelect, setcomputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setuserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice);

    setResult(randomPic(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomitem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomitem];

    return choice[final];
  };

  const randomPic = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose";
  };

  // Let's play 버튼
  const show = () => {
    let bg = document.querySelector(".backGround");
    bg.classList.add("active")
  };

  return (
    <div className='container'>
      <div className='wrap'>
        <Box name="You" item={userSelect} result={result} />
        <Box name="Computer" item={computerSelect} result={result} />
      </div>
      <div className='btn-style'>
        <button onClick={() => play("scissors")}><FontAwesomeIcon icon={faHandScissors} className="font" /></button>
        <button onClick={() => play("rock")}><FontAwesomeIcon icon={faHandBackFist} className="font" /></button>
        <button onClick={() => play("paper")}><FontAwesomeIcon icon={faHand} className="font" /></button>
      </div>
      <h3>가위, 바위, 보 중에 선택하세요!</h3>
      <div className='backGround'>
        <h1>Rock! Scissors! Paper!</h1>
        <img src="https://t1.daumcdn.net/cfile/tistory/9952FF4F5E0EED152C" alt="" />
        <button className='playBtn' onClick={() => show()}>Let's play??</button>
      </div>
    </div>
  );
}

export default App;
