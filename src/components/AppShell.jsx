import React from 'react';
import { Header } from './Header';
import { useAutosave } from '../hooks/useAutosave';

export const AppShell = ({ children, onExportPDF }) => {
  const { saveStatus } = useAutosave();

  return (
    <div className="min-h-screen bg-background">
      <Header saveStatus={saveStatus} onExportPDF={onExportPDF} />

      <main className="max-w-[1400px] mx-auto p-6">
        {children}
      </main>
    </div>
  );
};
