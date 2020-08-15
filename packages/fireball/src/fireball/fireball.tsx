import * as React from "react";

export default function App() {
  const randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const animationStyle = `
  @keyframes dance {
    0% {
      transform: skewX(-${randomRange(2, 5)}deg) perspective(0) rotate(-3deg);
    }
  
    50% {
      transform: skewX(2deg) perspective(100px) rotate(2deg);
    }

    100% {
      transform: skewX(2deg) perspective(100px) rotate(2deg);
    }
  }

  @keyframes atmosphere {
    0% {
      opacity: 0.4;
    }

    50% {
      opacity: 0.9;
    }

    100% {
      opacity: 0.9;
    }
  }

  @keyframes drop {
    0% {
      transform: translate(0, -2000px);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  .container {
    animation-duration: ${randomRange(1, 2)}s;
    animation-name: drop;
    animation-iteration-count: 1;
  }

  .fireball {
    transform-origin: 50% 80%;
    animation-delay: -${randomRange(2, 5)}s;
    animation-duration: 0.${randomRange(2, 4)}s;
    animation-iteration-count: infinite;
    animation-name: dance;
  }

  .left_flame {
    transform-origin: 80% 80%;
    animation-delay: -${randomRange(2, 5)}s;
    animation-duration: 0.${randomRange(1, 3)}s;
    animation-iteration-count: infinite;
    animation-name: dance;
  }
  .right_flame {
    transform-origin: 20% 80%;
    animation-delay: -${randomRange(2, 5)}s;
    animation-duration: 0.${randomRange(1, 3)}s;
    animation-iteration-count: infinite;
    animation-name: dance;
  }
  .main_flame {
    transform-origin: 50% 80%;
    animation-delay: -${randomRange(2, 5)}s;
    animation-duration: 0.${randomRange(1, 3)}s;
    animation-iteration-count: infinite;
    animation-name: dance;
  }
  .interior_flame {
    transform-origin: 50% 80%;
    animation-delay: -${randomRange(2, 5)}s;
    animation-duration: 0.${randomRange(1, 3)}s;
    animation-iteration-count: infinite;
    animation-name: dance;
  }
  .atmosphere {
    animation-delay: ${randomRange(3, 5)}s;
    animation-duration: ${randomRange(3, 6)}s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-name: atmosphere;
  }
  `;

  return (
    <div
      className="container"
      style={{ width: "500px", padding: "30px", boxSizing: "border-box" }}
    >
      <style>{animationStyle}</style>
      <svg
        className="fireball"
        viewBox="0 0 119 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="left_flame"
          d="M66.5206 90.1305C66.4398 108.198 51.5999 122.779 33.3747 122.697C15.1495 122.616 0.440476 107.903 0.52121 89.8355C0.601945 71.7678 15.0973 42.56 33.8752 10.6986C53.9153 43.8881 66.6013 72.0628 66.5206 90.1305Z"
          fill="url(#paint0_linear)"
        />
        <path
          className="right_flame"
          d="M110.069 91.2327C108.072 109.19 91.9918 122.139 74.1525 120.155C56.3132 118.172 43.4702 102.007 45.467 84.0493C47.4638 66.0921 64.7592 38.5625 86.53 8.84145C102.633 43.9356 112.066 73.2755 110.069 91.2327Z"
          fill="url(#paint1_linear)"
        />
        <path
          className="main_flame"
          d="M98.253 108.152C96.844 131.582 76.7082 149.433 53.2784 148.024C29.8486 146.615 11.9973 126.48 13.4063 103.05C14.8153 79.6201 35.5648 42.7713 62.0127 2.78686C85.3845 47.2701 99.662 84.7226 98.253 108.152Z"
          fill="url(#paint2_linear)"
        />
        <path
          className="atmosphere"
          d="M92.5494 136.361C90.9179 138.502 81.4913 154.73 52.565 152.991M15.6882 131.739C17.0849 133.502 24.2789 151.29 53.2052 153.029"
          stroke="#EFD6C7"
        />
        <path
          className="interior_flame"
          d="M83.1635 115.733C82.457 127.481 70.0457 136.293 55.4421 135.414C40.8386 134.536 29.5727 124.301 30.2792 112.553C30.9857 100.805 43.6405 82.4634 59.8216 62.5902C74.7037 85.0849 83.87 103.985 83.1635 115.733Z"
          fill="url(#paint3_radial)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="33.8752"
            y1="10.6986"
            x2="37.9395"
            y2="73.281"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EB3710" />
            <stop offset="1" stop-color="#ED5900" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="86.53"
            y1="8.84145"
            x2="84"
            y2="71.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EB3710" />
            <stop offset="1" stop-color="#ED5900" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="62.0127"
            y1="2.78686"
            x2="62.8158"
            y2="84.252"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EB3710" />
            <stop offset="1" stop-color="#ED5900" />
          </linearGradient>
          <radialGradient
            id="paint3_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(57.2845 107.585) rotate(-86.6661) scale(44.8047 32.5367)"
          >
            <stop stop-color="#F7DF8C" />
            <stop offset="1" stop-color="#FFC700" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
