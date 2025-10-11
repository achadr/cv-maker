import { useEffect, useState } from 'react';
import { useCVStore } from '../store/cvStore';
import { debouncedSave, loadFromLocalStorage } from '../services/persistence';

export const useAutosave = () => {
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved', 'saving', 'error'
  const [lastSaved, setLastSaved] = useState(null);
  const store = useCVStore();

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      store.loadState(savedData);
      setLastSaved(new Date());
    }
  }, []);

  // Autosave whenever store changes
  useEffect(() => {
    setSaveStatus('saving');

    debouncedSave(store.getState(), (success) => {
      if (success) {
        setSaveStatus('saved');
        setLastSaved(new Date());
      } else {
        setSaveStatus('error');
      }
    });
  }, [
    store.personal,
    store.summary,
    store.experience,
    store.education,
    store.skills,
    store.languages,
    store.projects,
    store.meta,
  ]);

  return { saveStatus, lastSaved };
};
