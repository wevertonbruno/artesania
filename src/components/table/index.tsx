import React from "react";
import * as Styled from "./styled";
import DotMenu from "../dotmenu";
import { MenuProps } from "dotmenu";

interface ITableColumnDef {
  key: string;
  width?: string;
  name: string;
}

interface ITableFooter {
  [key: string]: any;
}

export interface ITableRow {
  id: string;
  [key: string]: any;
}

interface ITableRowAction {
  name: string;
  onClick: (row: ITableRow) => void;
}

export interface ITable {
  id: string;
  columnsDef: ITableColumnDef[];
  rows: ITableRow[];
  rowActions?: ITableRowAction[];
  footer?: ITableFooter;
}

function Table({ id, columnsDef, rows, rowActions, footer }: ITable) {
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
              {rowActions && <Styled.TableHeader>Açoes</Styled.TableHeader>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {columnsDef.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
                {rowActions && (
                  <td>
                    <DotMenu
                      options={rowActions.map((action) => ({
                        name: action.name,
                        onClick: () => action.onClick(row),
                      }))}
                    />
                  </td>
                )}
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
