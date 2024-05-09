import Plot from "react-plotly.js"

const PieChart = () => {
  return (
    <Plot
        data={[
          {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            values: [55, 49, 44, 24, 15],
            type: "pie"
          }
        ]}
        layout={{ title: "World Wide Wine Production - Pie Chart" }}
      />
  )
}

export default PieChart