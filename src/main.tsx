import React from 'react';
import ReactDOM from 'react-dom/client';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './global.css';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <App />
    {/* </QueryClientProvider>
    <ReactQueryDevtools initialIsOpen={false} /> */}
  </React.StrictMode>,
);
