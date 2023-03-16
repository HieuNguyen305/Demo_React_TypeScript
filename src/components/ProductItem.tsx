import { Col, Row } from "antd";
import { Card } from "antd";
import { Product } from "../duck/type";
const { Meta } = Card;
interface Props {
  product: Product;
}
export default function ProductItem(props: Props) {
  const {
    product: { name, description, image },
  } = props;
  return (
    <Col span={8} className="p-3">
      <Card hoverable cover={<img alt="example" src={image} />}>
        <Meta title={name} description={description} />
      </Card>
    </Col>
  );
}
