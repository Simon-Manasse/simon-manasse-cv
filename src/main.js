export const init = ()=>{
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

export const navbarAnimation=()=>{

    const gradient = [
        "#6b7280", // gray 500
        "#9ca3af", // gray 400
        "#d1d5db", // gray 300
        "#e5e7eb", // gray 200
        "white", // white
        "#e5e7eb", // gray 200
        "#d1d5db", // gray 300
        "#9ca3af", // gray 400
        "#6b7280", // gray 500
    ];
let dots = document.getElementsByClassName('navBar');
for (let item of dots){
    item.addEventListener('click',()=>{
       const id =  item.id
      for (let i = 0; i < dots.length; i++) {
        let gradientId = 5 + i - parseInt(id)
       dots[i].firstChild.style.backgroundColor = gradient[gradientId];
      }
    })
}
};