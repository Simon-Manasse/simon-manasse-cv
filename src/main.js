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
    const div = document.getElementById('cardContainer');
    div.style.transition = "all 1s";
    window.onscroll = () => {
        const thresholds = [835, 1770, 2705, 3620];
        let index = thresholds.findIndex(threshold => window.scrollY < threshold);
        navbarStyleChange(dots, index === -1 ? 5 : index + 1);
        if (window.scrollY > 700) {
            div.style.opacity = "1"
            div.style.top = "0"
        }
        else {
            div.style.opacity = "0"
            div.style.top = "50rem"
        }

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
export const scrollOnMouse = () => {
    let isMouseDown = false;
    let startX;
    let scrollLeft;
    let requestId;

    const container = document.getElementById('cardContainer');
    const originalScrollSnapType = container.style.scrollSnapType;

    container.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.scrollSnapType = 'none'; // Disable snapping temporarily
    });

    container.addEventListener('mouseup', () => {
        isMouseDown = false;
        cancelAnimationFrame(requestId);
        container.style.scrollSnapType = originalScrollSnapType; // Re-enable snapping
    });

    container.addEventListener('mouseleave', () => {
        isMouseDown = false;
        cancelAnimationFrame(requestId);
        container.style.scrollSnapType = originalScrollSnapType; // Re-enable snapping
    });

    container.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;

        e.preventDefault();

        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the scrolling speed as needed

        requestId = requestAnimationFrame(() => {
            container.scrollLeft = scrollLeft - walk;
        });
    });
};

export const nextCard = () => {
    const faller = document.getElementById('faller');
    const hz = document.getElementById('hz');
    const next = document.getElementById('nextCard');
    let fallerZ = 50;
    let hzZ = 51;
    const lower = {
        before: {
            left: "70rem",
            top: "8rem",
            zIndex: "50"
        },
        after: {
            left: "42rem",
            top: "8rem",
            zIndex: "51"
        }
    }
    const upper = {
        before: {
            top: "1rem",
            left: "20rem",
            zIndex: "51"
        },
        after: {
            top: "9rem",
            left: "42rem",
            zIndex: "50"
        },
    };



    next.addEventListener('click', () => {
        if (parseInt(fallerZ) < parseInt(hzZ)) {
            console.log("true")
            changeCardPlace(faller, lower)
            changeCardPlace(hz, upper);
            fallerZ = 51;
            hzZ = 50;
        } else {
            changeCardPlace(hz, lower)
            changeCardPlace(faller, upper);
            fallerZ = 50;
            hzZ = 51;
        }
    });
};


function changeCardPlace(element, attributes) {
    element.style.transition = "all 0.7s";
    element.style.left = attributes.before.left;
    element.style.top = attributes.before.top;
    element.style.zIndex = attributes.before.zIndex

    element.addEventListener('transitionend', () => {
        // second stage
        element.style.transition = "all 0.7s"
        element.style.left = attributes.after.left;
        element.style.top = attributes.after.top;
        element.style.zIndex = attributes.after.zIndex
    });
}

export const nextSkill = () => {
    const grid = document.getElementById('skillGrid');
    const buttonRight = document.getElementById('nextSkill');
    const buttonLeft = document.getElementById('previousSkill');
    let amount = 0;
    const gridTransition = "all 1.5s";
    const gridMarginBase = "0.75rem";
    const gridMarginRight = "30rem";
    const gridMarginStep = 30;
    const lastGridElement = grid.childElementCount -1;
    
    grid.style.transition = gridTransition;
    
    buttonRight.addEventListener('click', () => {
        amount++;
        updateGridMargin();
    });
    
    buttonLeft.addEventListener('click', () => {
        amount--;
        updateGridMargin();
    });
    
    function updateGridMargin() {
        if (amount > 0 && amount <= lastGridElement) {
            grid.style.marginLeft = `-${(amount * gridMarginStep - 1)}rem`;
            if (amount === lastGridElement) {
                grid.style.marginRight = gridMarginRight;
            } else {
                grid.style.marginRight = "";
            }
        } else if (amount === -1) {
            amount = lastGridElement;
            grid.style.marginLeft = `-${(amount * gridMarginStep - 1)}rem`;
            grid.style.marginRight = gridMarginRight;
        } else {
            grid.style.marginLeft = gridMarginBase;
            grid.style.marginRight = "";
            amount = 0;
        }
    }
    

};