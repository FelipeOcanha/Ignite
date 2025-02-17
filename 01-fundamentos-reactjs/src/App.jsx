import { Header } from  './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div> 
      <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>
            <Post author="Felipe" 
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi enim sit aut velit, ullam suscipit ducimus ratione recusandae unde sunt quis magnam praesentium laboriosam. Sed debitis obcaecati earum temporibus!"
            />

            <Post author="Jennifer"
                  content="Olá bom dia"
            />
          </main>
        </div>      
     </div>
  )
}



