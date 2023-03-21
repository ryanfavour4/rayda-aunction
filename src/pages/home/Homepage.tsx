import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import style from "../../css/home_style/home.module.css";
import BellIcon from "../../image/BellIcon";
import plate_img from "../../image/duo-purple-plates.png";
import { BiLike } from "react-icons/bi";

function Homepage() {
  return (
    <div>
      <Container maxWidth="xl">
        <Box
          display="flex"
          padding="30px 0 15px"
          justifyContent="space-between"
        >
          <div className={style.logo_box}>
            <Typography variant="h5" fontWeight="600">
              Welcome
            </Typography>
            <Typography color="grey">
              Your current sales auction and activity.
            </Typography>
          </div>
          <Button variant="contained" style={{ backgroundColor: "white" }}>
            <BellIcon />
            <span className={style.count}>5</span>
          </Button>
        </Box>

        <hr />

        <Box
          padding="25px 25px 0"
          marginTop="3em"
          borderRadius="10px"
          style={{ backgroundColor: "white" }}
          boxShadow={3}
        >
          <div className={style.gradient}></div>
          <Box display="flex" justifyContent="space-between" padding="25px 0 0">
            <div style={{ display: "flex" }}>
              <img
                src={plate_img}
                style={{ width: "10em", translate: "0 -50%" }}
                alt=""
              />
              <div className={style.gradient_bottom_text}>
                <Typography variant="h5" textAlign="left">
                  Starts in: 3 days : 2 hours : 24 minutes
                </Typography>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span className={style.indicator}>
                    <span className={style.dot}></span>
                    <Typography>Not Live</Typography>
                  </span>
                  <Typography>Layers Auction</Typography>
                </div>
              </div>
            </div>
            <div>
              <Button color="secondary" variant="outlined">
                <BiLike style={{ marginRight: "10px", scale: "1.6" }} />
                Accept Invite
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Homepage;
