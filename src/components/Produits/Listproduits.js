import axios from 'axios';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';



export default class Listproduits extends Component {
    
    constructor(props){
        super(props);
        this.state={
            listp:[]
        }


    }
    componentDidMount=async() =>{
       await this.GetArticles();
        }


    GetArticles = async () => {
            await axios.get("http://localhost:3001/api/articles")
            .then(response => {
            this.setState({ listp: response.data });
            console.log(this.state.listp);
            })
            .catch(function (error) {
            console.log(error);
            })
            }
    
    render() {

        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14,
            },
          }));
          
          const StyledTableRow = styled(TableRow)(({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }));
        return (
          <div className="container">
            <Button variant="contained" color="secondary" size="large">
               <Link exact to="/ajproduit">
                Ajout</Link></Button>

          
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Référence</StyledTableCell>
            <StyledTableCell align="right">Désignation</StyledTableCell>
            <StyledTableCell align="right">Marque</StyledTableCell>
            <StyledTableCell align="right">Prix d'achat</StyledTableCell>
            <StyledTableCell align="right">Prix de vente</StyledTableCell>
            <StyledTableCell align="right">Quantité Stock</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.listp.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.reference}
              </StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.marque}</StyledTableCell>
              <StyledTableCell align="right">{row.prixAchat}</StyledTableCell>
              <StyledTableCell align="right">{row.prixVente}</StyledTableCell>
              <StyledTableCell align="right">{row.qtestock}</StyledTableCell>
              <StyledTableCell align="right"><img src={row.imageartpetitf} alt="" width="60" /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        )
    }
}


