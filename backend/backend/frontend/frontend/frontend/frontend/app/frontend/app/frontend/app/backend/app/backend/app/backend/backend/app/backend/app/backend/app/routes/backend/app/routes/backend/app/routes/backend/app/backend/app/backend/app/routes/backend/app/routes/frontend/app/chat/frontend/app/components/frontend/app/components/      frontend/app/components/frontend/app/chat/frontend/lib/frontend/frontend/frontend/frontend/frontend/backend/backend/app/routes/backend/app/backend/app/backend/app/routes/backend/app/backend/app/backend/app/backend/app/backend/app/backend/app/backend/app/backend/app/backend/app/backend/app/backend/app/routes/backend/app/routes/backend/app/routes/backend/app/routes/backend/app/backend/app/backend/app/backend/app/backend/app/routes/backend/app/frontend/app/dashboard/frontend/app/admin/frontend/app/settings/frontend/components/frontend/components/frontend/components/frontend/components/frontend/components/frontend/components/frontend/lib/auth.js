const TOKEN_KEY = "haya_token";


export function saveToken(token) {

  if (typeof window !== "undefined") {

    localStorage.setItem(
      TOKEN_KEY,
      token
    );

  }

}



export function getToken() {

  if (typeof window !== "undefined") {

    return localStorage.getItem(
      TOKEN_KEY
    );

  }

  return null;

}



export function removeToken() {

  if (typeof window !== "undefined") {

    localStorage.removeItem(
      TOKEN_KEY
    );

  }

}



export function isAuthenticated() {

  return Boolean(
    getToken()
  );

}
