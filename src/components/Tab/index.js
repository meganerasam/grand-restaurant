import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
    TabContent
} from './TabElements'

export default function CenteredTabs({ category }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                style={{ marginBottom: '2.5rem' }}
                TabIndicatorProps={{ style: { background: '#cfa670' } }}
            >
                {category.map(cat => {
                    return (
                        <TabContent label={cat.label} active={value === cat.value ? true : false} />
                    )
                })}

            </Tabs>
        </Box>
    );
}