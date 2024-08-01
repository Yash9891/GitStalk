const image =document.querySelector(".gitimage")
const nami =document.querySelector(".name")
const bio =document.querySelector(".bio")
const followers =document.querySelector(".followers")
const hlo=document.querySelector('.hlo')
const locations=document.querySelector('.location')

const buttons=document.querySelectorAll(".button");
const loading=document.querySelector('.gitcard')


async function getData(user){
 try{
    const response= await fetch(`https://api.github.com/users/${user}`);
     const data= await response.json();
    // console.log(data.avatar_url);
   setTimeout(function(){
      nami.innerHTML = data.name?data.name:"Your Batman";
      image.src=data.avatar_url;
      bio.innerHTML=data.bio?data.bio:"I am anonymous, I don't want to share my information does not matter how hard you try to stalk me."
      locations.innerHTML=data.location?`Location: ${data.location}`:"Location: Unknown"
      loading.innerHTML=""
   
      followers.innerHTML=data.followers?`Followers: ${data.followers}`:"Followers:0"
 
   },4000)
 
 }catch(e){
    console.log("Oh no error");

 } 


}

buttons.forEach((button)=>{
   button.addEventListener('click',(e)=>{
      // console.log(e.target.id);
      // getData(e.target.id)
  

   })
})

const form=document.querySelector("form");
const userinput=document.querySelector('.userinput')
form.addEventListener('submit',(e)=>{
   function cleardat(){
      nami.innerHTML = "";
      image.src="";
      bio.innerHTML=""
      hlo.innerHTML=""
     
      locations.innerHTML=""
      followers.innerHTML=""
 
   }
   e.preventDefault();
   // getData(userinput.value)
     setTimeout(function(){
      cleardat()
      loading.innerHTML="Please wait..."

   
   },1000)
   setTimeout(function(){
      cleardat()
      loading.innerHTML="Fetching data..."
   
   },2000)
   setTimeout(function(){
      cleardat()
      loading.innerHTML="Fetching completed..."
   
   },3000)

   getData(userinput.value)

     

   console.log(userinput.value);
userinput.value=""
})


