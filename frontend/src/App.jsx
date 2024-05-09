import './App.css'
import Plot from 'react-plotly.js';

function App() {

  return (
    <>
    <div>

    
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'bar',
          mode: 'lines',
          // marker: {color: 'red'},
        },
        // {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={ {width: 1000, height: 1000, title: 'A Fancy Plot'} }
    />
    </div>
    </>
  )
}

export default App
