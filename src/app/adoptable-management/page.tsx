'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function AdoptableManagement() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='mt-[148px]'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="adoptable management tabs">
            <Tab label="SEE ALL ADOPTION REQUESTS" />
            <Tab label="SEE APPROVED REQUESTS" />
            <Tab label="SEE REJECTED REQUESTS" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
         helo
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          helo
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
       helo
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default AdoptableManagement;
