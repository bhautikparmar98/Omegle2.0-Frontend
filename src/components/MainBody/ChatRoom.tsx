import { Box, Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const ChatRoom = () => {
  return (
    <Grid sx={{ marginTop: "80px" }} container spacing={2}>
      <Grid item xs={12} sm={4}>
        {/* Box 1 */}
        <Box sx={{ margin: "0px 5px" }} position="relative" color="white" p={2}>
          <video
            width="100%"
            height="auto"
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
            p={1}
            position="absolute"
            top={10}
            right={10}
            margin={0}
            display={{ xs: "block", sm: "none", width: "30%" }} // Hide in large screens
          >
            <video
              width="100%"
              height="auto"
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
      </Grid>
      <Grid item xs={12} sm={8}>
        {/* Box 2 */}
        <Box bgcolor="secondary.main" color="white" sx={{ margin: "0px 5px" }} p={2}></Box>
      </Grid>
      <Grid item xs={12} sm={4} display={{ sm: "block", xs: "none" }}>
        {/* Box 3 */}
        <Box color="white" sx={{ margin: "0px 5px" }} p={2}>
          <video
            width="100%"
            height="auto"
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
      <Grid item xs={12} sm={8}>
        {/* Box 4 */}
        <Box color="white" sx={{ margin: "0px 5px" }} p={2}>
          <Button>New</Button>
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
