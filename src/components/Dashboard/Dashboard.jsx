import { useEffect, useState } from "react";
import "./dashboard.css";
import { TypeAnimation } from "react-type-animation";
import confetti from "canvas-confetti";

var colors = ['#bb0000', '#ffffff'];

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
// var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const Dashboard = () => {
  const [stepCount, setStepCount] = useState(0);
  const [countDown, setCountDown] = useState(undefined)
  const [showSurprise, setShowSurprise] = useState(false);

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setStepCount(1);
      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
      
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
      
        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.8, 0.9), y: Math.random() - 0.2 } });
        fire(0.25, {
          spread: 126,
          startVelocity: 55,
        });
        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
      }, 250);

      // fire(0.2, {
      //   spread: 60,
      // });
      // fire(0.35, {
      //   spread: 100,
      //   decay: 0.91,
      //   scalar: 0.8
      // });
      // fire(0.1, {
      //   spread: 120,
      //   startVelocity: 25,
      //   decay: 0.92,
      //   scalar: 1.2
      // });
      // fire(0.1, {
      //   spread: 120,
      //   startVelocity: 45,
      // });
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const onClickHandler = () => {
    setCountDown(3); // Start countdown from 3
    let count = 3;

    const countDownIntv = setInterval(() => {
      count -= 1;
      setCountDown(count);

      if (count === 0) {
        var end = Date.now() + (5 * 1000);

        clearInterval(countDownIntv);
        setShowSurprise(true);
        (function frame() {
          confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });

        var interval = setInterval(function() {
          var timeLeft = animationEnd - Date.now();
        
          if (timeLeft <= 0) {
            return clearInterval(interval);
          }
        
          var particleCount = 50 * (timeLeft / duration);
          // since particles fall down, start a bit higher than random
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }
    }, 1000);
  };

  return (
    <div className="dashboard-container hide-scrollbar">
      <div className="step1-container">
        {stepCount === 0 && (
          <TypeAnimation
            sequence={["Hiiee Janudi", 500, "Hiiee Janvi", 1000, "Jay Shree Krishna!", 1000, "Be ready!!", 200, "3", 700, "2", 700, "1"]}
            wrapper="span"
            speed={15}
            cursor={false}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        )}

        {stepCount === 1 && (
          <div className={`step1-container`} style={{ minWidth: "100vw" }}>
            <div className="flex flex-col gap-5">
            <h1 className="bday-text text-center">Happy birthday Janudi</h1>
            <img src="IMG_2446.jpg" className="h-[50vh] w-fit mx-auto rounded-xl" />
            <p className="text-[20px] font-semibold">Aa photo ma jem hase che ne tu aem j aakhi life hasti reje 🌝🌝 (Mst ni lage che 😁)!!</p>
            <p className="text-center">Chal hve right swipe kr bov day chal chal</p>
            </div>
          </div>
        )}
      </div>

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">Kryu swipe hee?? </p>
          <p className="text-[20px] font-semibold mt-2">
            Chal shabash, hju ek var kri de same way ma swipe
          </p>
        </div>
      </div>

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">Ha jo, </p>
          <p className="text-[18px] mt-2">
            Hu m kv chu k, i wish tari bdhi j ichha puri thay, Je te mne kidhi
            che ae b and je mne nthi kidhi ae b. 🤗🤗
          </p>
          <p className="text-[18px] mt-2">
            Chal hve jaldi jaldi next page pr ja... 🏃🏻‍♂️
          </p>
        </div>
      </div>

      <div className="step1-container">
        <div className="card">
          <img
            src="GoodGirl.gif"
            alt=""
            className="h-full mx-auto mb-5 rounded-lg"
          />
          <p className="text-[20px] font-semibold">
            Aavi gy m ne, Good Girl as usual 😁
          </p>
          <p className="text-[18px] mt-2">
            Tne aa universe and entier universe ni bdhi j happiness male eevi
            mari prayer dil thi!! 💙
          </p>
          <p className="text-[18px] mt-2">
            And taru aa new year progressive and healthy jay!!
          </p>
          <p className="text-[18px] mt-2">Chal hve pachu swipe kr ne pagal</p>
        </div>
      </div>

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">
            Are are pan joto khri ketlu blush kre che m
          </p>
          <p className="text-[20px] mt-2 font-semibold">
            Bas bas janvi bov blush na kr 😁😁
          </p>
          <p className="text-[14px] mt-2">
            Janvi ketli var kevanu mare he, Swipe kr...
          </p>
        </div>
      </div>

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">Beautiful, </p>
          <p className="text-[18px] mt-2">
            Thank you janvi for being in my life as a nice friend. i wish k hu
            tne next 50 bday b wish kri sku 😁. keep in touch forever dude and
            chears to 23 🥂
          </p>
          <p className="text-[18px] mt-2">Chal hve ready surpise mate?</p>
          <p className="text-[14px] mt-5">Hurrayyy swipe kr chal chal</p>
        </div>
      </div>

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">Hold tight,</p>
          <p className="text-[20px] font-semibold">
            Surprise is waiting in next slide ➡️
          </p>
        </div>
      </div>

      {/* Surprise Content */}
      {showSurprise ? (
        <div className="step1-container">
          <div className="flex flex-col">
            <h2 className="text-[24px] text-center">🎉 Surprise! 🎉</h2>
            <p className="text-[20px] font-semibold text-center">It's me cutie 🌝</p>
            <p className="text-[20px] font-semibold text-center">Surprise kevu lagyu?? Cute ne? Khbr j che ee to 😂😂</p>
            <img src="IMG_4176.png" className="rotate-180 rounded-xl mt-7 h-[50vh] w-fit mx-auto" />
            <p className="mt-4 text-center">Chal pachu swipe right kar fatafat</p>
          </div>
        </div>
      ) : <div className="step1-container">
        {/* Countdown Display */}
        {countDown !== undefined ? (
          <div className="countdown-text">
            {countDown > 0 ? `Revealing in ${countDown}...` : ""}
          </div>
        ) : <div className="button__wrap">
          <button className="button" onClick={onClickHandler}>
            Click me to reveal surprise
          </button>
          <div className="button__shadow"></div>
        </div>}
      </div>}

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">Are are joto khara ketlu hasvu aave che m 😁</p>
        </div>
      </div>

      <div className="step1-container">
        <div className="card">
          <p className="text-[20px] font-semibold">Chal khatam hve, Aav hve fatafat WP ma...</p>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
