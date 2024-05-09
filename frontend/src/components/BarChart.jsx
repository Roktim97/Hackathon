import Plot from 'react-plotly.js';

const BarChart = () => {
  return (
    <Plot
        data={[
            {
                x: ["Italy","France","Spain","USA","Argentina"],
                y: [55, 49, 44, 24, 15],
                type: "bar"
            }
        ]}
        layout = {{title:"World Wide Wine Production"}}
    />
  )
}

export default BarChart