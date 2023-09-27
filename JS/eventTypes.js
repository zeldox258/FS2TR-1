let h1Text = document.getElementById("h1Text")
let file = document.getElementById("file");
let button = document.querySelector(".clickMe");
let source = document.getElementById('source')
let videoArea = document.querySelector('.videoArea')
let changeText = document.querySelector(".changeText");
let textInput = document.getElementById("textInput");

console.log(source,h1Text,file,button);


button.addEventListener('click',()=>{
    console.log(URL.createObjectURL(file.files[0]));
    console.log(file);
    //source.src = file.value;

    videoArea.innerHTML = `<video width="640" height="360" controls> <source src="${file.files[0].name}" type="video/mp4" id="source"> Your browser does not support the video tag.</video>`

})



changeText.addEventListener('keydown',(e)=>{
    console.log(e);
    h1Text.innerHTML = "Good By";
})


textInput.addEventListener('input',()=>{
    console.log(textInput.value.includes("Kazim"));
})

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=>{
        const demoElement = document.getElementById('demo');
        demoElement.textContent = 'After DOMContentLoaded';
    },2000);
});