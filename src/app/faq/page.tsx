"use client";
import React from "react";
import { Typography, Container } from "@mui/material";

const FAQPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" component="h1">
        Frequently Asked Questions
      </Typography>

      <Typography variant="h2" component="h2">
        النطاق العلوي السوري
      </Typography>
      <ul>
        <Typography component="li">
          كم من الوقت يستغرق تسجيل النطاق الجديد تحت النطاق العلوي السوري (.SY و
          .سورية)؟
        </Typography>
        <Typography component="li">
          كيف يمكنني التحقق من أن النطاق المطلوب حجزه متاح؟
        </Typography>
        <Typography component="li">
          ما هي إجرائية تسجيل اسم النطاق تحت النطاق العلوي السوري (.SY و
          .سورية)؟
        </Typography>
      </ul>

      <Typography variant="h2" component="h2">
        مركز المعطيات
      </Typography>
      <ul>
        <Typography component="li">ماذا يقدم مركز المعطيات؟</Typography>
      </ul>

      <Typography variant="h2" component="h2">
        الاستضافة
      </Typography>
      <ul>
        <Typography component="li">ما أنواع الاستضافة؟</Typography>
      </ul>

      <Typography variant="h2" component="h2">
        مركز أمن المعلومات
      </Typography>
      <ul>
        <Typography component="li">
          ما هي الخدمة المقدمة في مركز أمن المعلومات؟
        </Typography>
      </ul>

      <Typography variant="h2" component="h2">
        مركز التصديق الإلكتروني
      </Typography>
      <ul>
        <Typography component="li">
          ما هي شهادة التصديق الإلكتروني (الشهادة الرقمية)؟
        </Typography>
        <Typography component="li">
          ما هي إجرائية الحصول على توقيع رقمي؟
        </Typography>
        <Typography component="li">ما هي أسعار الشهادات الرقمية؟</Typography>
        <Typography component="li">ما هو عمر الشهادة الرقمية؟</Typography>
      </ul>
    </Container>
  );
};

export default FAQPage;
