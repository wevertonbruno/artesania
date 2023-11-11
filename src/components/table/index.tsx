import React, { useRef } from "react";
import * as Styled from "./styled";
import DotMenu from "../dotmenu";
import { Icon } from "my-icons";

interface ITableColumnDef {
  key: string;
  width?: string;
  nowrap?: boolean;
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
  icon: Icon;
  onClick: (row: ITableRow) => void;
}

export interface ITable {
  id: string;
  columnsDef: ITableColumnDef[];
  rows: ITableRow[];
  rowActions?: {
    options: ITableRowAction[];
    riskOptions?: ITableRowAction[];
  };
  footer?: ITableFooter;
}

function Table({ id, columnsDef, rows, rowActions, footer }: ITable) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.Container>
      <div className="t_body" ref={containerRef}>
        <table id={id}>
          <thead className="text-disabled">
            <tr>
              {columnsDef.map((column) => (
                <Styled.TableHeader
                  key={column.key}
                  width={column.width}
                  style={{ whiteSpace: column.nowrap ? "nowrap" : "normal" }}
                >
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
                      containerRef={containerRef}
                      riskOptions={rowActions.riskOptions?.map((action) => ({
                        ...action,
                        onClick: () => action.onClick(row),
                      }))}
                      options={rowActions.options.map((action) => ({
                        ...action,
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
