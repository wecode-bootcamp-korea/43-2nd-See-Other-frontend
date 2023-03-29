import { useState, useEffect } from 'react';

const useFetch = (url, method) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`${url}`, {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setState(data));
  }, [url, method]);

  return [state];
};

export default useFetch;
