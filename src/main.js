const gradient = [
    "#3d97a8", // gray 500
    "#69a2bf", // gray 400
    "#b3bad9", // gray 300
    "#e5d9e7", // gray 200
    "white", // white
    "#e5d9e7", // gray 200
    "#b3bad9", // gray 300
    "#69a2bf", // gray 400
    "#3d97a8", // gray 500
];

const size = [
    "14px",
    "16px",
    "18px",
    "20px",
    "30px",
    "20px",
    "18px",
    "16px",
    "14px"
]

const opacity = [
    "0.3",
    "0.5",
    "0.6",
    "0.8",
    "1",
    "0.8",
    "0.6",
    "0.5",
    "0.3"
]



export const init = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#b7b7b7",
        "#afafaf",
        "#a7a7a7",
        "#9f9f9f",
        "#979797",
        "#8f8f8f",
        "#878787",
        "#7f7f7f",
        "#777777",
        "#707070",
        "#686868",
        "#616161",
        "#5a5a5a",
        "#525252",
        "#4b4b4b",
        "#444444",
        "#3d3d3d",
        "#373737",
        "#303030",
        "#2a2a2a",
        "#232323",
        "#1d1d1d"
    ];

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });


    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;

    });

    function animateCircles() {

        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();
};

export const navbarAnimation = () => {

    let dots = document.getElementsByClassName('navBar');
    for (let item of dots) {
        item.addEventListener('click', () => {
            const id = item.id
            for (let i = 0; i < dots.length; i++) {
                navbarStyleChange(dots, id)
            }
        })
    }
};


export function navbarScrollAnimation() {
    let dots = document.getElementsByClassName('navBar');
    window.onscroll = () => {
        console.log(window.scrollY)
        const thresholds = [935, 1870, 2805, 3720];
        let index = thresholds.findIndex(threshold => window.scrollY < threshold);
        navbarStyleChange(dots, index === -1 ? 5 : index + 1);
    }
}

function navbarStyleChange(dots, id) {
    for (let i = 0; i < dots.length; i++) {
        let valueId = 5 + i - parseInt(id)
        let div = dots[i].firstChild
        div.style.transition = "all 0.7s";
        div.style.backgroundColor = gradient[valueId];
        div.style.height = size[valueId];
        div.style.width = size[valueId];
        div.style.opacity = opacity[valueId];
    }
}