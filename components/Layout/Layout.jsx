import { Box, Button, color, Heading, useColorMode } from "@chakra-ui/react";
import classes from './Layout.module.scss'

export const Layout = ({children}) => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <div className={classes.layout}>
            <header className={classes.header} style={colorMode !== 'light' ? {borderBottom: "1px solid rgba(255,255,255, .3)" } : {boxShadow: "1px 1px 5px #ccc"}}>
                <Heading>
                    Chakra UI app :)
                </Heading>
                <Button size={'xs'} variant={'outline'} spacing={4} onClick={toggleColorMode}>{colorMode === 'light' ? 'Light' : 'Dark'} mode</Button>
            </header>
            <Box className={classes.content}>
                {children}
            </Box>
        </div>
    )
}
