import React, { useState } from 'react';

export default function ImageUpload() {
    const [imageSrc, setImageSrc] = useState('../cat.jpg'); // Default image

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="image-model">
                {/* Image uploading section */}
                <div className="imgUpload">
                    <div className="text-1">Upload an Image</div>
					<br />
                    <div className="imgUploadChoice">
                        <div className="select" onClick={() => document.getElementById('fileInput').click()}>
                            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} accept="image/*" />
                        </div>
                        <div className="capture" onClick={() => document.getElementById('cameraInput').click()}>
                            <input type="file" id="cameraInput" style={{ display: 'none' }} accept="image/*" capture="environment" onChange={handleImageChange} />
                        </div>
                    </div>
                </div>

                {/* Displaying the result section */}
                <div className="showResult">
                    <div className="text-1">The Result</div>
					<br />
{/*src={imageSrc}*/}                    <img className="userPhotoResult" src={require('../cat.jpg')} alt="Uploaded or Captured" />
                    <div className="result">
                        <p className="text-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptate quaerat eaque dolore et dignissimos repudiandae, voluptatibus error nesciunt culpa facere a cupiditate vero esse?</p>
                    </div>
                    <div className="giveFeedback">
                        <button className='greenButton'>Positive</button>
                        <button className='redButton'>Negative</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="text-1">MosaicMind V.1</div>
        </>
    );
}
