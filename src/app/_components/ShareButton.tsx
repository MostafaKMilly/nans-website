import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./ShareButton.styles.css";
import { Box, Typography } from "@mui/material";

export const ShareButtons = ({
  url,
  title,
}: {
  url: string;
  title: string;
}) => {
  return (
    <Box display="flex" columnGap={3}>
      <div className="share-buttons">
        <FacebookShareButton url={url} quote={title}>
          <FaFacebook className="facebook-icon" />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <FaTwitter className="twitter-icon" />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <FaLinkedin className="linkedin-icon" />
        </LinkedinShareButton>
      </div>
      <Typography variant="h6" sx={{ color: "common.black" }}>
        Share with
      </Typography>
    </Box>
  );
};
