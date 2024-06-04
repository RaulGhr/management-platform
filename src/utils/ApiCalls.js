export async function logIn(user) {
    try{
        const response = await fetch('http://localhost:8080/user/logIn', {
            method: 'Post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.status === 404) {
            return{"error": "User not found"};

        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}

export async function logOut(user) {
    try{
        const response = await fetch('http://localhost:8080/user/logOut', {
            method: 'Post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.status === 404) {
            return{"error": "User not found"};

        }
        return {};
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}

export async function register(user) {
    try{
        const response = await fetch('http://localhost:8080/user/register', {
            method: 'Post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.status === 404) {
            return{"error": "User not found"};

        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}

export async function getActiveUsers(user) {
    try{
        const response = await fetch('http://localhost:8080/user/active', {
            method: 'Get',
            headers: {
            'Content-Type': 'application/json',
            }
        });
        if (response.status === 404) {
            return{"error": "Users not found"};

        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}

export async function addTask(task) {
    try{
        const response = await fetch('http://localhost:8080/task', {
            method: 'Post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
        if (response.status === 404) {
            return{"error": "Error adding task"};

        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}

export async function getTasksForUser(user) {
    try{
        const response = await fetch('http://localhost:8080/task/user', {
            method: 'Post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.status === 404) {
            return{"error": "Error adding task"};

        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}

export async function updateTask(task) {
    try{
        const response = await fetch('http://localhost:8080/task', {
            method: 'Put',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
        if (response.status === 404) {
            return{"error": "Error updating task"};

        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("ApiCalls",err);
    }
}


