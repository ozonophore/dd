import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import RecentOrders from '../Transactions/RecentOrders';
import ContentsData from './ContentsData';

const Content: FC = () => {
    return (
        <>
            <Helmet>
                <title>Contents - Applications</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <ContentsData />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Content;