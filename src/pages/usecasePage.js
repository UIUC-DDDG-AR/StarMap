import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
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

const capabilities_id = new Set(capability_information.map((capability) => capability.id));

const createData = (capabilities, snapchat, pokmongo) => {
    return {
      capabilities,
      snapchat,
      pokmongo,
      detial: [
        { snapchat: '/images/capability/audio_calling.jpg', pokmongo: '/images/software/playcanvas.png'},
      ],
    };
}

const idFindName = (id, capability_information) => {
  return capability_information.map(info => {
    return id === info.id ? info.name : ''
  })
}

const data = [];
usecase.map((cap) => {
    data.push(createData(
      idFindName(cap.id, capability_information),
      cap.Snapchat[0] === 1? 'X' : '', 
      cap.pokmon_go[0] === 1? 'X' : ''))
});

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.second,
      color: theme.palette.common.black,
      // width: "5%",
      // Do not work for some reason...
      // align: "center",
    },
    body: {
      // Do not work for some reason...
      textalign: "center",
      align: "center",
    },
}))(TableCell);

const Row = (props) => {
    const classes = makeStyles(theme => ({
        rows: {
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.action.hover,
              },
              '& > *': {
                borderRight: '5px',
            },
        },
        card: {
          boxShadow: "none",
        },
        media: {
          height: 300,
        },
        content: {
          fontSize: 16,
          padding: "1em 0",
          lineHeight: "1.25",
        },
    }))()

    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow className={classes.rows}>
          <TableCell  align="right" width="1%">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <StyledTableCell align="center">{row.capabilities}</StyledTableCell>
          <StyledTableCell align="center">{row.snapchat}</StyledTableCell>
          <StyledTableCell align="center">{row.pokmongo}</StyledTableCell>
        </TableRow>
        <TableRow className={classes.rows}>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }}  align="center" colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" style={{ width: "100%" }}aria-label="purchases">
                  <TableBody>
                    {row.detial.map((d) => (
                      <TableRow key={d.snapchat} className={classes.rows}>
                        <TableCell align="center" width="1%"/>
                        <TableCell align="center" width="45%"/>
                        {/* <TableCell align="center" width="25%">{d.snapchat}</TableCell> */}
                        {/* <TableCell align="center">{d.pokmongo}</TableCell> */}
                        <TableCell>
                          <Card className={classes.card}>
                              <CardMedia 
                                className={classes.media} 
                                component="img" 
                                // alt={capability.name}
                                image={d.snapchat}
                              />
                              <CardContent className={classes.content}>
                                  <Typography variant="p">contents</Typography>
                              </CardContent>
                          </Card>
                        </TableCell>
                        <TableCell>
                          <Card className={classes.card}>
                              <CardMedia 
                                className={classes.media} 
                                component="img" 
                                // alt={capability.name}
                                image={d.snapchat}
                              />
                              <CardContent className={classes.content}>
                                  <Typography variant="p">contents</Typography>
                              </CardContent>
                          </Card>
                        </TableCell>
                      </TableRow>
                    ))}
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
    }))()
    return (
    <TableContainer style={{ width: 2000, paddingLeft: "6em" }} >
      <Table style={{ width: 1200 }} aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.rows}>
            <StyledTableCell  align="right" width="1%"/>
            <StyledTableCell align="center">Capabilities</StyledTableCell>
            <StyledTableCell align="center">SnapChat</StyledTableCell>
            <StyledTableCell align="center">Pokmon Go</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((row) => (
            <Row key={row.capabilities} row={row} />
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
