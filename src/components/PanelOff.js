import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useFetchOPosts } from './useFetch'

const PanelOff = ({ createLayoutItem, exportAsHTML }) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [values, setValues] = useState("");
  useEffect(() => { setLabelWidth(inputLabel.current.offsetWidth) }, []);
  const response = useFetchOPosts();

  const handleChange = event => {
    setValues(event.target.value);
  };

  const handleImport = () => {
    if (!values) return;

    let searchedfilm = response.events.filter(film => film.id === values);
    searchedfilm = searchedfilm[0];
    let temp = {
      id: searchedfilm.id,
      layout: 'filmlayout',
      content: searchedfilm.title,
      htmldescription: searchedfilm.description,
      htmlquotes: searchedfilm.event_reviews,
      posterurl: searchedfilm.image.sizes.medium.url,
      showtimes: searchedfilm.event_showtimes,
      agileurl: searchedfilm.url,
      bannerurl: ''
    }
    // console.log(searchedfilm)
    createLayoutItem(temp);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => createLayoutItem()}>
        Add a blank section
      </Button>

      <Typography>
        Import from the website:
      </Typography>
      <InputLabel ref={inputLabel} htmlFor="event-label">
        Event
      </InputLabel>
      <Select
        value={values}
        onChange={handleChange}
        labelWidth={labelWidth}
        inputProps={{
          name: 'age',
          id: 'event-label',
        }}>
        <MenuItem value="">
          <em>Choose an event</em>
        </MenuItem>
        {response.events && response.events.map( (film) => (
            <MenuItem key={film.id} value={film.id}>
              {film.title}
            </MenuItem>
          )
        )}
      </Select>
      <Button
        variant="contained"
        disabled={!response || values === ''}
        onClick={handleImport}>
        Import
      </Button>

      <Button onClick={exportAsHTML}>
        Export as HTML
      </Button>
    </>
  )
}

export default PanelOff;
