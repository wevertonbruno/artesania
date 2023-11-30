import React, { ElementType, useRef } from "react";
import * as Styled from "./styled";
import { Menu } from "../menu";
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
  icon: ElementType;
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
                    <Menu.Container>
                      <Menu.Group>
                        {rowActions.options.map((action) => (
                          <Menu.Item
                            key={action.name}
                            text={action.name}
                            icon={action.icon}
                            onClick={() => action.onClick(row)}
                          />
                        ))}
                      </Menu.Group>
                      <Menu.Group>
                        {rowActions.riskOptions?.map((action) => (
                          <Menu.Item
                            key={action.name}
                            text={action.name}
                            icon={action.icon}
                            className="text-red-500 hover:text-red-500"
                            onClick={() => action.onClick(row)}
                          />
                        ))}
                      </Menu.Group>
                    </Menu.Container>
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
