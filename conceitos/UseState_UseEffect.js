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