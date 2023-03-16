import { Card, Col } from "antd";
const { Meta } = Card;

export default function Skeleton() {
  return (
    <Col span={8} className="p-3">
      <Card loading={true}>
        <Meta title="Card title" description="This is the description" />
      </Card>
    </Col>
  );
}
