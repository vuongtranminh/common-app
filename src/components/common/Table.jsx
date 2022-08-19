import React, { createContext, useContext } from 'react';

const SectionContext = createContext({ parent: 'TableHead' });

const Table = (props) => {
    const { children, stickyHeader, className, border, radius, ...otherProps } = props;
    return (
        <div className={`lt-table-wraper ${className}`} {...otherProps}>
            <table
                className={`lt-table ${stickyHeader && 'lt-table--sticky-header'} ${border && 'lt-table--border'} ${
                    radius && 'lt-table--radius'
                }`}
            >
                {children}
            </table>
        </div>
    );
};

export const TableHead = ({ children }) => {
    return (
        <thead className="lt-table__head">
            <SectionContext.Provider value={{ parent: 'TableHead' }}>{children}</SectionContext.Provider>
        </thead>
    );
};

export const TableBody = ({ children }) => {
    return (
        <tbody className="lt-table__body">
            <SectionContext.Provider value={{ parent: 'TableBody' }}>{children}</SectionContext.Provider>
        </tbody>
    );
};

export const TableRow = (props) => {
    const { children } = props;
    return <tr className="lt-table__row">{children}</tr>;
};

export const TableCell = (props) => {
    const { children, align = 'start', component, className, ...otherProps } = props;
    const { parent } = useContext(SectionContext);
    const Component = component ? component : parent === 'TableHead' ? 'th' : 'td';
    return (
        <Component className={`lt-table__cell lt-table__cell--${align} ${className}`} {...otherProps}>
            {children}
        </Component>
    );
};

export const TableFooter = (props) => {
    const { children } = props;
    return <tfoot className="lt-table__foot">{children}</tfoot>;
};

export default Table;
