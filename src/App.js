export const App = () => {
	const openProduct = () => {};
	const products = new Array(8).fill(null).map((_, index) => ({ id: index }));

	return (
		<div className="container">
			<div className="row clearfix">
				<div className="find-box">
					<h1>
						Travel Store
						<br />
					</h1>
					<h4>Vendendo tudo antes de #partir.</h4>
				</div>
			</div>
			<div className="row clearfix">
				{products.map((product, index) => (
					<div
						className="col-lg-3 col-sm-6 col-md-3"
						key={product.id}
					>
						<a onClick={() => openProduct(index + 1)}>
							<div className="box-img">
								<h4>Product</h4>
								<img src={`product/${index + 1}.png`} alt="" />
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};
