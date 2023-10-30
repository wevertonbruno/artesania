import React from "react";
import * as Styled from "./styled";

function Table() {
  return (
    <Styled.Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Cliente</th>
            <th>Status</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nome do Produto</td>
            <td>Nome do Cliente</td>
            <td>Em andamento</td>
            <td>R$ 100,00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nome do Produto</td>
            <td>Nome do Cliente</td>
            <td>Em andamento</td>
            <td>R$ 100,00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nome do Produto</td>
            <td>Nome do Cliente</td>
            <td>Em andamento</td>
            <td>R$ 100,00</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nome do Produto</td>
            <td>Nome do Cliente</td>
            <td>Em andamento</td>
            <td>R$ 100,00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>R$ 400,00</td>
          </tr>
        </tfoot>
      </table>
    </Styled.Container>
  );
}

export default Table;
