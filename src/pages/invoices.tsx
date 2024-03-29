import React from "react"

import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  id: string;
  amount: string;
  status: string
  content: string
  createdAt: string;
  method: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Invoice ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
  },
];

const data: DataType[] = [
  {
    id: '1',
    amount: '$100',
    status: "test 1",
    content: "test 1",
    createdAt: "test 1",
    method: "test 1"
  },
  {
    id: '2',
    amount: '$100',
    status: "test 2",
    content: "test 2",
    createdAt: "test 2",
    method: "test 2"
  },
  {
    id: '3',
    amount: '$100',
    status: "test 3",
    content: "test 3",
    createdAt: "test 3",
    method: "test 3"
  },
];
const Invoices = () => {
    return (
        <div className="pl-[271px] pr-[16px] py-[100px] flex flex-col gap-8 max-[1200px]:pl-4">
            <div className="text-[24px] font-[700]">
                Invoices
            </div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default Invoices;
