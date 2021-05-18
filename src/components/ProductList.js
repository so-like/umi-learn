import { jsx as _jsx } from "react/jsx-runtime";
import { Table, Popconfirm, Button } from 'antd';
const ProductList = ({ onDelete, products, }) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Actions',
            render: (text, record) => {
                return (_jsx(Popconfirm, Object.assign({ title: "Delete?", onConfirm: () => onDelete(record.id) }, { children: _jsx(Button, { children: "Delete" }, void 0) }), void 0));
            },
        },
    ];
    return _jsx(Table, { dataSource: products, columns: columns }, void 0);
};
export default ProductList;
//# sourceMappingURL=ProductList.js.map