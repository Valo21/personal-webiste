import React, { createContext, useState } from 'react';

type ErrorInfo = {
  id: number;
  message: string;
  stack?: string;
};

export const ErrorContext = createContext<{
  errors: ErrorInfo[];
  addError: (error: Error) => void;
}>({
  errors: [],
  addError: () => {},
});

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);

  const addError = (error: Error) => {
    setErrors((prev) => [
      ...prev,
      {
        id: Date.now(),
        message: error.message,
        stack: error.stack,
      },
    ]);
  };

  return (
    <ErrorContext.Provider value={{ errors, addError }}>
      {children}
    </ErrorContext.Provider>
  );
}