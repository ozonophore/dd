import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

interface SidebarLayoutProps {
    children?: ReactNode;
}

const MainWrapper = styled(Box)(
    ({theme}) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`
);

const MainContent = styled(Box)(
    ({theme}) => `
        flex: 1 1 auto;
        overflow: auto;
`
);

const SidebarLayout: FC<SidebarLayoutProps> = () => {
    return (
        <>
            <Sidebar/>
            <MainWrapper>
                <MainContent>
                    <Outlet/>
                </MainContent>
            </MainWrapper>
        </>
    );
};

export default SidebarLayout;
