import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {ProductModel} from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
	const params = useParams<{id: string}>(); 
	const [product, setProduct] = useState<ProductModel>();

	useEffect(() => {
		if (params.id) {
			ProductService.getById(parseInt(params.id)).then(response => {
				setProduct(response.data);
			});
		}
	}, []);

	return (
		<div>
			<p>{product?.title}</p>
		</div>
	);
};
export default ProductDetail;
