import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const rows = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

export const LessonTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Desert</TableCell>
          <TableCell>Calories</TableCell>
          <TableCell>Fat</TableCell>
          <TableCell>Carbs</TableCell>
          <TableCell>Protein</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.calories}</TableCell>
            <TableCell>{row.fat}</TableCell>
            <TableCell>{row.carbs}</TableCell>
            <TableCell>{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
