import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            {/* Email Section */}
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>Raheelchohan16@gmail.com</span>
                <Tooltip
                  PopperProps={{ disablePortal: true }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={() => copyToClipboard("Raheelchohan16@gmail.com")}>
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:Raheelchohan16@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>

            {/* WhatsApp Section */}
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>+92 311 6453640</span>
                <Tooltip
                  PopperProps={{ disablePortal: true }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={() => copyToClipboard("+92 311 6453640")}>
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="https://wa.me/923116453640"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
