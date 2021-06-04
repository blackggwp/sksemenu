import React from "react";
import { Box, Container } from "@material-ui/core";
import { VscFeedback } from "react-icons/vsc";

export default function HeaderInfo() {
  return (
    <Container maxWidth="sm">
      <Box margin={2} style={{ textAlign: "center" }}>
        <VscFeedback size="3em" style={{ display: "inline-flex" }} />
        <img
          style={{
            width: "100",
            maxWidth: 120,
            height: "auto",
            position: "absolute",
            right: 10,
            top: 10,
          }}
          alt="sukishi logo"
          src={window.location.origin + "/images/logo-sks.png"}
        />
        <h1 className="head__info">
          <span>แนะนำ</span>ติชมบริการ
        </h1>
        <p className="subhead">
          <span>
            <em>ทุกคำแนะนำและข้อติ-ชม</em> จะเป็นประโยชน์ในการปรับปรุง
            และพัฒนาบริการเพื่อสร้างเสริม ประสบการณ์
            ความสุขของลูกค้าให้ดียิ่งขึ้น
          </span>
          <span>
            รบกวนเลือกหัวข้อสำหรับติ-ชม และกรอก ข้อมูลด้านล่างให้ครบถ้วน
          </span>{" "}
        </p>
      </Box>
    </Container>
  );
}
