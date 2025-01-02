const counters = document.querySelectorAll('.value');
const speed = 300;

counters.forEach(counter => {
    a = counter.getAttribute('a')
    console.log(a)
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value + a;
        }


    }

    animate();
});
const ani2 = () => {
    const value = +p.getAttribute('akhi');
    const data = +p.innerText;

    const time = value / speed;
    if (data < value) {
        p.innerText = Math.ceil(data + time);
        setTimeout(ani2, 1);
    } else {
        p.innerText = value + "%";
    }


}
ani2()