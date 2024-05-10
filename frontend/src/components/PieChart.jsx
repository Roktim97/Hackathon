import Plot from "react-plotly.js"

const PieChart = (prop) => {
  return (
    <Plot
        data={[
          {
            labels: prop.data.fields,
            values: prop.data.count,
            type: "pie"
          }
        ]}
        layout={{ title: prop.title }}
      />
  )
}

export default PieChart