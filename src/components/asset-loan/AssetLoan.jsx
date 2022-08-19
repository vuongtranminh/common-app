import React from 'react';
import Table, { TableBody, TableCell, TableRow } from '../common/Table';

const AssetLoan = ({ data }) => {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell component="th">Tài sản ròng</TableCell>
                    <TableCell component="th">11.557.440.002.816</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th">Tổng tài sản</TableCell>
                    <TableCell component="th">11.557.440.002.816</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th">Tổng tiền</TableCell>
                    <TableCell component="th">11.557.440.002.816</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tiền chưa phong tỏa</TableCell>
                    <TableCell>11.557.440.002.816</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default AssetLoan;
