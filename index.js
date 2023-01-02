const getJokes = async () => {
    try {
        const res = await fetch("/* Use your Api link which provide random jokes each time */");
        const data = await res.json();
        const myJoke = document.querySelector("#myJoke");
        myJoke.innerHTML = data.value;
    } catch (error) { }
}

window.addEventListener("load", () => {
    getJokes();
})