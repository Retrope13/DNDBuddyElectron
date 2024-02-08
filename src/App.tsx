import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#121212",
      light: "#757ce8",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: "#bb86fc",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

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
      className="tabPanel"
      style={{fontFamily: 'fantasy'}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="inv">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "#00000000"}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00000000", // transparent indicator color
                },
                "& .MuiTab-textColorPrimary": {
                  color: "black", // black text color
                },
              }}
            >
              <Tab
                sx={{
                  backgroundColor: value === 0 ? "#bb86fc" : "#7E5CA8",
                  borderRadius: "10px",
                }}
                label="Weapons"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  backgroundColor: value === 1 ? "#bb86fc" : "#7E5CA8",
                  borderRadius: "10px",
                }}
                label="Armor"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  backgroundColor: value === 2 ? "#bb86fc" : "#7E5CA8",
                  borderRadius: "10px",
                }}
                label="Spells"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  backgroundColor: value === 3 ? "#bb86fc" : "#7E5CA8",
                  borderRadius: '10px',
                  minWidth: '100px'
                }}
                label="Misc."
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item Onfndasjklfdsankfjdaskjf ndasjkfnsdjkafndsjkafndasjkfdn asjklf
            dsa hfjdksalhfjsdkla hfd sal fjdsa fhgdasjklghdasj fg dha jgk dhjkds
            ahjkbfasghjkdwas ghfsjd afghr awgherw agre fdsafdsa fadfdsafd
            fdasfdsafdsa fsdafdsafdsa Item Onfndasjklfdsankfjdaskjf
            ndasjkfnsdjkafndsjkafndasjkfdn asjklf dsa hfjdksalhfjsdkla hfd sal
            fjdsa fhgdasjklghdasj fg dha jgk dhjkds ahjkbfasghjkdwas ghfsjd
            afghr awgherw agre fdsafdsa fadfdsafd fdasfdsafdsa fsdafdsafdsa Item
            Onfndasjklfdsankfjdaskjf ndasjkfnsdjkafndsjkafndasjkfdn asjklf dsa
            hfjdksalhfjsdkla hfd sal fjdsa fhgdasjklghdasj fg dha jgk dhjkds
            ahjkbfasghjkdwas ghfsjd afghr awgherw agre fdsafdsa fadfdsafd
            fdasfdsafdsa fsdafdsafdsa
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
}

export default App;
