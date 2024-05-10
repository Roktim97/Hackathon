import Plot from 'react-plotly.js';

const BarChart = (prop) => {
  return (
    <Plot
        data={[
            {
                x: prop.data.fields,
                y: prop.data.count,
                type: "bar"
            }
        ]}
        layout = {{title:prop.title}}
    />
  )
}

export default BarChart