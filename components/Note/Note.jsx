import { useState } from "react"
import {Box, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Text } from "@chakra-ui/react";


export const Note = ({text, handleDelete, id, handleChangeTask}) => {
    const [disabled, setDisabled] = useState(true)
    const [newText, setNewText] = useState(text);
    return (
        <InputGroup mb={'7'}>
            <InputLeftAddon style={{cursor: "pointer"}} onClick={() => handleDelete(id)}>
                <Text>Done</Text>
            </InputLeftAddon>
            <Input variant="filled" value={newText} disabled={disabled} onChange={(e) => setNewText(e.target.value)}/>
            <InputRightAddon onClick={() => setDisabled(!disabled)} style={{cursor: "pointer"}}>
                {disabled ? <Text>&#9998;</Text> : <Text onClick={() => newText && handleChangeTask(id, newText)}>&#10004;</Text>}
            </InputRightAddon>
        </InputGroup>
    )
}
