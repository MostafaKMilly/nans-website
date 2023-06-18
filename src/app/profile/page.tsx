"use client";
import API from "@/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "../_types/user.types";
import { Loader } from "../_components/Loader";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useRef, useState } from "react";
import { useUploadFiles } from "../_hooks/useUploadFiles";
import Edit from "@mui/icons-material/Edit";
import { useTranslations } from "../_hooks/useTranslations";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

export default function ProfilePage() {
  const [previewIamge, setPreviewImage] = useState<string>();
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<Partial<User>>();
  const { data: user, isLoading } = useQuery(
    ["Profile"],
    () => API.get<{ data: User }>("/user/profile"),
    {
      select: (res) => res.data,
      onSuccess: (res) => {
        setPreviewImage(res.image);
        setValue("name", res.name);
        setValue("email", res.email);
        setValue("fatherName", res.fatherName);
        setValue("motherName", res.motherName);
        setValue("phoneNumber", res.phoneNumber);
      },
    }
  );
  const { mutate: updateProfileRequest } = useMutation<
    unknown,
    unknown,
    { update: Partial<User> }
  >((params) => API.post("/user/updateRequest", params), {
    onSuccess: () => {
      enqueueSnackbar("Update profile request was send successfully", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
  });

  const { t } = useTranslations();
  const [imageUrl, setImageUrl] = useState<string>();
  const { mutate } = useUploadFiles();
  const fileInputRef = useRef<null | HTMLInputElement>(null);

  if (isLoading) {
    return <Loader />;
  }

  const handleUploadImage = () => {
    fileInputRef.current?.click();
  };

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      const formData = new FormData();
      formData.append("files", imageFile);
      console.log(formData.get("files"));
      mutate(
        {
          formData,
          folder: "Employee",
        },
        {
          onSuccess: (res) => {
            setImageUrl(res.data.urls[0]);
          },
        }
      );
      const objectUrl = URL.createObjectURL(imageFile);
      setPreviewImage(objectUrl);
    }
  };

  const onSubmit = (data: Partial<User>) => {
    updateProfileRequest({
      update: {
        ...data,
        ...(imageUrl && { image: imageUrl }),
      },
    });
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Box sx={{ pt: 3 }}>
          <Typography variant="h4" gutterBottom>
            {t("my_profile")}
          </Typography>
        </Box>
        <Box
          textAlign="center"
          mt={2}
          position="relative"
          width="fit-content"
          m="0 auto"
        >
          <Avatar
            sx={{ width: "100px", height: "100px" }}
            src={previewIamge || "images/avatar.png"}
          />
          <IconButton
            onClick={handleUploadImage}
            disableRipple
            sx={{
              position: "absolute",
              bottom: -2,
              left: -2,
              background: "white",
              width: "30px",
              height: "30px",
              "&:hover": {
                background: "white",
              },
            }}
            color="secondary"
          >
            <Edit fontSize="small" />
          </IconButton>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleInputFileChange}
          />
        </Box>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("Email_Address")}
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label={t("name")}
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message as string}
          />
          <Box display="flex" alignItems="center" columnGap={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("father_name")}
              type="text"
              id="fatherName"
              {...register("fatherName", {
                required: "Father's Name is required",
              })}
              error={!!errors.fatherName}
              helperText={errors.fatherName?.message as string}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("mother_name")}
              type="text"
              id="motherName"
              {...register("motherName", {
                required: "Mother's Name is required",
              })}
              error={!!errors.motherName}
              helperText={errors.motherName?.message as string}
            />
          </Box>
          <Box display="flex" columnGap={2} alignItems="center">
            <TextField
              margin="normal"
              required
              fullWidth
              label={t("phone_number")}
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message as string}
            />
          </Box>
          <Button type="submit" color="secondary" sx={{ mt: 1 }}>
            {t("update_profile")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
