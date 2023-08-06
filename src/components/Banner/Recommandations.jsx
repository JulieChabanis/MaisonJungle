import React from 'react';

const Recommandations = () => {
  // to obtain the current month
  const currentMonth = new Date().getMonth(); 
  // 2 = March and 5 = June, to situation Spring period
  const isSpring = currentMonth >= 2 && currentMonth <= 5; 

  if (!isSpring) {
    return <div>{"Ce n'est pas le printemps"}</div>
  } else {
    return <div>{"C'est le printemps, rempotez !"}</div>
  }
}

export default Recommandations; 