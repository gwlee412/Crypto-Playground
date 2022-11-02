import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetTopTenQuery } from "./features/apiSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy } from "./features/buyAmountSlice";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CryptoTable() {
  const { data, isLoading, isSuccess } = useGetTopTenQuery();
  
  const dispatch = useDispatch();
  const [currentAmount, setCurrentAmount] = useState("");
  const [show, setShow] = useState(false);
  const amount = Number(currentAmount);
  function handleChange(e) {
    e.preventDefault();
    setCurrentAmount(e.target.value);
  }
  function buyCrypto() {
    setShow(!show);
  }
  if (isLoading) return <div>Loading..</div>;
  if (isSuccess) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Top Ten</StyledTableCell>
              <StyledTableCell align="right">Coin</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">24 Hr %</StyledTableCell>
              <StyledTableCell align="right">Trade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Data.map((coin) => (
              <StyledTableRow key={coin.CoinInfo.Id}>
                <StyledTableCell component="th" scope="row">
                  {coin.DISPLAY.USD.FROMSYMBOL}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {coin.CoinInfo.FullName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {coin.DISPLAY.USD.PRICE}
                </StyledTableCell>
                <StyledTableCell
                  sx={
                    Number(coin.DISPLAY.USD.CHANGEPCT24HOUR) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                  align="right"
                >
                  {Number(coin.DISPLAY.USD.CHANGEPCT24HOUR) > 0 ? "▲" : "▼"}
                  {coin.DISPLAY.USD.CHANGEPCT24HOUR}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button onClick={buyCrypto}>Buy</button>
                  {show ? (
                    <form onSubmit={() => dispatch(buy(amount))}>
                      <input type="text" onChange={handleChange} />
                    </form>
                  ) : (
                    ""
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
