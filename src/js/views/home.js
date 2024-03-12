import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
		<div className="container-flex p-0">
  			<ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
    			<li className="nav-item" role="presentation">
      				<button className="nav-link active" id="question-tab" data-bs-toggle="tab" data-bs-target="#question" type="button" role="tab" aria-controls="question" aria-selected="true">Camper Questionnaire</button>
    			</li>
    			<li className="nav-item" role="presentation">
      				<button className="nav-link" id="gallery-tab" data-bs-toggle="tab" data-bs-target="#gallery" type="button" role="tab" aria-controls="gallery" aria-selected="false">Gallery</button>
    			</li>
  			</ul>
  			<div className="tab-content" id="myTabContent">
   				{/* <!-- Camper Questionnaire-Start -->
    			// <!-- Card Start --> */}
				<div className="tab-pane fade show active mt-1" id="question" role="tabpanel" aria-labelledby="question">



					<div className="container-flex text-center d-flex justify-content-center">
						<div className="card mb-3 border border-0" >
							<div className="row">
								<div className="col-md-6">
									<img className="bbimage" style={{ width: '100%' }} src="https://i.ibb.co/kxcpbHv/0group-Photo2023.jpg"/>
								</div>
								<div className="col-md-6">
									<div className="card-body justify-content-center" style={{ width: '100%', justifyContent: 'center' }}>
										<h5 className="card-title">Badlands Bordello 2024 + WAVELINK ART CAR</h5>
										<p className="card-text"> Chill and open-minded camp that embraces adventure and welcomes anyone who wants to join in on the fun. Our members are a diverse group who share a love for new experiences and a laid-back approach to life. Whether we’re hanging out, enjoying a drink or two, or exploring the playa, we always prioritize having a good time and making meaningful connections. This year 2024 we will be hosting a Full-Bar, Djs, Events, and an Absynthe bar.<br /><br />
										Our Full bar is open Monday - Friday 1 PM - 4 PM <br />
										We are open for Special Events Tuesday, Wednesday, Thursday 6 PM - 9 PM<br />
										</p>
										<p className="card-text"><small className="text-body-secondary">Pre-Build August 23th Friday - Satuday - Sunday - Monday August 26th <br /> 
										Strike Saturday Aug 31 - Sunday Sep 1st </small></p>
										<p className="card-text"><small className="text-body-secondary">We will be supplying a brand new Shower 2024, grey water removal, and a charging station  </small></p>
									</div>
								</div>
							</div>
						</div>
					</div>

			

				</div>
				<div className="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery">
					
						<div className="d-flex">
							<div className="">
								<img className="bbGalleryPic" style={{ width: '508px' }} src="https://i.ibb.co/fX4M85f/1frontage2017.jpg" />
							</div>
							<div className="">
								<img className="bbGalleryPic " style={{ width: '508px' }} src="https://i.ibb.co/YjqzBD0/2groupphoto2017.jpg" />
							</div>
							<div className="">
								<img className="bbGalleryPic " style={{ width: '508px' }} src="https://i.ibb.co/NZHMBKp/3-Wavelink1.jpg" />
							</div>
						</div>
						<div className="d-flex">
							<div className="">
								<img className="bbGalleryPic " style={{ width: '508px' }}  src="https://i.ibb.co/qpz2DD6/4-Interiorparty.jpg" />
							</div>
							<div className="">
								<img className="bbGalleryPic " style={{ width: '508px' }} src="https://i.ibb.co/fNYnQYq/5photoOp.jpg" />
							</div>
							<div className="">
								<img className="bbGalleryPic " style={{ width: '508px' }} src="https://i.ibb.co/ryXdZnX/6-Wavelink2.jpg" />
							</div>
						</div>
						<div className="d-flex">
							<div className="">
								<img className="bbGalleryPic " style={{ width: '508px' }} src="https://i.ibb.co/kyBS1dY/7-Wavelink3.jpg" />
							</div>
							<div className="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/L82LC25/8-Frontage-And-Wavelink.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/Y23Vcnb/9-Interior1.jpg" />
							</div>
						</div>
					
					
						<div class="d-flex">
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/F3KJ03P/10-Wavelink4.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/z7QPcBN/11-Interior2.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/bvYrFWX/12-Wavelink5.jpg" />
							</div>
						</div>
						<div class="d-flex">
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/nRk87X1/13-Interior3.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/h977Gf6/14-Waveline-And-Disco-Fish.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/9VpP4BC/15-Door-Solo.jpg" />
							</div>
						</div>
						<div class="d-flex">
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/1XZXgd8/16-Interior4.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/C1ywVGz/17-interior5.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/0hMfBWJ/18interior6.jpg" />
							</div>
						</div>
					
					
						<div class="d-flex">
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/J3MWb4L/19interior7.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/26HWv5x/20people.jpg" />
							</div>
							<div class="">
								<img class="bbGalleryPic "style={{ width: '508px' }} src="https://i.ibb.co/wK6fN3v/21people2.jpg" />
							</div>
						</div>
				
				</div>
					{/* <!-- Gallery-End --> */}
			</div>
		</div>
	
		
	</>
);
