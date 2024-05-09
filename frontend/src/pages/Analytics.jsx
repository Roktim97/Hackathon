import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const Analytics = () => {
  return (
    <>
        <div>
            <h1 className="text-4xl text-center p-5 uppercase text-blue-600 underline">Analytics Dashboard</h1>
            <BarChart/>
            <PieChart/>
            <BarChart/>
            <PieChart/>
        </div>
    </>
  );
};

export default Analytics;
