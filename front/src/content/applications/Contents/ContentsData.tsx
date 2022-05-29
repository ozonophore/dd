import { FC, useEffect, useState } from 'react';
import { Card } from '@mui/material';
import ContentsTable from './ContentsTable';

const rows = [
    {
        id: 1,
        payload: 'Matheus',
    },
    {
        id: 2,
        payload: 'Olivier',
    },
    {
        id: 3,
        payload: 'Flavien',
    },
];

const ContentsData: FC = () => {
    const [data, setData] = useState([])
    useEffect(() => setData(rows), [])
    return (
        <Card>
            <ContentsTable data={data}></ContentsTable>
        </Card>
    );
}

export default  ContentsData;