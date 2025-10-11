import React from 'react';

export const PreviewColumn = ({ children }) => {
  return (
    <main className="flex justify-center items-start">
      <div className="w-full max-w-[850px]">
        {children}
      </div>
    </main>
  );
};
