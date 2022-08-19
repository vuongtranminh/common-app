import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from '../common/Table';
import Section, { SectionBody, SectionTitle } from '../Section';

const TableInfo = () => {
    return (
        <div className="order__table-info">
            <div className="order__table">
                <Table border radius>
                    <TableHead>
                        <TableRow>
                            <TableCell rowSpan="2" align="center">
                                STT
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Thời gian
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                SHL
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                SHL gốc
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Mã chứng khoán
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Mua/Bán
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Hủy/Sửa
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Loại lệnh
                            </TableCell>
                            <TableCell colSpan="3" align="center">
                                Khối lượng
                            </TableCell>
                            <TableCell colSpan="2" align="center">
                                Giá
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Giá trị khớp
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Trạng thái
                            </TableCell>
                            <TableCell rowSpan="2" align="center">
                                Người đặt lệnh
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Đặt lệnh</TableCell>
                            <TableCell align="center">Khớp</TableCell>
                            <TableCell align="center">Chưa khớp</TableCell>
                            <TableCell align="center">Đặt lệnh</TableCell>
                            <TableCell align="center">Khớp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">14:00:00</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">G01</TableCell>
                            <TableCell align="center">AAA</TableCell>
                            <TableCell align="center" className="color-success">
                                MUA
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">LO</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">1.000</TableCell>
                            <TableCell align="center">32.000</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">0</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Nguyễn Văn A</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="order__info">
                <Section>
                    <SectionTitle>Lãi/Lỗ</SectionTitle>
                    <SectionBody>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Tài khoản</TableCell>
                                    <TableCell>039C120996 - 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Chủ tài khoản</TableCell>
                                    <TableCell>Nguyễn Văn ABCD XYZ</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>T + 1</TableCell>
                                    <TableCell>10.651.604.886.957</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>T + 2</TableCell>
                                    <TableCell>10.651.604.886.957</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Số dư tiền gửi</TableCell>
                                    <TableCell>10.651.604.886.957</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tổng tiền mua CK</TableCell>
                                    <TableCell>17,766,432,775</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Số dư tiền gửi tạm tính</TableCell>
                                    <TableCell>11,167,078,471,237</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tổng tài sản tạm tính</TableCell>
                                    <TableCell>515,473,584,280</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Lãi/Lỗ tạm tính</TableCell>
                                    <TableCell>497,707,151,505</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>% Lãi/Lỗ</TableCell>
                                    <TableCell>2,801.39%</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </SectionBody>
                </Section>
            </div>
            <div className="order__info--buy-available">
                <Section>
                    <SectionTitle>Lãi/Lỗ</SectionTitle>
                    <SectionBody>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Tài khoản</TableCell>
                                    <TableCell>039C120996 - 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Chủ tài khoản</TableCell>
                                    <TableCell>Nguyễn Văn ABCD XYZ</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>T + 1</TableCell>
                                    <TableCell>10.651.604.886.957</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>T + 2</TableCell>
                                    <TableCell>10.651.604.886.957</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Số dư tiền gửi</TableCell>
                                    <TableCell>10.651.604.886.957</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tổng tiền mua CK</TableCell>
                                    <TableCell>17,766,432,775</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Số dư tiền gửi tạm tính</TableCell>
                                    <TableCell>11,167,078,471,237</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tổng tài sản tạm tính</TableCell>
                                    <TableCell>515,473,584,280</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Lãi/Lỗ tạm tính</TableCell>
                                    <TableCell>497,707,151,505</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>% Lãi/Lỗ</TableCell>
                                    <TableCell>2,801.39%</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </SectionBody>
                </Section>
            </div>
            <div className="order__table--sell-available">
                <Section>
                    <SectionTitle>Khả năng bán</SectionTitle>
                    <SectionBody>
                        <Table border radius>
                            <TableHead>
                                <TableRow>
                                    <TableCell rowSpan="2" align="center">
                                        STT
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Thời gian
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        SHL
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        SHL gốc
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Mã chứng khoán
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Mua/Bán
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Hủy/Sửa
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Loại lệnh
                                    </TableCell>
                                    <TableCell colSpan="3" align="center">
                                        Khối lượng
                                    </TableCell>
                                    <TableCell colSpan="2" align="center">
                                        Giá
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Giá trị khớp
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Trạng thái
                                    </TableCell>
                                    <TableCell rowSpan="2" align="center">
                                        Người đặt lệnh
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Đặt lệnh</TableCell>
                                    <TableCell align="center">Khớp</TableCell>
                                    <TableCell align="center">Chưa khớp</TableCell>
                                    <TableCell align="center">Đặt lệnh</TableCell>
                                    <TableCell align="center">Khớp</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">14:00:00</TableCell>
                                    <TableCell align="center">01</TableCell>
                                    <TableCell align="center">G01</TableCell>
                                    <TableCell align="center">AAA</TableCell>
                                    <TableCell align="center" className="color-success">
                                        MUA
                                    </TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">LO</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">1.000</TableCell>
                                    <TableCell align="center">32.000</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="center">Nguyễn Văn A</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </SectionBody>
                </Section>
            </div>
        </div>
    );
};

export default TableInfo;
