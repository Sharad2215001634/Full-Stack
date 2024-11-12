


// const fetchPromise = fetch("https://official-joke-api.appspot.com/random_joke");
// fetchPromise.then((response) => {
//     let data = response.json().then((data) => {
//         console.log(data);
//     }).catch((error) =>{
//         console.log(error);
//     })
//     console.log(data);

// }).catch((error) => {
//     console.log(error);
// });


const getJokes = async()=>{
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    console.log(data);
}
getJokes();