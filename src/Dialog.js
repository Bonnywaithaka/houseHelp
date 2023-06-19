import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { Form as FormikForm } from "formik";
import { Typography } from "@mui/material";

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    borderRadius: 13,
    boxShadow: "none",
  },
}));

const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  position: relative;
  background-color:#fff;
  padding: 16px 24px;
  boxShadow: 0 0 1px 0 rgba(0,0,0,0.16);
`
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalChildren({ modalHeader, modalContent, modalActions }) {
  return (
    <>
      {modalHeader && (
        <StyledAppBar>
          <Typography
            variant="h4"
            sx={(theme) => ({
              fontSize: 16,
              color: theme.palette.primary.main,
            })}
          >
            {modalHeader}
          </Typography>
        </StyledAppBar>
      )}

      <DialogContent>{modalContent}</DialogContent>
      {modalActions && (
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {modalActions}
        </DialogActions>
      )}
    </>
  );
}

function Modal({
  open,
  responsive = false,
  fullScreen = false,
  maxWidth = "sm",
  fullWidth = false,
  modalHeader = null,
  modalContent,
  modalActions = null,
  form = false,
  handleClose,
  disableBackdropClose = false,
  ...rest
}) {
  const theme = useTheme();
  const fullScreenValue = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledDialog
      TransitionComponent={Transition}
      fullScreen={responsive ? fullScreenValue : fullScreen}
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={() => {
        // if disableBackdropClose is passed then dont close on clicking the backdrop
        if (!disableBackdropClose) {
          handleClose();
        }
      }}
      aria-labelledby="responsive-dialog-title"
      {...rest}
    >
      <Box
        sx={{
          paddingBottom: 1,
        }}
      >
        {form ? (
          <FormikForm
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ModalChildren
              modalHeader={modalHeader}
              modalContent={modalContent}
              modalActions={modalActions}
            />
          </FormikForm>
        ) : (
          <ModalChildren
            modalHeader={modalHeader}
            modalContent={modalContent}
            modalActions={modalActions}
          />
        )}
      </Box>
    </StyledDialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalContent: PropTypes.element.isRequired,
};

export default Modal;
