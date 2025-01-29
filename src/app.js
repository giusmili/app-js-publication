(()=>{
    let firstName = String(`Hello ça va?`);
    const version = Number(11);
    /* document.children[0].setAttribute("lang","fr") */
    /* console.log(document.children[0]) */
   
    const elementHtml = document.getElementsByTagName("html")[0]
    let btn = document.querySelector(".button.button-outline")
    const link = ["https://www.wikipedia.org"]
    elementHtml.setAttribute("lang","fr")
    console.info(elementHtml)
    const title = document.querySelector("h1")
    title.innerHTML = '<span aria-hidden="true">🚀</span>Classroom javascript - ES6+';
    console.log(title)
    const tab = ["html", "css", true]; /* tableau */
    /* createElement */
    const elSpan = document.createElement("span")
    title.prepend(elSpan)
    elSpan.innerText=" Hello "
    let user = {
      firstName: "Doe",
      lastName: "John",
      age: 35,
    };
    let users = [
      {
        firstName: "Doe",
        lastName: "John",
        age: 35,
      },
      {
        firstName: "White",
        lastName: "Walter",
        age: 50,
      },
    ];
    
    /* objet d'affichage */
    console.info(firstName);
    /* console.log(), console.error() console.dir(), console.table()*/
    console.table(users);

    /* listener */
    btn.addEventListener("click",(e)=>{
      e.stopPropagation()
      
      //window.alert(e.target.tagName)
      window.open(link[0]);
      /* document.location.href = link[0] */

    })

})()
