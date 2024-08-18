
// const name="Mysha Ahmed" //string
// const age=25; //int
// const female=true; // boolean
// const friends=["Puja","etu","farz"]; //array
// const object={
//     name:"mysha",
//     age:25,
//     work:"student",
// };


// console.log("hello world!");
// console.log(name);
// console.log(age);
// console.log(female);
// console.log(friends);
// console.log(object);




//function
function handleContact(event){

    event.preventDefault(); // will stop reloading, will cancel the default behaviour of onsubmit 
    // console.log(handleContact);
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.email);
    // console.log(event.target.message);
    const name=event.target.name.value;
    const email=event.target.email.value;
    const message=event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);

    const successContainer= document.getElementById("success_container") ;

    // console.log(document); //whole html code will show on document
    console.log(successContainer);

    const nameParagraph=document.createElement("p");  // creating paragraph container with js
    nameParagraph.innerText=`Your Name: ${name}`;  // will show the name received from name field
    // will set paragraph innertext and show it, `is called backtick


    const emailParagraph=document.createElement("p");
    emailParagraph.innerText=`Your Email : ${email}`;

    const messageParagraph=document.createElement("p");
    messageParagraph.innerText=`Your Message : ${message}`;

    console.log(nameParagraph);
    console.log(emailParagraph);
    console.log(messageParagraph);

    successContainer.appendChild(nameParagraph);
    successContainer.appendChild(emailParagraph);
    successContainer.appendChild(messageParagraph);

}







// array of objedcts ( array==>[], objects==>{})  mostly used in calling api and db in professional environment, this syntax is used
const araryImage= [
    {
        url : "./images/project/image 3.png"  // object
    },
    {
        url : "./images/project/image 5.png"
    },
    {
        url : "./images/project/image 6.png"
    },
    {
        url : "./images/project/image 7.png"
    },
];

const firstUrlObject=araryImage[0];  // to access the specific object
const fourthUrlObject=araryImage[3];


// console.log(araryImage);
// console.log(firstUrlObject);
// console.log(fourthUrlObject);
// console.log(fourthUrlObject.url); // to access the direct url link value from object



//loop concept
// for (const i of araryImage) {  // works auto without requiring array length
//     console.log(i);
    
// }

// for (let index = 0; index < araryImage.length; index++) { // works requiring array length
//     const element = araryImage[index];
//     console.log(element);
    
// }



function handleShowMoreProjects(){

    const projectContainer=document.getElementById("projects");
    //console.log("click", projectContainer);

    // const projectDiv=document.createElement("div"); //will create a new empty div
    // const projectImg=document.createElement("img"); //will create a new img
    // console.log(projectDiv, projectImg);


    //kono kichu k UI te dekhate amader k append korte hobe
    for (const item of araryImage) {
        
        const projectDivImage=document.createElement("div");  // creating a new div to contain images from arrayImage
        projectDivImage.classList.add("project");
        projectDivImage.innerHTML=`
        <img src="${item.url}" alt=""> `;// backtick
         

        //these upper three lines is equivalent to this===>
            // <div class="project">
           //      <img src="./images/project/image 3.png" alt="">
          //   </div>
        
        
          // console.log(projectDivImage)
          projectContainer.appendChild(projectDivImage); //kono kichu k UI te dekhate amader k append korte hobe
    }
}