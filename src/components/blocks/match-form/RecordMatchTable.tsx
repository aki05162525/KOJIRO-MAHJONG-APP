import SelectWind from "@/components/elements/select-wind/SelectWind";
import { Input, Table } from "@chakra-ui/react";

const RecordMatchTable = () => {
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>家</Table.ColumnHeader>
          <Table.ColumnHeader>プレイヤー</Table.ColumnHeader>
          <Table.ColumnHeader>点数</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">pt</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>
              <SelectWind />
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>
              <Input size="xs" width="50px" />
              00点
            </Table.Cell>
            <Table.Cell textAlign="end">
              {(item.score - 25000) / 1000}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const items = [
  { id: 1, seat: 0, name: "りゅうと", score: 35400, point: 999.99 },
  { id: 2, seat: 1, name: "なるみ", score: 25000, point: 49.99 },
  { id: 3, seat: 2, name: "りゅうじろう", score: 15000, point: 150.0 },
  { id: 4, seat: 3, name: "あきひろ", score: 79999, point: 799.99 },
];

export default RecordMatchTable;
