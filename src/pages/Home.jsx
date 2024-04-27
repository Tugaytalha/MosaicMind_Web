import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="text-1">Welcome to the Mosaic Mind</div>
                <img src={require("../logo.png")} alt=""/>
                <div className="buttons">
                    <Link to="/signin">
                        <button className='orangeButton'>Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className='orangeButton'>Sign Up</button>
                    </Link>
                </div>
                <div className="text-1">MosaicMind V.1</div>
            </div>
        </>
    );
}
