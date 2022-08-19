import React from 'react';
import Skeletion from '../common/Skeletion';
import Table, { TableBody, TableCell, TableHead, TableRow } from '../common/Table';

const AssetLoanTable = ({ data }) => {
    return (
        <Table stickyHeader border radius>
            <TableHead>
                <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Ngày cho vay</TableCell>
                    <TableCell>Ngày đáo hạn</TableCell>
                    <TableCell>Mã CK</TableCell>
                    <TableCell>Phân loại cho vay</TableCell>
                    <TableCell>Khối lượng</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.calories}</TableCell>
                        <TableCell>{item.fat}</TableCell>
                        <TableCell>{item.carbs}</TableCell>
                        <TableCell>{item.protein}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AssetLoanTable;
