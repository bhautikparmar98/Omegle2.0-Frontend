import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox } from "@mui/material";
import ChatRoom from "./ChatRoom";

interface ChildProps {
  setCurrentComponentforApp: (data: string) => void;
}

const LandingPage: React.FC<ChildProps> = ({setCurrentComponentforApp}) => {
  const [currentComponent, setCurrentComponent] = useState("landingPage");

  const [selectedPreference, setSelectedPreference] = useState("option1");
  const [mandatoryChecked, setMandatoryChecked] = useState(false);

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPreference(event.target.value);
  };

  const handleMandatoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMandatoryChecked(event.target.checked);
  };
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDialog = () => {
    setCurrentComponent("chatRoom");
    setCurrentComponentforApp("chatRoom")
    handleCloseDialog();
  };

  const containerPadding = {
    xs: "10%",
    md: "20px", // Use 20% padding for screens with medium and larger sizes (non-mobile).
  };
  return (
    <>
      {currentComponent === "chatRoom" ? (
        <ChatRoom />
      ) : (
        <Container sx={{ marginTop: "64px", padding: containerPadding }}>
          <Box>
            <Paper elevation={3}>
              <Typography component="div" fontWeight="bold" align="center" mt={2}>
                You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
              </Typography>
              <Typography variant="body1" component="div" mt={2} p={2}>
                Omegle 2.0 is a great way to meet new friends. When you use Omegle, you are paired randomly with another
                person to talk one-on-one. If you prefer, you can add your interests and you’ll be randomly paired with
                someone who selected some of the same interests. To help you stay safe, chats are anonymous unless you
                tell someone who you are (not recommended!), and you can stop a chat at any time. See our Terms of
                Service and Community Guidelines for more info about the do’s and don’ts in using Omegle. Omegle video
                chat is moderated but no moderation is perfect. Users are solely responsible for their behavior while
                using Omegle2.0.
              </Typography>
              <Box p={2}>
                <Box>
                  <Typography sx={{ display: "inline-block" }} variant="h6">
                    To whom would you like to talk :{" "}
                  </Typography>
                  <FormControl sx={{ top: "-3px", left: "10px" }}>
                    <RadioGroup name="preference" row>
                      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                      <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box>
                  <Typography sx={{ display: "inline-block" }} variant="h6">
                    Your Gender :{" "}
                  </Typography>
                  <FormControl sx={{ top: "-3px", left: "10px" }}>
                    <RadioGroup name="gender" row>
                      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box p={2} display="flex" justifyContent="center">
                <Button onClick={handleOpenDialog} variant="contained">
                  Start Video Chat
                </Button>
              </Box>
            </Paper>
          </Box>
          {/* Dialog */}
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            PaperProps={{
              sx: {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add your shadow style
                borderRadius: "16px", // Add your border radius style
              },
            }}
          >
            <DialogTitle>Video Chat</DialogTitle>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
              sx={{
                position: "absolute",
                right: (theme) => theme.spacing(2),
                top: (theme) => theme.spacing(1),
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <DialogContentText sx={{ color: "black" }}>
                <Checkbox checked={true} onChange={() => {}} /> {/* Add your checkbox here */}
                <b>OUR AGE RESTRICTIONS HAVE CHANGED. YOU MUST BE 18 OR OLDER TO USE OMEGLE.</b> Persons under the age
                of 18 may not use Omegle. See our updated Terms of Service for more info. By checking the box you
                acknowledge and represent that you comply with these age restrictions.
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ margin: 1 }}>
              <Button variant="contained" sx={{ marginRight: "10px" }} onClick={handleConfirmDialog} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      )}
    </>
  );
};

export default LandingPage;
