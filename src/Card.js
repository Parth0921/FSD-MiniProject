import React from 'react';
import FilterCard from './FilterCard';
import FilterSection from './FilterSection';
import { Grid } from '@material-ui/core';
import { findJobs } from './FindJobData';
import FilterCardList from './FilterCardList';

export default function Card() {
  return (
    <Grid className='input-group'
      direction='row'
      spacing={22}
      container
      style={{  width: '100%' }}
    >
      <Grid item xs={24}>
        <FilterSection />
      </Grid>
      <Grid item xs={24}>
        <FilterCardList />
        </Grid>

    </Grid>
  );
}
