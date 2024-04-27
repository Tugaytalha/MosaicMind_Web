export default function Machine({ name, status, updates, positiveFeedback, negativeFeedback, successRate }) {
    return (
        <div className="machineN">
			<p className="text-1">{name}</p>
            <img src={require("../pc-icone.jpg")} alt="" className="machineImg" />
            
            <div className="machineStatus">
                <div className={`statusRepresentation-${status.toLowerCase()}`}></div>
                <div className="statusText">{status}</div>
            </div>
            
            <p className="text-2">This machine is updated {updates} times!</p>

            <p className="text-1">Total result</p>
                
            <div className="success">
                <p className="text-2">{positiveFeedback} user responded positive!</p>
            </div>
            <div className="failure">
                <p className="text-2">{negativeFeedback} user responded negative!</p>
            </div>
            <div className="percentage">
                <p className="text-2">
                    The success rate is {successRate}%
                </p>
            </div>
        </div>
    );
}
