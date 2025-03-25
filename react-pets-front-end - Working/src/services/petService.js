async function index() {
  const url = "http://localhost:3000/pets";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function create(pet) {
  const url = "http://localhost:3000/pets";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(pet),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function show(petId) {
  const url = `http://localhost:3000/pets/${petId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function del(petId) {
  const url = `http://localhost:3000/pets/${petId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function edit(pet) {
  const url = `http://localhost:3000/pets/${pet.id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(pet),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export default { index, create, show, del, edit };
