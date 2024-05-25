import { useEffect, useState } from 'react';
import Machine from './Machine';

export default function Machines() {

	const URL = `https://mosaicmind-web.onrender.com/get-counts` 
	const [machines, setMachines] = useState({});

    const calculateSuccessRate = (positiveFeedback, negativeFeedback) => {
        if (positiveFeedback === 0 || negativeFeedback === 0) {
            return "Not enough data!"
        }
        return "Success Rate: " + Math.round((positiveFeedback / (positiveFeedback + negativeFeedback)) * 100);
    };

	useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
				setMachines(json[0]);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        };

        fetchData();
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setMachines(json[0]);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }else{
        return (
            <>
                <br />
                <br />
                <div className="text-1">Choose a Machine</div>
                <br />
                    <div className="machines">
                    {machines['r1-update-c'] && (
            <Machine
                name="Machine 1"
                status="Online"
                updates={machines['r1-update-c']}
                positiveFeedback={machines['r1-correct-c']}
                negativeFeedback={machines['r1-fail-c']}
                successRate={Math.round((machines['r1-correct-c'] / machines['r1-fail-c']) * 100)}
            />
        )}
                        <Machine name="Machine 1" status={machines['isOnline1'] === 1 ? 'Online' : 'Offline'} updates={machines['r1-update-c']} positiveFeedback={machines['r1-correct-c']} negativeFeedback={machines['r1-fail-c']} successRate = {calculateSuccessRate(machines['r4-correct-c'], machines['r4-fail-c'])}/>
                        <Machine name="Machine 2" status={machines['isOnline2'] === 1 ? 'Online' : 'Offline'} updates={machines['r2-update-c']} positiveFeedback={machines['r2-correct-c']} negativeFeedback={machines['r2-fail-c']} successRate = {calculateSuccessRate(machines['r4-correct-c'], machines['r4-fail-c'])}/>
                        <Machine name="Machine 3" status={machines['isOnline3'] === 1 ? 'Online' : 'Offline'} updates={machines['r3-update-c']} positiveFeedback={machines['r3-correct-c']} negativeFeedback={machines['r3-fail-c']} successRate = {calculateSuccessRate(machines['r4-correct-c'], machines['r4-fail-c'])}/>
                        <Machine name="Machine 4" status={machines['isOnline4'] === 1 ? 'Online' : 'Offline'} updates={machines['r4-update-c']} positiveFeedback={machines['r4-correct-c']} negativeFeedback={machines['r4-fail-c']} successRate = {calculateSuccessRate(machines['r4-correct-c'], machines['r4-fail-c'])}/>
                </div>
                <br />
                <div className="text-1">MosaicMind V1</div>
            </>
        );
    }

}
