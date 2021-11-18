import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const TabContent = styled(Tab)`
    letter-spacing: 0.1rem !important;
    font-family: 'Lato', sans-serif !important;
    font-size: 1.1rem !important;
    color: ${(props) =>
        props.active ? '#cfa670 !important' : '#000 !important'
    };
`;