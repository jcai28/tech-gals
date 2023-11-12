const API_BASE_URL = 'https://api.example.com'; // TODO: replace this with real url later

const fetchData = async (pathName, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${pathName}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getData = (pathName) => fetchData(pathName);

export const postData = (pathName, body) => fetchData(pathName, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const putData = (pathName, body) => fetchData(pathName, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const deleteData = (pathName) => fetchData(pathName, { method: 'DELETE' }).then(() =>  alert('deleted!')); // modify this later
