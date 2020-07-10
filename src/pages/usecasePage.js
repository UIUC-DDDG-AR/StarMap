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

const createData = (capabilities, snapchat, pokmongo) => {
    return {
      capabilities,
      snapchat,
      pokmongo,
      detial: [
        { snapchat: 'StarMap/public/images/software/arcore.png', pokmongo: ''},
      ],
    };
}

const rows = [
    createData('Object Recognition', 'X', ''),
    createData('6DOF', 'X', 'X'),
    createData('3DOF', 'X', 'X'),
];

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
        _rows: {
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
        <TableRow className={classes._rows}>
          <TableCell  align="right" width="2%">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <StyledTableCell align="center">{row.capabilities}</StyledTableCell>
          <StyledTableCell align="center">{row.snapchat}</StyledTableCell>
          <StyledTableCell align="center">{row.pokmongo}</StyledTableCell>
        </TableRow>
        <TableRow className={classes._rows}>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }}  align="center" colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" style={{ width: "100%" }}aria-label="purchases">
                  <TableHead>
                    <TableRow className={classes._rows}>
                      <TableCell align="center" width="1%"/>
                      <TableCell align="center" width="49%"/>
                      <TableCell align="center" width="25%">SnapChat</TableCell>
                      <TableCell align="center" >Pokmon Go</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detial.map((d) => (
                      <TableRow key={d.snapchat} className={classes._rows}>
                        <TableCell align="center" width="1%"/>
                        <TableCell align="center" width="49%"/>
                        {/* <TableCell align="center" width="25%">{d.snapchat}</TableCell> */}
                        {/* <TableCell align="center">{d.pokmongo}</TableCell> */}
                        <TableCell>
                          <Card className={classes.card}>
                              <CardMedia 
                                className={classes.media} 
                                component="img" 
                                // alt={capability.name}
                                image={`/images/capability/audio_calling.jpg`}
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
                                image={`/images/capability/audio_calling.jpg`}
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
        _rows: {
              '& > *': {
                borderBottom: 'unset',
              },
        },
    }))()
    return (
    <TableContainer style={{ width: 2000, paddingLeft: "6em" }} >
      <Table style={{ width: 1200 }} aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes._rows}>
            <StyledTableCell  align="right" width="2%"/>
            <StyledTableCell align="center">Capabilities</StyledTableCell>
            <StyledTableCell align="center">SnapChat</StyledTableCell>
            <StyledTableCell align="center">Pokmon Go</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
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
