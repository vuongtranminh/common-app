import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab, TabsContent, TabsNav, TabsPane } from '../common/Tabs';
import Autocomplete from '../common/Autocomplete';
import Section, { SectionBody } from '../Section';
import Button from '../common/Button';
import InputDropdown, { InputPlusMinus } from '../InputDropdown';
import Input from '../Input';
import DatePicker from '../common/DatePicker';
import Table, { TableBody, TableCell, TableHead, TableRow } from '../common/Table';

const OrderAction = (props) => {
    const [searchStock, setSearchStock] = useState('AAA');
    const [stock, setStock] = useState({});
    const [items, setItems] = useState([]);

    const fetchStock = () => {
        // search here
        console.log('fetch');
    };

    const handleChange = (value) => {
        setSearchStock(value);
    };

    const handleClickAutoComplete = (stock) => {
        setStock(stock);
    };

    return (
        <Tabs>
            <TabsNav>
                <Tab>Lệnh</Tab>
                <Tab>Lệnh đặt trước</Tab>
                <Tab>Lệnh điều kiện</Tab>
            </TabsNav>
            <TabsContent>
                <TabsPane>
                    <Section>
                        <SectionBody>
                            <div className="tab__order">
                                <div className="stock">
                                    <div className="stock__search">
                                        <div className="stock__search__input">
                                            <i className="bx bxs-star color-warning"></i>
                                            <Autocomplete
                                                value={searchStock}
                                                onSearch={fetchStock}
                                                onChange={handleChange}
                                                onClickAutoComplete={handleClickAutoComplete}
                                                items={items}
                                                hideClear
                                            />
                                        </div>
                                        <span className="stock__search__info">
                                            <span className="color-success">38.250</span>
                                            <span className="color-success">0.53%</span>
                                        </span>
                                        <span className="stock__search__icon">
                                            <i className="bx bx-search"></i>
                                        </span>
                                    </div>
                                    <div className="stock__description">CTCT NHUA & MT XANH AN PHAT | HNX</div>
                                </div>

                                <div className="action">
                                    <div className="action__tabs">
                                        <div className="action__tab action__tab--buy bg-success">
                                            <div className="action__tab__info">
                                                <div className="action__tab__title">Mua</div>
                                                <div className="action__tab__quantity">38.000</div>
                                            </div>
                                        </div>
                                        <div className="action__tab action__tab--edit">
                                            <div className="action__tab__title">Huỷ/Sửa</div>
                                        </div>
                                        <div className="action__tab action__tab--sell">
                                            <div className="action__tab__info">
                                                <div className="action__tab__title">Bán</div>
                                                <div className="action__tab__quantity">38.000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action__content">
                                        <div className="action__panel">
                                            <div className="action__line">
                                                <div className="action__label">Sức mua</div>
                                                <div className="flex-grow-1 text-right">3.187.009.932</div>
                                            </div>
                                            <div className="action__line">
                                                <div className="action__label">KL bán tối đa</div>
                                                <div className="flex-grow-1 text-right">53.900</div>
                                            </div>
                                            <div className="action__line action__line--input">
                                                <div className="action__label">Khối lượng</div>
                                                <div className="action__input__input">
                                                    <InputPlusMinus />
                                                </div>
                                                <div className="action__input__button">
                                                    <Button variant="contained">Tối đa</Button>
                                                </div>
                                            </div>
                                            <div className="action__line action__line--input">
                                                <div className="action__label">Giá</div>
                                                <div className="action__input__input">
                                                    <InputDropdown />
                                                </div>
                                                <div className="action__input__button">
                                                    <Button variant="contained">Giá hiện tại</Button>
                                                </div>
                                            </div>
                                            <div className="action__line">
                                                <div className="action__label">Giá trị</div>
                                                <div className="flex-grow-1 text-center">32.800.000</div>
                                            </div>
                                            <div className="action__line action__line--input justify-start">
                                                <div className="action__label">Điện thoại</div>
                                                <div className="action__input__input">
                                                    <Input />
                                                </div>
                                            </div>
                                            <div className="action__line">
                                                <div className="action__label">Ngày đặt</div>
                                                <div className="flex-grow-1 d-flex justify-space-between">
                                                    <div>
                                                        <DatePicker />
                                                    </div>
                                                    <div>
                                                        <DatePicker />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="action__button">
                                        <Button variant="contained">MUA AAA</Button>
                                    </div>

                                    <div className="info">
                                        <div className="info__grow">
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-warning">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-success">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-danger">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-info">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-purple">11.950</div>
                                            </div>
                                        </div>
                                        <div className="info__grow">
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-success">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-danger">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-info">11.950</div>
                                            </div>
                                            <div className="info__line">
                                                <div className="info__title">Tham chiếu</div>
                                                <div className="info__value color-purple">11.950</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table">
                                        <Table border>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Dư mua</TableCell>
                                                    <TableCell align="center">15:30:00</TableCell>
                                                    <TableCell align="center">Dư bán</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell rowSpan="3"></TableCell>
                                                    <TableCell align="center" className="color-success">
                                                        12.100
                                                    </TableCell>
                                                    <TableCell align="center">12.100</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" className="color-warning">
                                                        12.100
                                                    </TableCell>
                                                    <TableCell align="center">12.100</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" className="color-success">
                                                        12.100
                                                    </TableCell>
                                                    <TableCell align="center">12.100</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" className="color-danger">
                                                        12.100
                                                    </TableCell>
                                                    <TableCell align="center">12.100</TableCell>
                                                    <TableCell rowSpan="3"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" className="color-success">
                                                        12.100
                                                    </TableCell>
                                                    <TableCell align="center">12.100</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" className="color-danger">
                                                        12.100
                                                    </TableCell>
                                                    <TableCell align="center">12.100</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell align="center">Khối lượng</TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div className="table">
                                        <Table border>
                                            <TableHead>
                                                <TableCell align="center">Thời gian</TableCell>
                                                <TableCell align="center">Giá</TableCell>
                                                <TableCell align="center">+/-</TableCell>
                                                <TableCell align="center">Khối lượng</TableCell>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center">15:00:00</TableCell>
                                                    <TableCell align="center" className="color-success">
                                                        12.00
                                                    </TableCell>
                                                    <TableCell align="center" className="color-success">
                                                        0.05
                                                    </TableCell>
                                                    <TableCell align="center">140.200</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center">15:00:00</TableCell>
                                                    <TableCell align="center" className="color-danger">
                                                        12.00
                                                    </TableCell>
                                                    <TableCell align="center" className="color-danger">
                                                        0.05
                                                    </TableCell>
                                                    <TableCell align="center">140.200</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center">15:00:00</TableCell>
                                                    <TableCell align="center" className="color-danger">
                                                        12.00
                                                    </TableCell>
                                                    <TableCell align="center" className="color-danger">
                                                        0.05
                                                    </TableCell>
                                                    <TableCell align="center">140.200</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center">15:00:00</TableCell>
                                                    <TableCell align="center" className="color-danger">
                                                        12.00
                                                    </TableCell>
                                                    <TableCell align="center" className="color-danger">
                                                        0.05
                                                    </TableCell>
                                                    <TableCell align="center">140.200</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </SectionBody>
                    </Section>
                </TabsPane>
                <TabsPane>
                    <div className="tab__order">
                        <div className="stock"></div>
                    </div>
                </TabsPane>
                <TabsPane>
                    <div className="tab__order">
                        <div className="stock"></div>
                    </div>
                </TabsPane>
            </TabsContent>
        </Tabs>
    );
};

OrderAction.propTypes = {};

export default OrderAction;
