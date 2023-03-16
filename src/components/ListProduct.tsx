import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import ProductItem from "./ProductItem";
import { actFetchData } from "../duck/actions";
import { RootState } from "../store";
import { Product } from "../duck/type";
import Skeleton from "./Skeleton";

const arraySkeleton = [1, 2, 3, 4, 5, 6];
export default function ListProduct() {
  const props: any = useSelector((state: RootState) => state.productReducer);
  const dispatch: any = useDispatch();
  console.log(props);

  useEffect(() => {
    dispatch(actFetchData());
  }, []);

  const renderListProduct = () => {
    const { loading, data } = props;
    if (loading)
      return arraySkeleton.map((item: number) => <Skeleton key={item} />);
    return data?.map((product: Product, index: number) => (
      <ProductItem key={product.id} product={product} />
    ));
  };
  return (
    <div className="container">
      <Row>{renderListProduct()}</Row>
    </div>
  );
}
