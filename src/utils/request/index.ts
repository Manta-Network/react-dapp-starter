export const getFetcher = async (url: string, RequestInit: RequestInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      ...RequestInit
    });
    return await res.json();
  } catch (error) {
    console.error(url, error);
  }
};
