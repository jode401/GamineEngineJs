const screenForm = document.getElementById('screenForm');
const first = document.querySelector('.first')
const body = document.querySelector('body')

function create(a, b, c, d) {
    let aire = a * b
    let psquare = aire / c * d
    let p = Math.sqrt(psquare)
    let fpw = p / c
    let fph = p / d
    console.log(p)
    let div = document.createElement('div')
    div.style.backgroundColor = 'red'
    div.style.height = `${fph}px`
    div.style.width = `${fpw}px`
    div.style.borderColor = 'blue'
    return first.append(div)
}
screenForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    if (width && height) {
        console.log(`Screen size set to: ${width}x${height}`);
        alert(`Screen size applied: ${width}x${height}`);

    }

    let width1 = first.offsetWidth
    let height1 = first.offsetHeight

    for (let i = width; i < width1; i++) {

        create(width1, height1, width, height)
    }
    for (let i = height; i < height1; i++) {

        create(width1, height1, width, height)
    }
});
screenForm.addEventListener('change', () => {
    create(0, 0, 0, 0)


})