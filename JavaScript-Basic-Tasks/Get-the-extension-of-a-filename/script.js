const demo = document.getElementById('demo');

const getFileExtension = (filename) => {

    demo.innerText = filename.substring(filename.lastIndexOf('.') + 1);
}
getFileExtension('fuck.html');