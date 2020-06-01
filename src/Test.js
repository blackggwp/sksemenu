export const request = async () => {
    try {
      const response = await fetch('/api/cats');
      const json = await response.json();
      console.log(json);
    }
    catch (e) {
      console.log('api error', e);
    }
  }