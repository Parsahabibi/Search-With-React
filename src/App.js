import './App.css';
import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer'
import Highlighter from "react-highlight-words";

function App() {
  const string = 'long term contracts prevent both parties from making sensible changes when necessary try any starlink service for 30 days and, if not satisfied, return the hardware for for a full refund.With starlink, users can engage in activities that historically have not been possible with satellite internet. starlink’s high-speed, low-latency service is made possible via the world’s largest constellation of highly advanced satellites operating in a low orbit around the earth'

  const emptyForm = { id: Math.floor(Math.random() * 1000), title: "" }
  const [form, setForm] = useState(emptyForm)



  const handleChange = (e) => {
    setForm({ ...form, title: e.target.value })
  }

  const handleSearch = (text, word) => {
    var x = 0, y = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === word[0]) {
        for (let j = i; j < i + word.length; j++) {
          if (text[j] === word[j - i]) {
            y++;
          }
          if (y === word.length) {
            x++;
          }
        }
        y = 0;
      }
    }
  }



  return (
    <Grid m={5}>
      <TextField onChange={handleChange} label="search" />
      <Typography>
        {handleSearch(string, form.title)}
      </Typography>
      <Typography>
        <Balancer ratio={2.5}>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[form.title]}
            autoEscape={true}
            textToHighlight={string}
          />
        </Balancer>
      </Typography>
    </Grid>
  );
}

export default App;
