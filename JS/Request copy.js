/*
fetch https://jsonplaceholder.typicode.com/users
then get all the ids.
store them in local storage with keys 'ids'
get 'ids' from local storage and parse
increase all the ids by 5
then print parsed ids and first ids array.

*/

//Kazim

  

async function tempFetch(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    let ids = [];
    
    await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        ids = data.map(data => data.id);
        localStorage.setItem('ids', JSON.stringify(ids));
        let ParsedIds = JSON.parse(localStorage.getItem('ids'));
        console.log(ParsedIds);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    
    console.log(ids.map(id => id+5));
}

tempFetch();


/*
fetch https://jsonplaceholder.typicode.com/users
then get all the website.
store them in local storage with keys 'website'
get 'website' from local storage and parse
then print parsed Data

*/

//Abdullah
async function tempFetch2(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        let websites = data.map(data => data.website);
        localStorage.setItem('website', JSON.stringify(websites));
        let ParsedWebsites = JSON.parse(localStorage.getItem('website'));
        console.log(ParsedWebsites);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    
}

tempFetch2();