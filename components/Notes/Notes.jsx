import { Box, Button, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react"
import { Note } from "../Note/Note";

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');

    const handleDelete = (id) => setNotes(notes.filter((item) => item.id !== id))

    const handleAdd = () => {
        if(note.length === 0) return;
        setNotes([...notes, {id: nanoid(4), text: note}])
        setNote('')
    }

    const handleChangeTask = (id, text) => {
        return notes.map(note => {
            if(note.id === id) {
                note.text = text;
            }
        })
    }

    return (
        <Box mt={5} paddingLeft={'30vw'} paddingRight={'30vw'}>
            <Box mb={'5'}>
                <InputGroup>
                    <Input variant="filled" value={note} onChange={(e) => setNote(e.target.value)} placeholder={'Write a note...'} />
                    <InputRightElement>
                        <Button onClick={handleAdd}>Add</Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Box padding={'6'}>
                {
                    notes.length === 0 ? (
                        <>
                            <Heading>Empty</Heading>
                        </>
                    )
                    : (
                        <>
                            {
                                notes.map((item, index) => <Note key={index}
                                                                text={item.text}
                                                                id={item.id}
                                                                handleDelete={handleDelete}
                                                                handleChangeTask={handleChangeTask}/>)
                            }
                        </>
                    )
                }
            </Box>
        </Box>
    )
}
