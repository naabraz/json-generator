const requestGenerator = () => console.log('testing');

const restCall = async (path: string) => {
  const url = `http://localhost:8000/${path}`;

  const response = await fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  const data = await response.json();

  return data;
};

const getAPITime = async () => {
  try {
    const data = await restCall('time');
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('getAPITime:', error);
  }
};

export { requestGenerator, getAPITime };
