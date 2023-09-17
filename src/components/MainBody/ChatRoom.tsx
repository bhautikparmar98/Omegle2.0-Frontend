import { Box, Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import theme from "../../styles/theme";

const ChatRoom = () => {
  return (
    <Grid sx={{ marginTop: "75px" }} container spacing={2}>
      <Grid item xs={12} sm={3}>
        {/* Box 1 */}
        <Box sx={{ margin: "0px 5px", height: "calc(50vh - 80px)" }} position="relative" color="white" p={1}>
          <video
            width="100%"
            height="100%"
            controls // Add controls (play, pause, etc.)
          >
            <source
              src="https://www.example.com/your-video.mp4" // Replace with your video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Box
            color="white"
            position="absolute"
            top={10}
            right={10}
            margin={0}
            display={{ xs: "block", sm: "none", width: "30%" }} // Hide in large screens
          >
            <video
              width="100%"
              height="100%"
              controls // Add controls (play, pause, etc.)
            >
              <source
                src="https://www.example.com/your-video.mp4" // Replace with your video URL
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
        <Box
          color="white"
          display={{ sm: "block", xs: "none" }}
          sx={{ margin: "0px 5px", height: "calc(50vh - 80px)" }}
          p={1}
        >
          <video
            width="100%"
            height="100%"
            controls // Add controls (play, pause, etc.)
          >
            <source
              src="https://www.example.com/your-video.mp4" // Replace with your video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        sx={{
          height: "calc(100vh-34px)",
          // Define the height for mobile using theme breakpoints
          [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 530px)",
          },
        }}
      >
        {/* Box 2 */}
        <Box color="white" sx={{ margin: "0px 5px", height: "80%", border: "1px solid black" }} p={1}>
          
        </Box>
        <Box  display="flex" alignItems="center" color="white" p={1}>
          <Button variant="contained" sx={{margin:1, height:"45px"}}>New</Button>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type your message..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChatRoom;
