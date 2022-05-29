import { ChangeEvent, FC, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardHeader,
    Collapse,
    Divider,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import BulkActions from '../Transactions/BulkActions';
import { ITunnel } from '../../../models/tunnel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IContentsTableProps {
    className?: string;
    data: ITunnel[];
}

const applyPagination = (
    data: ITunnel[],
    page: number,
    limit: number
): ITunnel[] => {
    return data.slice(page * limit, page * limit + limit);
};

interface IColumn {
    field: string;
    headerName: string;
    align?: "left" | "center" | "right" | "justify" | "inherit";
}

const columns: IColumn[] = [
    {field: 'id', headerName: 'Tunnel id'},
    {field: 'payload', headerName: 'Content'},
];

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

const ContentsTable: FC<IContentsTableProps> = ({data}) => {

    const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
        []
    );
    const selectedBulkActions = selectedCryptoOrders.length > 0;
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);

    const handlePageChange = (event: any, newPage: number): void => {
        setPage(newPage);
    };

    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value));
    };

    const paginatedData = applyPagination(
        data,
        page,
        limit
    );

    return (
        <Card>
            {selectedBulkActions && (
                <Box flex={1} p={2}>
                    <BulkActions/>
                </Box>
            )}
            {!selectedBulkActions && (
                <CardHeader
                    action={
                        <Box width={150}>
                        </Box>
                    }
                    title=""
                />
            )}
            <Divider/>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell width='25px'/>
                            <TableCell align='left'>Tunnel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            paginatedData.map(item => (
                                <Row {...item}></Row>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={2}>
                <TablePagination
                    component="div"
                    count={data.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[5, 10, 25, 30]}
                />
            </Box>
        </Card>
    );
};

const Row: FC<ITunnel> = (item) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}} hover key={`${item.id}_row`}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                    >
                        {item.id}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography style={{paddingLeft: '25px'}} variant="h6" gutterBottom component="div"
                                        fontWeight="bold">
                                Content
                            </Typography>
                            <Typography style={{paddingLeft: '25px'}}>
                                {item.payload}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>)
};

ContentsTable.propTypes = {
    data: PropTypes.array.isRequired
};

ContentsTable.defaultProps = {
    data: []
};

export default ContentsTable;
