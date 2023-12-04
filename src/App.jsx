import IronComponent from './components/HeroComponent'
import HeaderComponent from './components/HeaderComponent';
import Content from './components/Content';
import React, { useEffect, useState } from 'react';
import LeftBar from './components/LeftBar';
import Footer from './components/Footer';
import { datas } from './data';
import './App.css';



function getDataIron() {
  return new Promise((resolve) =>
    resolve(datas)
  );
}



function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getDataIron();
      setData(data)
      
    };

    fetchUsers();
  }, []);
 

  return (
    <>
      <div className="grid">
        <header className="page-header">
          <div className="content">
            <HeaderComponent />
          </div>
        </header>
        <aside className="page-leftbar">
          <div id="leftbarid" className="content">
            <LeftBar data={data} index={index} setIndex={setIndex}  />
          </div>
        </aside>
        <main className="page-main">
          <div id='contentid' className="content">
            <IronComponent data={data} index={index}/>
            <Content data={data} index={index}  />
          </div>
        </main>
        <footer className="page-footer">
          <div className="content">
            <Footer />
          </div>
        </footer>
      </div>

    </>
  );
}

export default App;
