async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

const simpleFetch = async (url) => {
  try {
    const response = await fetch(url);
    // console.log(response);
    // console.log(response.body);
    const data = await response.json();
    console.log(data);
    // console.log(typeof data);
    // console.log(typeof data.completed);
  } catch (error) {
    console.log(error);
  }
};

simpleFetch("https://jsonplaceholder.typicode.com/todos/1");
// getData();
