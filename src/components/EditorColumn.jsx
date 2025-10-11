import React from 'react';

export const EditorColumn = ({ children }) => {
  return (
    <aside className="bg-white rounded-lg shadow-sm p-6 h-fit max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="space-y-6">
        {children}
      </div>
    </aside>
  );
};
