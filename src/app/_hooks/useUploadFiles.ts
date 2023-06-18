import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { FileUploadResponse } from "../_types/files.type";

export const useUploadFiles = () => {
  const mutation = useMutation<
    FileUploadResponse,
    unknown,
    {
      formData: FormData;
      folder: "Department" | "Service" | "User" | "Employee" | "Request";
    }
  >(
    ({ formData, folder }) =>
      fetch(process.env.NEXT_PUBLIC_API_URL + "/files?folder=" + folder, {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      }).then((response) => response.json()),
    {
      onSuccess: () => {
        enqueueSnackbar("File uploaded successfully!", {
          variant: "success",
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      },
    }
  );
  return mutation;
};
