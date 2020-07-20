import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import usecase from "../data/usecase_transpose";
import capability_information from "../data/capability_information";
import card_content from "../data/example_page_content.json"

const UsecasePageHeader = () => {
    const classes = makeStyles({
        root: {
            background: "white",
            color: "black",
        },
        container: {
            display: "flex",
            alignItems: "flex-end",
            height: 170,
            paddingBottom: 30,
        },
    })()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl" className={classes.container}>
                <Typography variant="h4">Augmented Capabilities Example</Typography>
            </Container>
        </div>
    )
}

const createData = (capability_id, capability_name, snapchat, pokemongo) => {
    return {
      capability_id,
      capability_name,
      snapchat,
      pokemongo,
      content: card_content
    };
}

const idFindName = (id, capability_information) => {
  return capability_information.map(info => {
    if (id === info.id) {
      return info.name;
    }
  })
}

const data = [];

usecase.map((cap) => {
    data.push(createData(
      cap.id,
      idFindName(cap.id, capability_information),
      cap.Snapchat[0] === 1? 'X' : '', 
      cap.pokmon_go[0] === 1? 'X' : ''))
});

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: "400",
      textAlign: "center",
    },
    body: {
      textAlign: "center",
    },
}))(TableCell);

const Row = (props) => {
    const classes = makeStyles(theme => ({
        rows: {
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.common.white,
              },
              '& > *': {
                borderRight: '0px',
            },
        },
        headText: {
          fontWeight: 'bold'
        },
        card: {
          boxShadow: "none",
        },
        media: {
          height: 250,
        },
        content: {
          fontSize: 16,
          padding: "1em 0",
          lineHeight: "1.25",
        },
    }))()

    const { row } = props;
    const [open, setOpen] = useState(false);

    let snapCard;
    let pokemonCard;
    
    if (row.snapchat === 'X') {
      snapCard = 
        row.content
          .filter((cnt) => cnt.capability_id === row.capability_id)
          .map((cnt) => (
        <TableCell width="30%">
          <Card className={classes.card}>
              <CardMedia 
                className={classes.media} 
                component="img" 
                alt={cnt.capability_id}
                image={`/images/snapchat/${cnt.capability_id}.png`}
              />
              <CardContent className={classes.content}>
                  <Typography variant="p">{cnt.snapchat}</Typography>
              </CardContent>
          </Card>
        </TableCell>
    ))}else {
      snapCard = <TableCell width="30%"></TableCell>
    }

    if (row.pokemongo === 'X') {
      pokemonCard = 
        row.content
          .filter((cnt) => cnt.capability_id === row.capability_id)
          .map((cnt) => (
          <TableCell width="30%">
            <Card className={classes.card}>
                <CardMedia 
                  className={classes.media} 
                  component="img" 
                  alt={cnt.capability_id}
                  image={`/images/pokemon/${cnt.capability_id}.jpg`}
                />
                <CardContent className={classes.content}>
                    <Typography variant="p">{cnt.pokemon_go}</Typography>
                </CardContent>
            </Card>
          </TableCell>
    ))}else {
      pokemonCard = <TableCell width="30%"></TableCell>
    }
  
    return (
      <React.Fragment>
        <TableRow className={classes.rows}>
          <TableCell  align="right" width="1%">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <StyledTableCell className={classes.headText} width="25%">{row.capability_name}</StyledTableCell>
          <StyledTableCell >{row.snapchat}</StyledTableCell>
          <StyledTableCell >{row.pokemongo}</StyledTableCell>
        </TableRow>
        <TableRow className={classes.rows}>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={0}>
                <Table size="small" style={{ width: "100%" }}>
                  <TableBody>
                      <TableRow className={classes.rows}>
                        <TableCell align="center" width="1%"/>
                        <TableCell align="center" width="25%"/>
                        {snapCard}
                        {pokemonCard}
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
      </React.Fragment>
    );
  }

const UsecasePageContent = () => {
    const classes = makeStyles(theme => ({
        rows: {
              '& > *': {
                borderBottom: 'unset',
              },
        },
        headText: {
          fontWeight: 'bold'
        },
    }))()
    return (
    <TableContainer style={{ width: "100vw", paddingLeft: "6em" }} >
      <Table style={{ width: 1200 }} aria-label="collapsible table">
        <TableHead >
          <TableRow className={classes.rows}>
            <StyledTableCell width="1%"/>
            <StyledTableCell className={classes.headText} width="25%">Capabilities</StyledTableCell>
            <StyledTableCell className={classes.headText} >SnapChat</StyledTableCell>
            <StyledTableCell className={classes.headText} >Pokmon Go</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((row) => (
            <Row key={row.capability_id} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

const UsecasePage = () => {
    return (
        <React.Fragment>
            <UsecasePageHeader />
            <UsecasePageContent />
        </React.Fragment>
    );
};

export default UsecasePage;
