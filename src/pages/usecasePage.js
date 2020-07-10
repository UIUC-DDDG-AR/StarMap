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
                <Typography variant="h4">Augmented Capabilities Example: SnapChat vs Pokmon Go</Typography>
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
        { snapchat: '', pokmongo: ''},
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
      width: 350,
      // Do not work for some reason...
      align: "center",
    },
    body: {
      width: 360,
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
    }))()

    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow className={classes.rows}>
          <StyledTableCell  align="center" >
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell align="center">{row.capabilities}</StyledTableCell>
          <StyledTableCell align="center">{row.snapchat}</StyledTableCell>
          <StyledTableCell align="center">{row.pokmongo}</StyledTableCell>
        </TableRow>
        <TableRow className={classes.rows}>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }}  align="center" colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" style={{ width: 1000 }}aria-label="purchases">
                  <TableHead>
                    <TableRow className={classes.rows}>
                      <StyledTableCell />
                      <StyledTableCell>SnapChat</StyledTableCell>
                      <StyledTableCell>Pokmon Go</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detial.map((historyRow) => (
                      <TableRow key={historyRow.snapchat} className={classes.rows}>
                        <StyledTableCell />
                        <StyledTableCell component="th" scope="row">
                          {historyRow.snapchat}
                        </StyledTableCell>
                        <StyledTableCell>{historyRow.pokmongo}</StyledTableCell>
                        {/* <TableCell align="center">{historyRow.amount}</TableCell> */}
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
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.action.hover,
              },
              '& > *': {
                borderBottom: 'unset',
            },
        },
    }))()
    return (
    <TableContainer style={{ width: 2000, paddingLeft: "6em" }} >
      <Table style={{ width: 1200 }} aria-label="collapsible table">
        <TableHead>
          <TableRow className={rows}>
            <StyledTableCell />
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
