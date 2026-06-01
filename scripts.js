document.querySelectorAll('.navFirstButton').forEach(btn => {
    const img = btn.dataset.hoverImg;
    if (img) btn.style.setProperty('--hover-img', `url('${img}')`);
});