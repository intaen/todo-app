const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getAllAnswer = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed getAllAnswer');
    }
    const data = await response.json();
    return data.slice(0, 7);
}

export const addAnswer = async (title) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            title,
            completed: false,
            id: 0
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed addAnswer');
    }
    const data = await response.json();
    return data;
}

export const toggleAnswer = async (id, completed) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to toggleAnswer');
    const updatedTodo = await response.json();
    return updatedTodo;
  };
  
  export const deleteAnswer = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to deleteAnswer');
  };