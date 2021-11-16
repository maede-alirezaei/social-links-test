import { Button, Card } from "@mui/material";
import React from "react";
import LinkForm from "./LinkForm";
import Record from "./Record";
import { uiActions } from "../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
function Body() {
  const dispatch = useDispatch();
  const editForm = useSelector((state) => state.ui.editForm);
  const formIsVisible = useSelector((state) => state.ui.formIsVisible);
  const records = useSelector((state) => state.info.records);

  const clickHandler = () => {
    dispatch(uiActions.openHandler());
  };
  return (
    <Card sx={{ m: 16, p: 2 }}>
      <h6>{"مسیر های ارتباطی"}</h6>
      <Button
        startIcon={editForm ? <CreateIcon/> : <AddIcon />}
        variant="text"
        onClick={clickHandler}
        sx={{ mb: 2 }}
      >
        {editForm ? `ویرایش مسیر ارتباطی ` : "افزودن مسیر ارتباطی"}
      </Button>
      {formIsVisible && <LinkForm />}
      {records.map((option, index) => (
        <Record
          key={index}
          socialLink={option.socialLink}
          socialId={option.socialId}
          type={option.type}
        />
      ))}
    </Card>
  );
}

export default Body;
