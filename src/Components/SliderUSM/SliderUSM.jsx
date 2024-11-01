import React, { useState } from "react";
import DataEpics from "../../Json/EpicData.json";
import { Container, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import CardUSM from "../CardUSM/CardUSM";

export default function SliderUSM() {
  const [dataEpic, setDataEpic] = useState(DataEpics);
  const initialIndex = dataEpic.length > 1 ? 1 : 0;
  const [indexSliderCards, setIndexSliderCards] = useState(initialIndex);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentEpic, setCurrentEpic] = useState({ EpicId: null, EpicName: "" });
  const [isEditing, setIsEditing] = useState(false);

  const swapLeft = () => {
    if (indexSliderCards > 0) {
      setIndexSliderCards(indexSliderCards - 1);
    }
  };

  const swapRight = () => {
    if (indexSliderCards < dataEpic.length - 1) {
      setIndexSliderCards(indexSliderCards + 1);
    }
  };

  const handleOpenDialog = (epic = { EpicId: null, EpicName: "" }, editMode = false) => {
    setCurrentEpic(epic);
    setIsEditing(editMode);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const addElement = () => {
    if (currentEpic.EpicName) {
      setDataEpic([...dataEpic, { EpicId: Date.now(), EpicName: currentEpic.EpicName, CustomerId: -1 }]);
    }
    handleCloseDialog();
  };

  const deleteElement = (epicId) => {
    setDataEpic(dataEpic.filter(epic => epic.EpicId !== epicId));
    if (indexSliderCards > 0) {
      setIndexSliderCards(indexSliderCards - 1);
    } else if (dataEpic.length > 1) {
      setIndexSliderCards(0);
    }
  };

  const editElement = () => {
    setDataEpic(dataEpic.map(epic => (epic.EpicId === currentEpic.EpicId ? currentEpic : epic)));
    handleCloseDialog();
  };

  const isCurrentEpicEmpty = currentEpic.EpicId === -1;

  return (
    <Container>
      <Box>
        <Button onClick={() => handleOpenDialog()}><AddIcon /></Button>
        <Button onClick={() => handleOpenDialog(dataEpic[indexSliderCards], true)} disabled={isCurrentEpicEmpty}><EditIcon /></Button>
        <Button onClick={() => deleteElement(dataEpic[indexSliderCards].EpicId)} disabled={isCurrentEpicEmpty}><DeleteIcon /></Button>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button onClick={swapLeft} disabled={indexSliderCards === 0}>Лево</Button>
        <Box display="flex" alignItems="center" width="1040px">
          {indexSliderCards === 0 && (
            <CardUSM
              objEpic={{ EpicId: -1, EpicName: "", CustomerId: -1 }}
              isActiveElement={false}
              showAddIcon={true}
              onClick={() => handleOpenDialog()}
            />
          )}
          {dataEpic
            .slice(Math.max(0, indexSliderCards - 1), indexSliderCards + 2)
            .map((epic, index) => (
              <CardUSM
                key={index}
                objEpic={epic}
                isActiveElement={
                  indexSliderCards === index + Math.max(0, indexSliderCards - 1)
                }
                showAddIcon={false} 
              />
            ))}
          {indexSliderCards === dataEpic.length - 1 && (
            <CardUSM
              objEpic={{ EpicId: -1, EpicName: "", CustomerId: -1 }}
              isActiveElement={false}
              showAddIcon={true}
              onClick={() => handleOpenDialog()}
            />
          )}
        </Box>
        <Button onClick={swapRight} disabled={indexSliderCards === dataEpic.length - 1}>Право</Button>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{isEditing ? "Edit Epic" : "Add Epic"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Epic Name"
            type="text"
            fullWidth
            variant="outlined"
            value={currentEpic.EpicName}
            onChange={(e) => setCurrentEpic({ ...currentEpic, EpicName: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={isEditing ? editElement : addElement} color="primary">{isEditing ? "Save" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
