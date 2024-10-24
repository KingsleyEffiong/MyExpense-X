import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useProvider } from './PostProviders';



function PieChat() {
    const {userGained, userSpent} = useProvider();
    // Register the elements you're going to use
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Gained', 'Spent'],
  datasets: [
    {
      label: 'Money',
      data: [userGained, userSpent],
      backgroundColor: ['#E0A8AB', '#FFF9F9'],
    },
  ],
};
const options = {
    maintainAspectRatio: false, // Allows custom width and height
  };
    return (
        <div style={{width:'20rem', height:'20rem', position:'absolute', right:'0', top:'35%'}}>
            <Pie  data={data} options={options}/>;
        </div>
    ) 
}

export default PieChat
