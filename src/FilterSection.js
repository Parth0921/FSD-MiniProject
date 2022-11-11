import {
  FormGroup,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  InputLabel,
  FormControl,
  Box,
  Select,
  MenuItem,
} from '@material-ui/core';
import React from 'react';

export default function FilterSection() {
  return (
    <div>
    <Grid
      className='input-group'
      direction='column'
      spacing={2}
      container
      style={{ margin: '50px', width: '20rem', padding: '40px' }}>
      <Grid item xs={8}>
        <Typography>Filter By:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography>Budget</Typography>
      </Grid>
      
      <Grid item xs={8}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Fixed Price Projects'
          />
        </FormGroup>
      </Grid>
      <Box display={'flex'} marginBottom={'1rem'}>
        <input
          style={{ marginInline: '4px', width: '5rem', textAlign: 'center' }}
          type='search'
          className='form-control rounded'
          placeholder='min'
          aria-label='Search'
          aria-describedby='search-addon'
        />{' '}
        <p
          style={{
            marginInline: '4px',
            width: '1rem',
            textAlign: 'center',
            verticalAlign: 'center',
          }}>
          to
        </p>
        <input
          style={{ marginInline: '4px', width: '5rem', textAlign: 'center' }}
          type='search'
          className='form-control rounded'
          placeholder='max'
          aria-label='Search'
          aria-describedby='search-addon'
        />
      </Box>

      {/* Hourly projects */}
      <Grid item xs={8}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Hourly Projects'
          />
        </FormGroup>
      </Grid>
      <Box display={'flex'} marginBottom={'1rem'}>
        <input
          style={{ marginInline: '4px', width: '5rem', textAlign: 'center' }}
          type='search'
          className='form-control rounded'
          placeholder='min'
          aria-label='Search'
          aria-describedby='search-addon'
        />{' '}
        <p
          style={{
            marginInline: '4px',
            width: '1rem',
            textAlign: 'center',
            verticalAlign: 'center',
          }}>
          to
        </p>
        <input
          style={{ marginInline: '4px', width: '5rem', textAlign: 'center' }}
          type='search'
          className='form-control rounded'
          placeholder='max'
          aria-label='Search'
          aria-describedby='search-addon'
        />
      </Box>
      <FormControl>
        <InputLabel id='demo-simple-select-label'>All durations</InputLabel>

        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          // value={age}
          label='All durations'
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* Contests */}
      <Grid item xs={8}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Contests'
          />
        </FormGroup>
      </Grid>
      <Box display={'flex'} marginBottom={'1rem'}>
        <input
          style={{ marginInline: '4px', width: '5rem', textAlign: 'center' }}
          type='search'
          className='form-control rounded'
          placeholder='min'
          aria-label='Search'
          aria-describedby='search-addon'
        />{' '}
        <p
          style={{
            marginInline: '4px',
            width: '1rem',
            textAlign: 'center',
            verticalAlign: 'center',
          }}>
          to
        </p>
        <input
          style={{ marginInline: '4px', width: '5rem', textAlign: 'center' }}
          type='search'
          className='form-control rounded'
          placeholder='max'
          aria-label='Search'
          aria-describedby='search-addon'
        />
      </Box>

      <button type='button' className='btn btn-outline-primary'>
        search
      </button>
    </Grid>
    </div>
  );
}
