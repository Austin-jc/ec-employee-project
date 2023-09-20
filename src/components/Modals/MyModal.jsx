"use client";
import { Modal } from "@mui/material";
import MyButton from "../Buttons/MyButton";
export default function MyModal({
  open,
  setOpen,
  handleClose,
  primaryButtonProps,
  children,
}) {
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="flex flex-col p-4 bg-white dark:bg-dark-500 text-black dark:text-light-600 w-96 mx-auto rounded-xl">
          {children}
          <div className="flex flex-row mt-4 justify-evenly">
            <MyButton variant={"secondary"} onClick={handleClose}>
              Close
            </MyButton>
            {primaryButtonProps ? (
              <MyButton
                variant={primaryButtonProps.variant || "primary"}
                onClick={primaryButtonProps.onClick}
                formId={primaryButtonProps.formId}
              >
                {primaryButtonProps.label}
              </MyButton>
            ) : (
              ""
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
