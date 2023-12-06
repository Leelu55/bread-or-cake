import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('ingredients');
  const [inputValue, setInputValue] = useState<string>('');

  const handleOptionChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedOption(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Send the selectedOption and inputValue to your backend for processing
    console.log('Selected Option:', selectedOption);
    console.log('Input Value:', inputValue);
  };



  return (
    <div>
      <Tabs
        value={selectedOption}
        onChange={handleOptionChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Ingredients" value="ingredients" />
        <Tab label="Recipe Link" value="link" />
        <Tab label="Picture" value="picture" />
      </Tabs>

      <div className={`form-input ${selectedOption === 'ingredients' ? 'active' : ''}`}>
        <TextField
          label="Ingredients"
          variant="outlined"
          multiline
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={`form-input ${selectedOption === 'link' ? 'active' : ''}`}>
        <TextField
          label="Recipe Link"
          variant="outlined"
          multiline
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={`form-input ${selectedOption === 'picture' ? 'active' : ''}`}>
      <div style={{ display: 'flex' }}>

      <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="file-input"
        />
     
      </div>

      </div>
      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} className="form-button">
        Process Recipe
      </Button>
    </div>
  );
};

export default App;
