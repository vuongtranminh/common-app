import React, { createRef, useRef, useState } from 'react';
import Button from '~/components/common/Button';
import Form from '~/components/common/Form';
import Table, { TableBody, TableCell, TableHead, TableRow } from '~/components/common/Table';
// import authApi from '~/api/authApi';
import TextField from '~/components/common/TextField';
// import { useFetchData } from '~/hooks';
import data from '~/assets/fakedata/db.json';
import Autocomplete from '~/components/common/Autocomplete';
import InputLabel from '~/components/common/InputLabel';
import Dialog, { DialogActions, DialogContent, DialogTitle } from '~/components/common/Dialog';
import IconButton from '~/components/common/IconButton';
import Tooltip from '~/components/common/Tooltip';
import OTPInput from '~/components/common/OTPInput';
import DatePicker from '~/components/common/DatePicker';
import { dateFormat } from '~/helpers';
import Tabs, { Tab, TabsContent, TabsNav, TabsPane } from '~/components/common/Tabs';
import Select from '~/components/common/Select';

const Home = () => {
    // const { data: test, isLoading, error } = useFetchData(authApi.posts);

    const inputRefs = useRef([createRef(), createRef()]);

    const [open, setOpen] = useState(false);

    const handleOpenDialog = (value) => {
        setOpen(value);
    };

    const [account, setAccount] = useState({});

    const createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
    };

    const [inputSearch, setInputSearch] = useState('');
    const [filterSearch, setFilterSearch] = useState([]);
    const [isLoadingAutocomplete, setIsLoadingAutocomplete] = useState(false);

    const [selected, setSelected] = useState(null);

    const handleFilter = (value) => {
        console.log('search');
        setIsLoadingAutocomplete(true);
        setTimeout(() => {
            const newFilter = data.filter((item) => {
                return item.title.toLowerCase().includes(value.toLowerCase());
            });
            setFilterSearch(newFilter);
            setIsLoadingAutocomplete(false);
        }, 2000);
    };

    const handleChangeInputSearch = (value) => {
        setInputSearch(value);
    };

    const handleData = (value) => {
        setFilterSearch(value);
    };

    // click vào 1 dòng input
    const handleClickAutoComplete = (value) => {
        console.log('click');
        console.log(value);
    };

    const [date, setDate] = useState({
        year: 2000,
        month: 4,
        date: 10,
    });

    const handleChangeDate = (date) => {
        console.log(date);
        setDate(date);
    };

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const accountInfo = {
        username: {
            rules: [
                (value) => !!value || 'Username is not empty!',
                (value) =>
                    /^[A-Za-z0-9]{3,16}$/.test(value) ||
                    "Username should be 3-16 characters and shouldn't include any special character!",
                (value) => value.startsWith('V') || 'Username must be start V',
            ],
        },
        password: {
            rules: [
                (value) => !!value || 'Password is not empty!',
                (value) =>
                    /^[A-Za-z0-9]{3,16}$/.test(value) ||
                    "Username should be 3-16 characters and shouldn't include any special character!",
            ],
        },
    };

    const handleChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate();
            if (!valid) {
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }

        // console.log('login');
        // console.log(account);
        //Carry on as normal
    };

    // console.log(account);
    // console.log(filterSearch);

    const handleSubmitOTP = (value) => {
        console.log(value);
    };

    return (
        <div>
            <Form name="form-account" onSubmit={handleSubmit}>
                <div style={{ width: '20rem' }}>
                    <TextField
                        ref={inputRefs.current[0]}
                        type="text"
                        label="Username"
                        name="username"
                        rules={accountInfo.username.rules}
                        // value={account.username}
                        onChange={handleChange}
                        // error={errors.username}
                        autoComplete="off"
                    />
                </div>
                <div style={{ width: '20rem' }}>
                    <TextField
                        ref={inputRefs.current[1]}
                        type="password"
                        label="password"
                        name="password"
                        rules={accountInfo.password.rules}
                        // value={account.password}
                        onChange={handleChange}
                        // error={errors.password}
                        autoComplete="off"
                    />
                </div>
                <Button type="submit">Submit</Button>
                {/* <Button onClick={handleReset}>Reset</Button> */}
                <div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </div>
            </Form>

            <div style={{ marginTop: '30px', width: '50%' }}>
                <InputLabel />
            </div>

            <div style={{ marginTop: '30px', width: '50%' }}>
                <Table stickyHeader style={{ maxHeight: '100px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Fat&nbsp;(g)</TableCell>
                            <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="center">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th">{row.name}</TableCell>
                                <TableCell align="end">{row.calories}</TableCell>
                                <TableCell align="end">{row.fat}</TableCell>
                                <TableCell align="end">{row.carbs}</TableCell>
                                <TableCell align="end">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div style={{ marginTop: '30px', width: '50%' }}>
                <Autocomplete
                    items={filterSearch}
                    isLoading={isLoadingAutocomplete}
                    onChange={handleChangeInputSearch}
                    search={handleFilter}
                    onData={handleData}
                    onClickAutoComplete={handleClickAutoComplete}
                    value={inputSearch}
                    itemText="title"
                    itemValue="title"
                    returnObject
                />
            </div>

            <div style={{ marginTop: '30px', width: '50%' }}>
                <Button variant="contained" size="medium" onClick={() => handleOpenDialog(!open)}>
                    Dialog
                </Button>
            </div>
            <div style={{ marginTop: '30px', width: '50%' }}>
                <IconButton badge="9">
                    <i className="bx bx-bell"></i>
                </IconButton>
            </div>
            <div style={{ marginTop: '30px', width: '50%' }}>
                <Tabs active="0">
                    <TabsNav>
                        <Tab>Tab #1</Tab>
                        <Tab>Tab #2</Tab>
                        <Tab>Tab #3</Tab>
                    </TabsNav>
                    <TabsContent>
                        <TabsPane>
                            <h3>Tab content #1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eaque illo corporis magni
                                consequuntur, consequatur aliquid totam est sapiente soluta. Unde aliquid commodi
                                temporibus praesentium possimus. Sapiente perferendis quidem voluptatum?
                            </p>
                            <p>
                                Veritatis et fugit optio beatae ut pariatur, iusto eum libero quis magnam dignissimos
                                minus dolores sapiente, quam harum reiciendis totam illum voluptatem magni debitis
                                neque, fugiat mollitia exercitationem. Laborum, tempore.
                            </p>
                        </TabsPane>
                        <TabsPane>
                            <h3>Tab content #2</h3>
                            <p>
                                Veritatis et fugit optio beatae ut pariatur, iusto eum libero quis magnam dignissimos
                                minus dolores sapiente, quam harum reiciendis totam illum voluptatem magni debitis
                                neque, fugiat mollitia exercitationem. Laborum, tempore.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eaque illo corporis magni
                                consequuntur, consequatur aliquid totam est sapiente soluta. Unde aliquid commodi
                                temporibus praesentium possimus. Sapiente perferendis quidem voluptatum?
                            </p>
                        </TabsPane>
                        <TabsPane>
                            <h3>Tab content #3</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in, dolorum eveniet et vel
                                repudiandae cum, dolores officia quo tenetur voluptas nihil similique qui voluptate
                                laudantium animi eius suscipit ad.
                            </p>
                        </TabsPane>
                    </TabsContent>
                </Tabs>
            </div>
            <div style={{ marginTop: '30px', width: '50%' }}>
                <DatePicker onChange={handleChangeDate} />
            </div>
            <div style={{ marginTop: '30px', width: '50%' }}>
                <Tooltip tooltip="Thông báo" flow="down">
                    <IconButton badge="9">
                        <i className="bx bx-bell"></i>
                    </IconButton>
                </Tooltip>
            </div>
            <div style={{ marginTop: '30px', width: '50%' }}>
                <OTPInput autoSubmit onSubmit={handleSubmitOTP} />
            </div>
            <div style={{ marginTop: '30px', width: '50%' }}>
                <Select />
            </div>
            <Dialog open={open} defaultClose backdropClose onOpen={handleOpenDialog}>
                <DialogTitle>Dialog</DialogTitle>
                <DialogContent>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Home;
