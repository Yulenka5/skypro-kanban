const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTasks() {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
      method: "GET",
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
      throw new Error("произошла проблема с авторизацией");
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
}
