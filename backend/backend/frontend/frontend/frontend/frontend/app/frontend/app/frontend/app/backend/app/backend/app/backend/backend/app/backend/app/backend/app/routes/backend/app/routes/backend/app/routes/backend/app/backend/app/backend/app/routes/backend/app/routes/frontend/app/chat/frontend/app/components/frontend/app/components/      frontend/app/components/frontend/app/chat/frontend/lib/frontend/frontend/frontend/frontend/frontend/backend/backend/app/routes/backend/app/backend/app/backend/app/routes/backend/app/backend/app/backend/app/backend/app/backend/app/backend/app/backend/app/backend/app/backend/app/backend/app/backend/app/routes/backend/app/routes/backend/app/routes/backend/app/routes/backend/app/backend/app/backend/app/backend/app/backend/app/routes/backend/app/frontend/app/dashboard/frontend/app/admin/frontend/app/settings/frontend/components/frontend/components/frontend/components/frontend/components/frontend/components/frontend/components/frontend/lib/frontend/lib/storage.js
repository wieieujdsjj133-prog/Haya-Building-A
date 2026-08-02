const STORAGE_PREFIX = "haya_";


export function saveData(
  key,
  value
) {

  if (typeof window !== "undefined") {

    localStorage.setItem(
      STORAGE_PREFIX + key,
      JSON.stringify(value)
    );

  }

}



export function getData(
  key
) {

  if (typeof window !== "undefined") {

    const data = localStorage.getItem(
      STORAGE_PREFIX + key
    );

    return data
      ? JSON.parse(data)
      : null;

  }

  return null;

}



export function removeData(
  key
) {

  if (typeof window !== "undefined") {

    localStorage.removeItem(
      STORAGE_PREFIX + key
    );

  }

}



export function clearStorage() {

  if (typeof window !== "undefined") {

    Object.keys(localStorage)
      .filter((key) =>
        key.startsWith(
          STORAGE_PREFIX
        )
      )
      .forEach((key) =>
        localStorage.removeItem(key)
      );

  }

      }
