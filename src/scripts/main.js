const luminousEffect = document.querySelector('.luminousEffect');
const sizeLight = 450;

luminousEffect.style.background = `radial-gradient(circle at 22% 50%, transparent 0%, black ${sizeLight}px)`

luminousEffect.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    luminousEffect.style.cursor = "none"
    luminousEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, black ${sizeLight}px)`
})