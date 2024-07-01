import { ResponsiveBar } from '@nivo/bar';
import messagesPerDay from '../../../messagesPerDay.json'; // privacy-rm

type MessageDay = {
    date: string;
    Adam: number;
    Tanya: number;
}


const MessagesPerDayChart = () => {
    const msgData: MessageDay[] = messagesPerDay as MessageDay[];
    
    return (
        <div style={{ height: 400 }}>
            <ResponsiveBar
                data={msgData}
                keys={['Adam', 'Tanya']}
                indexBy="date"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="stacked"
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'date',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'message count',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                animate={true}
                // motionStiffness={90}
                // motionDamping={15}
            />
        </div>
    );
};

export default MessagesPerDayChart;
