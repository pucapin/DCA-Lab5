async function getData() {
  return fetch('https://fakestoreapi.com/products')
  .then(function(response) {
    console.log(response)
    return response.json();
  })
  .catch(function(error) {
    console.log("There's an issue with the fetch request :(" + error);
  });
}

export default getData;