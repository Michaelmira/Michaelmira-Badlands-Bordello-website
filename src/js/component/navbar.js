import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		
		<nav className="navbar navbar-expand-lg mb-2 pt-1 pb-0"style={{ backgroundColor: 'rgb(204, 126, 84)' }}>
			<div className="container-fluid">
				<span className="navbar-brand text-black">
					<h4 style={{ fontFamily: 'Pacifico', fontWeight: 'light' }} className="fw-light">
						Badlands Bordello
					</h4>
				</span>
				<form>
					<div className="row">
						<div className="col-md-auto">
							<button type="button" className="btn btn-success text-white btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Join our Email List!
							</button>
						</div>
					</div>
					<div className="col-md-auto">
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item dropdown "/>
								<a className="nav-link dropdown-toggle border btn-secondary text-light btn-sm pt-0 pb-0 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="fa-solid fa-gear pt-2 pb-2"></i>
								</a>
							</ul>
							<ul className="dropdown-menu dropdown-menu-end">
								<li><a className="dropdown-item" href="#">Profile</a></li>
								<li><a className="dropdown-item" href="#">Accessibility</a></li>
								<li><a className="dropdown-item" href="#">Security and Data</a></li>
								<li><a className="dropdown-item" href="#">Log out</a></li>
							</ul>  		
						</div>
					</div>
				</form>
			</div>
	
	{/* <!-- Modal-Start --> */}
			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Join Our Email List!</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="form-group mb-2 mt-0">
								<form className="mb-1">
									<label for="exampleInputEmail1">Your Full Name and Email</label>
								</form>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Full Name"/>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Here"/>
							</div>
								<i className="fas fa-camera fa-1x border btn"></i>
								<i className="fas fa-map-marker-alt fa-1x border btn"></i>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-success">Publish</button>
					</div>
				</div>
			</div>
	{/* <!-- Modal-End --> */}
		</nav>
		
	);
};
