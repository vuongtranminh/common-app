import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab, TabsContent, TabsNav, TabsPane } from '../common/Tabs';
import TableInfo from './TableInfo';

const OrderInfo = (props) => {
    return (
        <Tabs>
            <TabsNav>
                <Tab>Số lệnh</Tab>
                <Tab>Lệnh chưa khớp</Tab>
                <Tab>Phân tích kỹ thuật</Tab>
            </TabsNav>
            <TabsContent>
                <TabsPane>
                    <TableInfo />
                </TabsPane>
                <TabsPane></TabsPane>
                <TabsPane></TabsPane>
            </TabsContent>
        </Tabs>
    );
};

OrderInfo.propTypes = {};

export default OrderInfo;
