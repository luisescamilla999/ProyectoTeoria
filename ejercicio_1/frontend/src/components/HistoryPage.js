import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

//importaciones de Material UI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "No", label: "No", align: "center" },
  {
    id: "Periódicos_comprados",
    label: "Periódicos comprados",
    align: "center",
  },
  {
    id: "Demanda",
    label: "Demanda",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Ganancia_Perdida",
    label: "Ganancia/Perdida",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Fecha",
    label: "Fecha",
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(No, Periódicos_comprados, Demanda, Ganancia_Perdida) {
  const Fecha = Demanda / Ganancia_Perdida;
  return { No, Periódicos_comprados, Demanda, Ganancia_Perdida, Fecha };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export const HistoryPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <MainContainer>
      <Navbar
        inicio={false}
        HistorialVentas={true}
        PronosticoVentas={false}
        EditarVariables={false}
      />
      <ChartContainer>
        <Tittle>Espacio reservado para el gráfico</Tittle>
      </ChartContainer>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: "#9bbed0",
                    }}
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 1080px;
  min-width: 1080px;
  min-height: 624px;

  background: #ffffff;
  margin: 60px auto;
  border-radius: 5px;
  box-shadow: 1px 1px 30px -5px #20202049;
`;

const ChartContainer = styled.div`
  max-width: 1080px;
  min-width: 1080px;
  height: 400px;
  min-height: 350px;
  background: #f6f6f6;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Tittle = styled.div`
  background: #f6f6f6;
  color: #3a7d83;
  font-size: 30px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-top: 40px;
`;
