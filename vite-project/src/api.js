

export async function getTasks(token) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("произошла проблема с загрузкой");
    }
    return data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addNewCard({token, newTask}) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("произошла проблема с загрузкой");
    }
    const data = await response.json();
    return data.tasks;
  } catch (error) {
    if(error.message === "Failed to fetch")
      throw new Error("Запрос на сервер не выполнен, проверьте подключение к сети интернет")
    else
      throw new Error(error.message);
  }
}

export async function signIn({login, password}) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("произошла ошибка авторизации");
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    if(error.message === "Failed to fetch")
      return  ("Запрос на сервер не выполнен, проверьте подключение к сети интернет")
    else 
    return (error.message);
  }
}

export async function signUp({login, name, password}) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("пользователь с таким именем уже существует");
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    if(error.message === "Failed to fetch")
      return  ("Запрос на сервер не выполнен, проверьте подключение к сети интернет")
    else 
    return (error.message);
  }
}
