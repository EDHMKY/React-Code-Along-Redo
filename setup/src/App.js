import React, { useState } from 'react';
const List= ({people}) => {
import data from './data';
import List from './List';
function App() {
const [people,setPeople]=useState(data)
  return(
    <main>
       <section className="container">
    <h3>0 birthdays today</h3>
    <List/>
    <button onClick={()=> console.console.log('you clicked me')}>clear all</button>
    </section>
    </main>
    );
}
    {people.map((person)}=>{
      const{id,name,age,image} = person;
      return <article key={id}></article>
    })}
    </>
  );
  };
  <main>

  <section className="container">
    <h3>0 birthdays today</h3>
    <List/>
    <button onClick={()=> console.console.log('you clicked me')}>clear all</button>
    </section>
    </main>
    );
}

export default App;
