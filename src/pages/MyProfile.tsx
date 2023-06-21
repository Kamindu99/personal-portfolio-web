import React from 'react'

type Props = {}

const MyProfile = (props: Props) => {
	return (
		<div>
			<body>
				<div className="container-lg mt-5">
					<div className="row">
						<div className="col-lg-3">
							<div className="accordion mb-2" id="accordionExample">
								<div className="card">
									<div className="card-header" id="headingOne">
										<h2 className="mb-0">
											<a data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
												<span><i className="fa fa-user"></i> Account</span>
												<i className="fa fa-chevron-down toggle"></i>
											</a>
										</h2>
									</div>
									<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">
											<ul className="list-group">
												<li className="list-group-item"><a href="#"><i className="fa fa-pencil"></i> Edit Info</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-key"></i> Change Password</a></li>
												<li className="list-group-item"><a href="#" className="text-danger"><i className="fa fa-trash"></i> Delete Account</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<h2 className="mb-0">
											<a data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<span><i className="fa fa-comments"></i> Messages</span>
												<i className="fa fa-chevron-down toggle rotate"></i>
											</a>
										</h2>
									</div>
									<div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											<ul className="list-group">
												<li className="list-group-item"><a href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-pill badge-primary">20</span></a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-paper-plane"></i> Sent</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-file-text"></i> Drafts <span className="badge badge-pill badge-info">15</span></a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-trash"></i> Trash</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingThree">
										<h2 className="mb-0">
											<a data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												<span><i className="fa fa-bar-chart"></i> Reports</span>
												<i className="fa fa-chevron-down toggle"></i>
											</a>
										</h2>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
											<ul className="list-group">
												<li className="list-group-item"><a href="#"><i className="fa fa-dollar"></i> Sales</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-tags"></i> Orders</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-plane"></i> Shipment</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-users"></i> Customers</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFour">
										<h2 className="mb-0">
											<a data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												<span><i className="fa fa-cog"></i> Settings</span>
												<i className="fa fa-chevron-down toggle"></i>
											</a>
										</h2>
									</div>
									<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
										<div className="card-body">
											<ul className="list-group">
												<li className="list-group-item"><a href="#"><i className="fa fa-font"></i> Typography</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-bell"></i> Notifications</a></li>
												<li className="list-group-item"><a href="#"><i className="fa fa-map"></i> Maps</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<h2 className="mb-0"><a href="#"><i className="fa fa-power-off"></i> Logout</a></h2>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							<div className="jumbotron">
								<h1 className="display-4">Hello, world!</h1>
								<p className="lead">This is a simple example of accordion menu that can easily be integrated into any Bootstrap template. You'll find many such examples at <a href="https://www.tutorialrepublic.com" target="_blank">tutorialrepublic.com</a>.</p>
								<hr className="my-4" />
								<a className="btn btn-primary btn-lg" href="https://www.tutorialrepublic.com/snippets/gallery.php" target="_blank">Learn more</a>
							</div>
						</div>
					</div>
				</div>
			</body>
		</div>
	)
}

export default MyProfile