export const dateFormat = ({ ...date }) => {
    if (date.month < 9) {
        date.month = `0${date.month + 1}`;
    } else {
        date.month = date.month + 1;
    }

    if (date.date < 10) {
        date.date = `0${date.date}`;
    }

    return `${date.date}-${date.month}-${date.year}`;
};

export const formatAccount = (data) => {
    let masterCode = '';
    let subCode = '';
    let account = {};
    const accounts = data.accounts.reduce((accumulator, currentAccount) => {
        masterCode = currentAccount.code.substr(0, 10);
        subCode = currentAccount.code.substr(10, 2);
        if (accumulator.accounts) {
            account = accumulator.accounts.find((account) => account.masterCode === masterCode);
            if (account) {
                account.subs.push(subCode);
            } else {
                account = {
                    masterCode: masterCode,
                    subs: [subCode],
                    banks: currentAccount.banks,
                    next_: currentAccount.next_,
                    owner: currentAccount.owner,
                    type: currentAccount.type,
                };
                accumulator.accounts.push(account);
            }
        } else {
            account = {
                masterCode: masterCode,
                subs: [subCode],
                banks: currentAccount.banks,
                next_: currentAccount.next_,
                owner: currentAccount.owner,
                type: currentAccount.type,
            };
            accumulator.account = [account];
        }

        return accumulator;
    }, {});

    return {
        ...data,
        accounts: accounts,
    };
};
