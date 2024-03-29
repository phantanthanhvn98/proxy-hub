import React from 'react';
import './App.css';
import Header from './header/header';
import RouterApp from './layout/router';
import Footer from './footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <BrowserRouter>
         <ConfigProvider
         theme={{
            token: {
              colorPrimary: '#AE01FF',
            },
          }}
          >
            <div className='flex flex-col'>
                <Header />
                <RouterApp />
                <Footer />
            </div>
        </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
