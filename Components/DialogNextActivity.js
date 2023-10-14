import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import styled from 'styled-components/native';

const DialogContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
const DialogContentContainer = styled.View`
background-color: white;
padding: 40px;
border-radius: 10px;
`

const DialogNextActivity = ({visible,currentActivity,onClose, startNextActivity})=>{
    return (
        <Modal
          transparent={true}
          visible={visible}
          animationType="slide"
        >
          <DialogContainer style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <DialogContentContainer>
              <Text style={{fontSize: 20, marginBottom: 10, fontWeight: "bold"}}>Bist du fertig mit "{currentActivity}"? Dann starte die nächste Activity</Text>
              <Button title="Next" onPress={()=>{onClose(); startNextActivity()  }} />
            </DialogContentContainer>
          </DialogContainer>
        </Modal>
      );
}
export default DialogNextActivity