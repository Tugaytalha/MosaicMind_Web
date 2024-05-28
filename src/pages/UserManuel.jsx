import '../css/home.css'

export default function UserManual(){
	return (
		<>

			<div className="man-table">
				<div className="man-sub-table">
					<p className="text-4">Table of Contents</p>
					<div className="man-sub-inner-table">
						<p className="text-5">1.) <a style={{color:"inherit"}} href="#introduction">Introduction</a></p>
						<p className="text-5">2.) <a style={{color:"inherit"}} href="#systemoverview">System Overview</a></p>
						<p className="text-5">3.) <a style={{color:"inherit"}} href="#setup">Installation and Setup</a></p>
						<p className="text-5">4.) <a style={{color:"inherit"}} href="#userguide">User Guide</a></p>

						<p className="text-5">&emsp; a) <a style={{color:"inherit"}} href="#usergide-mobileapp">Mobile Application</a></p>
						<p className="text-5">&emsp; b) <a style={{color:"inherit"}} href="#userguide-webdashboard">Web Dashboard</a></p>

						<p className="text-5">5.) <a style={{color:"inherit"}} href="#technicaldetails">Technical Details</a></p>
						
						<p className="text-5">&emsp; a) <a style={{color:"inherit"}} href="#AIModule">AI Module</a></p>
						<p className="text-5">&emsp; b) <a style={{color:"inherit"}} href="#hardwaremodule">Hardware Module</a></p>
						<p className="text-5">&emsp; c) <a style={{color:"inherit"}} href="#mobileapplication">Mobile Application Module</a></p>
						<p className="text-5">&emsp; d) <a style={{color:"inherit"}} href="#webmodule">Web Module</a></p>

					</div>
				</div>
				<div className="man-sub-table">
					<p className="text-4" id="introduction">1) Introduction</p>
					<p className="text-1">Welcome to MosaicMind, a privacy-preserving image analysis system developed by Group 3 - ByteBazaar. This manual will guide you through the installation, setup, and usage of MosaicMind, including detailed instructions for both the mobile application and the web dashboard.</p>
				</div>
				<div className="man-sub-table">
					<p className="text-4" id="systemoverview">2) System Overview</p>
					<p className="text-1">MosaicMind is an image captioning system leveraging federated learning to ensure privacy. It consists of:</p>
					<div className="man-sub-inner-table">
						<p className="text-5">1.) A central Server</p>
						<p className="text-5">2.) Four Raspberry Pi 4 devices acting as clients</p>
						<p className="text-5">3.) A mobile application for image input and feedback</p>
						<p className="text-5">4.) A web dashboard for monitoring system performance</p>
					</div>
					<p className="text-1">The core technology involves an encoder-decoder architecture with an attention mechanism for image captioning, trained using federated learning to keep user data decentralized and private.</p>
				</div>
				<div className="man-sub-table">
					<p id="setup" className="text-4">3) Installation and Setup</p>
					<div className="man-sub-inner-table">
						<p className="text-5"><strong>1.) Central Server</strong></p>
						<div className="box">
							<p className="text-6">a) Install Dependencies: Ensure the server has Python and necessary libraries installed.</p>
							<p className="text-6">b) Set Up Federated Learning Framework: Follow the framework’s installation guide.</p>
							<p className="text-6">c) Deploy Server CodeUpload and configure the server code to handle federated learning and model aggregation.</p>
						</div>

						<p className="text-5"><strong>2.) Raspberry Pi Devices</strong></p>
						<div className="box">
							<p className="text-6">a) Prepare Rasberry Pi: Install Raspbian OS and required dependencies.</p>
							<p className="text-6">b) Deploy Client Code: Upload the client code that handles image captioning and communication with the server.</p>
							<p className="text-6">c) Network Configuration: Ensure stable network connectivity for continuous operation.</p>
						</div>

						<p className="text-5"><strong>3.) Mobile Application</strong></p>
						<div className="box">
							<p className="text-6">a) Download and Install: Install the MosaicMind app from the designated app store.</p>
							<p className="text-6">b) Account Setup: Register and log in to the app.</p>
						</div>

						
						<p className="text-5"><strong>4.) Web Dashboard</strong></p>
						<div className="box">
							<p className="text-6">a) Hosting: Deploy the web dashboard on a suitable web hosting service.</p>
							<p className="text-6">b) Configure Backend: Link the dashboard to the central server for real-time data updates.s</p>
						</div>
					</div>
				</div>
				<div className="man-sub-table">
					<p id="userguide" className="text-4">4) User Guide</p>
					<div className="man-sub-inner-table">
						<p id="usergide-mobileapp" className="text-5"><strong>1.) Mobile Application</strong></p>
						<div className="box">
							<p className="text-5">Registration and Login</p>
							<p className="text-6">&emsp;a) Open App: Launch the MosaicMind mobile app.</p>
							<p className="text-6">&emsp;b) Register: Create a new account by providing the necessary details.</p>
							<p className="text-6">&emsp;c) Login: Use your credentials to log in to the app.</p>
						</div>

						<div className="box">
							<p className="text-5">Image upload and Captioning</p>
							<p className="text-6">&emsp;a) Select Client: Launch the MosaicMind mobile app.</p>
							<p className="text-6">&emsp;b) Upload Image: Create a new account by providing the necessary details.</p>
							<p className="text-6">&emsp;c) Send Image: Use your credentials to log in to the app.</p>
							<p className="text-6">&emsp;d) View Caption: The generated caption is displayed in the app.</p>
							<p className="text-6">&emsp;e) Submit Feedback: Confirm or edit the caption and send feedback to improve the model.</p>
						</div>

						<p id="userguide-webdashboard" className="text-5"><strong>Web Dashboard</strong></p>
						<div className="box">
							<p className="text-5">Accessing the Dashboard</p>
							<p className="text-6">&emsp;a) Open Website: Navigate to the MosaicMind website (<link src="https://main--mosaicmind.netlify.app/" />https://main--mosaicmind.netlify.app/<link/>).</p>
							<p className="text-6">&emsp;b) Login: Enter the admin credentials (username: ceng, password: 123).</p>
						</div>
						
						<div className="box">
							<p className="text-5">Monitoring and Management</p>
							<p className="text-6">&emsp;a) Dashboard Overview: View the status of client devices, including the number of mistakes, model updates, and online status.</p>
							<p className="text-6">&emsp;b) Detailed Status: Check the detailed performance metrics for each model and device.</p>
						</div>

						
					</div>
				</div>
				<div className="man-sub-table">
					<p id="technicaldetails" className="text-4">5) Technical Details</p>
					<div className="man-sub-inner-table">
						<p id="AIModule" className="text-5"><strong>1.) AI Module</strong></p>
						<p className="text-6">a) Functionality: Image captioning and federated learning model training.</p>
						<p className="text-6">b) Architecture: Encoder-decoder with an attention mechanism.</p>
						<p className="text-6">c) Challenges: Resource constraints on Raspberry Pi, data scarcity, and C++ development complexity.</p>
						
						<br />
						
						<p id="hardwaremodule" className="text-5"><strong>2.) Hardware Module</strong></p>
						<p className="text-6">a) Functionality: Image processing and federated learning client operations on Raspberry Pi devices.</p>
						<p className="text-6">b) Challenges: Network connectivity and hardware limitations.</p>
						
						<br />
						
						<p id="mobileapplication" className="text-5"><strong>3.) Mobile Application Module</strong></p>
						<p className="text-6">a) Functionality: User interface for image upload and feedback.</p>
						<p className="text-6">b) Challenges: User interface design, cross-platform compatibility, and data security.</p>
						
						<br />
						
						<p id="webmodule" className="text-5"><strong>4.) Web Module</strong></p>
						<p className="text-6">a) Functionality: Monitoring system performance and client device status.</p>
						<p className="text-6">b) Challenges: Implementing robust security measures.</p>
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>

		
		</>	
	)
}