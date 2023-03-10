const dataFood = [
  {
    intro: "our special dish",
    title: "Tasty Noodles",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas delectus, doloribus repellat id enim blanditiis",
    img: "Images/home-img-1.png",
  },
  {
    intro: "our special dish",
    title: "fried chicken",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas delectus, doloribus repellat id enim blanditiis",
    img: "./Images/home-img-2.png",
  },
  {
    intro: "our special dish",
    title: "hot pizza",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas delectus, doloribus repellat id enim blanditiis",
    img: "./Images/home-img-3.png",
  },
];

const intro = document.querySelector(".intro");
const content = document.querySelector(".content");
const title = document.querySelector(".title");
const pic = document.querySelector("img");
const allDots = document.querySelectorAll(".fa-circle-dot");
const firstDot = document.querySelector(".one");
const secondDot = document.querySelector(".two");
const thirdDot = document.querySelector(".three");

let index = 0;

const loadAllContent = (arr) => {
  intro.innerHTML = arr[index].intro;
  title.innerHTML = arr[index].title;
  content.innerHTML = arr[index].content;
  pic.src = arr[index].img;
};

const addClass1 = () => {
  firstDot.classList.add("active");
  secondDot.classList.remove("active");
  thirdDot.classList.remove("active");
};

const addClass2 = () => {
  firstDot.classList.remove("active");
  secondDot.classList.add("active");
  thirdDot.classList.remove("active");
};

const addClass3 = () => {
  firstDot.classList.remove("active");
  secondDot.classList.remove("active");
  thirdDot.classList.add("active");
};

setInterval(() => {
  index++;
  if (index > dataFood.length - 1) {
    index = 0;
  }

  index == 1 ? addClass2() : index == 2 ? addClass3() : addClass1();

  loadAllContent(dataFood);
}, 5000);

// firstDot.addEventListener("click", () => {
//   index = 0;
//   loadAllContent(dataFood);
//   addClass1();
// });

// secondDot.addEventListener("click", () => {
//   index = 1;
//   loadAllContent(dataFood);
//   addClass2();
// });

// thirdDot.addEventListener("click", () => {
//   index = 2;
//   loadAllContent(dataFood);
//   addClass3();
// });

allDots.forEach((element) => {
  const change = (e) => {
    const className = e.target.classList;
    console.log(className);
    if (className.contains("one")) {
      index = 0;
      loadAllContent(dataFood);
      addClass1();
    } else if (className.contains("two")) {
      index = 1;
      loadAllContent(dataFood);
      addClass2();
    } else {
      index = 2;
      loadAllContent(dataFood);
      addClass3();
    }
  };
  element.addEventListener("click", change);
});

loadAllContent(dataFood);
