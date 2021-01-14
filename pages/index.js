import React from "react";
import Confetti from "react-dom-confetti";
import { css } from "@emotion/css";

class Birthday extends React.Component {
  state = {
    item: "🎁",
    confetti: false,
    hint: "(don't forget your special gift from Hong & Saia)",
  };
  openPresent = () => {
    let presents = [
      "😺",
      "🐶",
      "🎊",
      "🎈",
      "🎉",
      "✨",
      "🎇",
      "🎆",
      "🐇",
      "🍂",
      "🎂",
    ];
    this.setState({
      item: presents[Math.floor(Math.random() * Math.floor(presents.length))],
      confetti: true,
      hint: "",
    });
  };

  render() {
    const config = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      decay: 0.9,
    };

    return (
      <main className="bg-indigo-300 h-screen w-screen text-center">
        <div className="flex flex-col font-fredokaOne">
          <h1 className="text-5xl">Happy Birthday</h1>
          <img
            src="/susan.png"
            alt="beautiful mama susan"
            className="object-contain object-center mt-20 animate-bounce"
          />
          <h1 className="text-5xl">Susan Turner Stephens!</h1>
        </div>
        <div className="text-sm font-fredokaOne">{this.state.hint}</div>
        <div className={presentContainer}>
          <Confetti active={this.state.confetti} config={config} />
          <button className={presentButton} onClick={this.openPresent}>
            {this.state.item}
          </button>
        </div>
      </main>
    );
  }
}

export default Birthday;

const presentContainer = css`
  display: flex;
  justify-content: center;
`;
const presentButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 50px;

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: opacity-change 1s infinite;
  }
  &:hover {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: opacity-change 1s infinite;
  }
`;
