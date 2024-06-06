document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const readLessBtn = document.querySelector(".read-less-btn");
    const moreText = document.querySelector(".more-text");

    readMoreBtn.addEventListener("click", () => {
        moreText.style.display = "block";
        readMoreBtn.style.display = "none";
        readLessBtn.style.display = "inline-block";
    });

    readLessBtn.addEventListener("click", () => {
        moreText.style.display = "none";
        readMoreBtn.style.display = "inline-block";
        readLessBtn.style.display = "none";
    });
});
