"use client";

import { defineRegistry } from "@json-render/react";
import { catalog } from "./catalog";

// カタログの各コンポーネントに対応する React 実装。
export const { registry } = defineRegistry(catalog, {
  components: {
    Card: ({ props, children }) => (
      <div className="card">
        <h3>{props.title}</h3>
        {children}
      </div>
    ),
    Stat: ({ props }) => (
      <div className="stat">
        <span className="stat-label">{props.label}</span>
        <span className="stat-value">{props.value}</span>
      </div>
    ),
    Table: ({ props }) => (
      <table>
        <thead>
          <tr>
            {props.headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    Button: ({ props }) => (
      <button type="button" onClick={() => alert(props.label)}>
        {props.label}
      </button>
    ),
  },
});
