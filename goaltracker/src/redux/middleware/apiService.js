const baseUrl = 'http://localhost:64390/';

export const getUrl = (path => baseUrl + path);

export const getOptions = ({ method, body, headerData = {} }) => {
  const headers = { 
    ...headerData, 
    'Content-Type': 'application/json'
  };

  return (
    {
      mode: "cors",
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      headers: headers
    }
  );
}

export const fetchFromApi = ({ path, method, body, headerData }) => {
  const options = { path, method, body, headerData };

  const opt = getOptions(options);
  return fetch(getUrl(path), opt)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Response not ok');
    }
  );
}