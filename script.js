const imageThumb = document.querySelectorAll('.karya .thumb');
imageThumb.forEach(thumbnail => {
    const imageUrl = thumbnail.getAttribute('data-thumbnail');
    thumbnail.style.backgroundImage = `url(${imageUrl})`;
});




const buttonTheme = document.querySelector('.changeTheme input');
const indikator = document.querySelector('.changeTheme .check')

const colorLight = document.querySelectorAll("[data-theme='color-light']");
const colorLight2 = document.querySelectorAll("[data-theme='color-light-2']");
const colorHeaderandFooter = document.querySelectorAll("[data-theme='style-background-gradient']");

const textDark = document.querySelectorAll("[data-theme='text-dark']");
const colorDark = document.querySelector("[data-theme='color-dark']")

console.log(colorHeaderandFooter);

buttonTheme.addEventListener("click", () => {
    if (buttonTheme.checked) {

        // Change Color 1 to Mode Dark
        for (let i = 0; i < colorLight.length; i++) {
            colorLight[i].style.backgroundColor = `var(--background-dark-2)`;
        }

        // Change Color Header n Footer to Mode Dark
        for (let i = 0; i < colorHeaderandFooter.length; i++) {
            colorHeaderandFooter[i].style.background = `var(--style-background-gradient-dark)`;
        }

        // Change Color 2 to Mode Dark
        for (let i = 0; i < colorLight2.length; i++) {
            colorLight2[i].style.backgroundColor = `var(--background-dark)`;
        }

        // Change Text (Light) Color to Mode Dark
        for (let i = 0; i < textDark.length; i++) {
            textDark[i].style.color = `var(--background-light)`;
        }
    } else {

        // Change Color 1 to Mode Light
        for (let i = 0; i < colorLight.length; i++) {
            colorLight[i].style.backgroundColor = `white`
            colorLight[i].style.color = `white`;
        }

        // Change Color Header n Footer to Mode Light
        for (let i = 0; i < colorHeaderandFooter.length; i++) {
            colorHeaderandFooter[i].style.background = `var(--style-background-gradient)`;
        }

        // Change Color 2 to Mode Light
        for (let i = 0; i < colorLight2.length; i++) {
            colorLight2[i].style.backgroundColor = `var(--background-light-2)`;
        }


        // Change Text Color to Mode Light
        for (let i = 0; i < textDark.length; i++) {
            textDark[i].style.color = `var(--background-dark-2)`;
        }
    }
})
