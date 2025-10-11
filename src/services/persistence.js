const STORAGE_KEY = 'cv-maker-data';
const AUTOSAVE_DELAY = 1000; // 1 second debounce

let saveTimeout = null;

export const saveToLocalStorage = (data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
    return true;
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
    return false;
  }
};

export const loadFromLocalStorage = () => {
  try {
    const jsonData = localStorage.getItem(STORAGE_KEY);
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return null;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
};

export const clearLocalStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear localStorage:', error);
    return false;
  }
};

export const debouncedSave = (data, callback) => {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(() => {
    const success = saveToLocalStorage(data);
    if (callback) {
      callback(success);
    }
  }, AUTOSAVE_DELAY);
};
