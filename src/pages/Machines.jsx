import Machine from './Machine';

export default function Machines() {
    return (
        <>
			<br />
			<br />
			<div className="text-1">Choose a Machine</div>
			<br />
				<div className="machines">
					<Machine name="Machine 1" status="Online" updates={10} positiveFeedback={452} negativeFeedback={63} successRate={87}/>
					<Machine name="Machine 2" status="Offline" updates={8} positiveFeedback={300} negativeFeedback={50} successRate={75}/>
					<Machine name="Machine 3" status="Online" updates={5} positiveFeedback={200} negativeFeedback={95} successRate={52}/>
					<Machine name="Machine 4" status="Offline" updates={12} positiveFeedback={480} negativeFeedback={30} successRate={92}/>
			</div>
			<br />
			<div className="text-1">MosaicMind V1</div>
        </>
    );
}
