/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
*/

/*
async function loadData () {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    } catch {
        console.log(error);
    }
}

loadData();
*/ // esto es equivalente a: 

try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
} catch {
    console.log(error);
}

// siempre y cuando uses el package.jason


