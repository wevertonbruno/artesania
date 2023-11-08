import React from "react";
import * as Styled from "./styled";

interface ITableColumnDef {
  key: string;
  width?: string;
  name: string;
}

interface ITableFooter {
  [key: string]: any;
}

interface ITableRow {
  id: string;
  [key: string]: any;
}

export interface ITable {
  id: string;
  columnsDef: ITableColumnDef[];
  rows: ITableRow[];
  footer?: ITableFooter;
}

function Table({ id, columnsDef, rows, footer }: ITable) {
  return (
    <Styled.Container>
      <div className="t_body">
        <table id={id}>
          <thead className="text-disabled">
            <tr>
              {columnsDef.map((column) => (
                <Styled.TableHeader key={column.key} width={column.width}>
                  {column.name}
                </Styled.TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {columnsDef.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {footer && (
              <tr>
                {columnsDef.map((column) => (
                  <td key={column.key}>{footer[column.key]}</td>
                ))}
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </Styled.Container>
  );
}

export default Table;
