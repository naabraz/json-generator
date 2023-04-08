const restPost = async (path: string, body: object) => {
  const url = `http://localhost:8000/${path}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};

interface DocValues {
  name: string;
  year: string;
  type: string;
}

const requestDocCreation = (values: DocValues) => {
  try {
    restPost('create', values);
  } catch (error) {
    console.error('requestDocCreation:', error);
  }
};

export { requestDocCreation };
