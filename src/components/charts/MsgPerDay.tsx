import { ResponsiveBar } from '@nivo/bar';
import messagesPerDay from '../../../messagesPerDay.json'; // privacy-rm

type MessageDay = {
    date: string;
    Adam: number;
    Tanya: number;
}

const MessagesPerDayChart = () => {
    const msgData: MessageDay[] = messagesPerDay as MessageDay[];
    const reversedData = [...msgData].reverse();
    
    return (
        <div style={{ height: 1000 }}>
            <ResponsiveBar
                data={reversedData}
                keys={['Adam', 'Tanya']}
                indexBy="date"
                margin={{ top: 0, right: 100, bottom: 0, left: 10 }}
                padding={0.4}
                layout="horizontal"
                groupMode="stacked"
                colors={{ scheme: 'purpleRed_green' }}
                borderColor="transparent"
                borderWidth={0}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: 0,
                    legend: 'date',
                    legendPosition: 'middle',
                    legendOffset: 40,
                    format: () => '' // Hide axis labels
                }}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: 0,
                    legendPosition: 'middle',
                    legendOffset: -40,
                    format: () => '' // Hide axis labels
                }}
                tooltip={({ id, value, indexValue }) => (
                    <strong> {indexValue}: {id} - {value} </strong>
                )}
                enableLabel={false}
                enableGridY={false}
                animate={true}
            />
        </div>
    );
};

export default MessagesPerDayChart;
