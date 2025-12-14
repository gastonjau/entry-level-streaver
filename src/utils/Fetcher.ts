const fetcher = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Error en la petición");
    return res.json();
  });

export { fetcher };