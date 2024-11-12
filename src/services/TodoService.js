const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed fetchTodos: ');
    }
    const data = await response.json();
    return data.slice(0, 7);
}

export default fetchTodos