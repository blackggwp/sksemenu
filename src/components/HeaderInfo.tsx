import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { VscFeedback } from "react-icons/vsc";
import "../assets/css/feedback.css";

export default function HeaderInfo() {
  return (
    <Container maxWidth="sm" className="feedback_header">
      <Box margin={2} style={{ textAlign: "center" }}>
        <Box margin={2} style={{ display: "inline-flex" }}>
          <Typography variant="h2" component="h1">
            Customer Care
          </Typography>
          <VscFeedback size="4em" style={{ display: "inline-flex" }} />
          <img
            style={{
              width: "100",
              maxWidth: "15%",
              height: "auto",
              position: "absolute",
              right: 10,
              top: 10,
            }}
            alt="sukishi logo"
            src={window.location.origin + "/images/logo-sks.png"}
          />
        </Box>

        <Typography variant="h3">แนะนำ ติ ชมบริการ</Typography>
        <Typography variant="h5">
          ทุกคำแนะนำและข้อติชม จะเป็นประโยชน์ในการปรับปรุง
        </Typography>
        <Typography variant="h5">
          บริการเพื่อสร้างเสริมความสุขของลูกค้าให้ดียิ่งขึ้น
        </Typography>
        <Typography variant="h5">รบกวนกรอกข้อมูลด้านล่างให้ครบถ้วน</Typography>
      </Box>
    </Container>
  );
}
