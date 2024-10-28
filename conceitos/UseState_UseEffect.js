/*
    -> UseState: É um hook usado para gerenciar estados internos de componentes funconais. Ele permite que você crrie varias variaveis de estado
    e atualize o valor delas dentro do componente.
*/

//Exemplo:
const [state, setState] = useState(initialValue);
// State: é o valor atual do estado
// SetState: É a função que permite atualizar o valor do estado
// initialValue: o valor inicial que o estado terá ao carregar o componente pela primeira vez.

//Exemplo 2:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

// Neste exemplo, count é o estado que armazena o número de cliques, e setCount é a função que atualiza o valor de count.


/*
    -> UseEffect: É um hook que permite lidar com efeitos colaterais em componentes funcionais. Ele é executado apos o render 
    do componente e é util para lidar com operações assíncronas, como chamadas de API, manipulação do DOM, timers, entre outros.
*/

//EXEMPLO:

useEffect(() => {
   
    return () => {
    
    };
  }, [dependencies]);

//Efeito: é o codigo que você deseja executar apos o render do componente
//Limpeza: é a função opcional que limpa o efeito quando o componente é desmontado ou quando as dependencias mudam
//Dependencias: É um array que contem valores que, quando mudam, fazem o useEffect ser executado novamente. Quando vazio([]), o efeito executado apenas uma vez, no primeiro render.
  
//Exemplo 2:
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return <p>Segundos: {seconds}</p>;
}
/*  Neste exemplo, useEffect cria um intervalo de 1 segundo para atualizar o estado seconds.
    A função de limpeza (clearInterval) é usada para limpar o intervalo quando o componente for desmontado.
*/