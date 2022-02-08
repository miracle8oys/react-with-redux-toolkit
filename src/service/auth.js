export const login = (username, password) => {
    let data = fetch(`http://localhost:8000/api/v1/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(err => {
        return err
    })

    return data;
}
