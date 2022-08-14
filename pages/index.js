import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const introduction = [
  "Hello, My name is Aniket Kumar",
  "I am a young, creative full-stack web developer.",
  "Press: ",
  "- 'p' to view my projects",
  "- 's' to see my skills",
  "- 'a' to know about me",
  "or",
  "- 'c' to contact me",
];

const skills = [
  "1. HTML 5",
  "2. CSS 3",
  "3. Sass",
  "4. Bootstrap 4 / 5",
  "5. Materialize CSS",
  "6. Tailwind CSS",
  "7. Vanilla JS",
  "8. React JS",
  "9. Next JS",
  "10. PHP",
  "11. MySQL",
  "12. NodeJS",
  "13. Express",
  "14. MongoDB",
  "15. Mongoose",
  "16. Firebase",
  "What else would you like to see?",
  "'s' for skills, 'p' for projects, 'a' to know more about me, or 'c' to contact me",
];

const redirecting = ["Redirecting..."];

const isTouchDevice = () => {
  if (typeof window !== "undefined") {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
};

export default function Home() {
  const terminalRef = useRef(null);
  const charIndex = useRef(0);
  const sentIndex = useRef(0);
  let music;
  const typeSpeed = 80;
  const router = useRouter();
  let p;
  const type = (sentences) => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    music.addEventListener("timeupdate", () => {
      if (music.ended) {
        music.currentTime = 0;
        music.play();
      }
    });
    if (charIndex.current === 0) {
      p = document.createElement("p");
      setTimeout(() => {
        terminalRef.current.appendChild(p);
      }, 10);
    }
    if (charIndex.current <= sentences[sentIndex.current].length - 1) {
      p.innerHTML += sentences[sentIndex.current].charAt(charIndex.current);
      charIndex.current = charIndex.current + 1;
      setTimeout(() => {
        type(sentences);
      }, typeSpeed);
    } else if (sentIndex.current < sentences.length - 1) {
      charIndex.current = 0;
      sentIndex.current++;
      setTimeout(() => {
        type(sentences);
      }, typeSpeed * 2);
    } else {
      music.pause();
      p = document.createElement("p");
      p.classList.add("user-input");
      terminalRef.current.appendChild(p);
      const task = (ltr) => {
        if (ltr.toLowerCase() == "p") {
          sentIndex.current = 0;
          charIndex.current = 0;
          setTimeout(() => {
            type(redirecting);
            router.push("/projects");
          }, typeSpeed * 2);
          p.classList.remove("user-input");
        } else if (ltr.toLowerCase() == "s") {
          sentIndex.current = 0;
          charIndex.current = 0;
          setTimeout(() => {
            type(skills);
          }, typeSpeed * 2);
          music.currentTime = 0;
          music.play();
          p.classList.remove("user-input");
        }
        if (ltr.toLowerCase() == "backspace") {
          p.classList.remove("value-received");
          p.innerHTML = "";
        } else {
          p.classList.add("value-received");
          p.innerHTML = ltr;
        }
      };
      if (isTouchDevice()) {
        const input = document.createElement("input");
        input.setAttribute(
          "style",
          "display: inline-block; background: transparent; outline: none; border: none; font-family: inherit; color: lightgreen; width: 1ch; caret-color: transparent"
        );
        input.maxLength = 1;
        p.appendChild(input);
        input.focus();
        input.addEventListener("input", () => {
          input.style.width = input.value.length + 1 + "ch";
          task(input.value);
        });
      } else {
        window.addEventListener("keydown", (key) => {
          if (p.classList.contains("user-input")) {
            task(key.key);
          }
        });
      }
    }
  };
  useEffect(() => {
    music = new Audio("./typing.wav");
    let start = false;
    if (!isTouchDevice()) {
      terminalRef.current.innerHTML =
        "<p class='blink'>Press space to continue</p>";
      window.addEventListener("keydown", (key) => {
        if (!start) {
          if (key.key === " ") {
            type(introduction);
            terminalRef.current.innerHTML = "";
            music.play();
            start = true;
          }
        }
      });
    } else {
      console.log(start);
      terminalRef.current.innerHTML =
        "<p class='blink'>Touch the screen to continue</p>";
      window.addEventListener("click", () => {
        if (!start) {
          type(introduction);
          terminalRef.current.innerHTML = "";
          music.play();
          start = true;
        }
      });
    }
  }, []);

  return (
    <section className="home">
      <div className="terminal" ref={terminalRef}></div>
    </section>
  );
}
