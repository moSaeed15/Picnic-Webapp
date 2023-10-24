import React, { useContext, createContext, useState, useEffect } from 'react';
import { useToast as useChakraToast } from '@chakra-ui/react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const toast = useChakraToast();
  const [msg, setMsg] = useState({ title: '', description: '', status: '' });

  useEffect(() => {
    if (msg.title && msg.description && msg.status) {
      toast({
        title: msg.title,
        description: msg.description,
        status: msg.status,
        duration: 3000,
        isClosable: true,
      });
    }
  }, [msg, toast]);

  return (
    <ToastContext.Provider value={setMsg}>{children}</ToastContext.Provider>
  );
}

export function useToastReact() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
