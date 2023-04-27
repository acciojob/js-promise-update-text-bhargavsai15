//your JS code here. If required.

const ele=document.getElementById('output');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!');
  }, 1000);
})

promise.then((text)=>{
	ele.innerText=text;
})