import { useState } from 'react'

function Square({ value, onSquareClick }){

        // kita komentari karena tidak di pakai lagi, karena nilai dari board nya sudah di naikkan
  // kita buat statenya, awalnya string kosaong
  // const [value, setValue] = useState('');

  // kita buat sebuat event ketika diclick , kita setvaluenya
  // function handleClick(){
  //   setValue('X');
  // }


  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  // kita buat state, jad setiap function itu bisa punya state
  // kita bikin array 9, lalu isi nilai awalnya null
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(){
    // kita buat variable baru,tidak pakai variable sudah ada karena nanti akan kepake saat buat time travel

  }

  return (
    <div className='board'>
      
{/* Ya, value pada kode tersebut dapat disebut dengan props di React JS. Props adalah data yang dikirim dari komponen induk ke komponen anak. Komponen anak dapat menggunakan props untuk menentukan bagaimana mereka harus dirender. */}
      <Square value={squares[0]} onSquareClick={handleClick(0)} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  )
}
// kita pindahkan ke atas biar lebih singkat dalam penulisan syntax nya
// export default App 
