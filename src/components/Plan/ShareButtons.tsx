"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import "./plan.css";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { FaShareNodes } from "react-icons/fa6";
import { ClickAwayListener } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareButtons = ({
  shareUrl,
  quote,
  hashtag,
  title,
}: {
  shareUrl: string;
  quote: string;
  title: string;
  hashtag: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState("Copy Link");

  const handleTooltipClose = () => {
    setTimeout(() => setOpen(false), 3000);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  console.log(
    "Share URL:",
    shareUrl,
    "Quote:",
    quote,
    "Hashtag:",
    hashtag,
    "title:",
    title
  );
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <div>
      <HtmlTooltip
        open={open}
        slotProps={{
          popper: {
            disablePortal: true,
          },
        }}
        title={
          <React.Fragment>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div className="flex gap-2">
                <FacebookShareButton
                  onClick={handleTooltipClose}
                  className="hover:scale-125"
                  url={shareUrl}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  onClick={handleTooltipClose}
                  className="hover:scale-125"
                  url={shareUrl}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton
                  onClick={handleTooltipClose}
                  className="hover:scale-125"
                  url={shareUrl}
                >
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <WhatsappShareButton
                  onClick={handleTooltipClose}
                  className="hover:scale-125"
                  url={shareUrl}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <TelegramShareButton
                  onClick={handleTooltipClose}
                  className="hover:scale-125"
                  url={shareUrl}
                >
                  <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
                <EmailShareButton
                  subject={title}
                  body={quote}
                  onClick={handleTooltipClose}
                  className="hover:scale-125"
                  url={shareUrl}
                >
                  <EmailIcon size={40} round={true} />
                </EmailShareButton>
              </div>
            </ClickAwayListener>

            {/* Copy to Clipboard */}
            <CopyToClipboard
              text={shareUrl}
              onCopy={() => setCopySuccess("Link copied!")}
            >
              <div className="flex justify-center">
                <button
                  onClick={handleTooltipClose}
                  className={`bg-gray-300 font-bold border-2 my-2 text-gray-600 px-5 py-2 rounded-3xl border-gray-900 ${
                    copySuccess === "Link copied!" &&
                    "text-green-600 border-green-600"
                  }`}
                >
                  {copySuccess}
                </button>
              </div>
            </CopyToClipboard>
          </React.Fragment>
        }
      >
        <button
          className="hover-border-button-event w-full text-white flex items-center justify-center gap-2 rounded"
          onClick={handleTooltipOpen}
        >
          {" "}
          <FaShareNodes />
          Share
        </button>
      </HtmlTooltip>
    </div>
  );
};

export default ShareButtons;
