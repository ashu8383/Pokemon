const useLocalStorage = () => {
  const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log('Remove item Erro ===>', error);
      return false;
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useLocalStorage;
