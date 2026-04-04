import type { Context } from "hono";

export const projects = [
  {
    id: "synced",
    title: "Synced",
    description: "Full-stack period tracking app with cycle predictions, household management, and data export features. Built with React, Node.js, and SQLite.",
    tags: ["React", "Node.js", "SQLite", "Full-Stack"],
    color: "#FF6B9D",
    workspacePath: "/home/workspace/Synced",
  },
  {
    id: "bill-tracker",
    title: "Bill Tracker",
    description: "React bill tracking app with Firebase Auth, partial payment support, and progress visualization. Dark, bold UI design.",
    tags: ["React", "Firebase", "Auth"],
    color: "#4ECDC4",
    workspacePath: "/home/workspace/bill-tracker",
  },
];

export default function handler(c: Context) {
  return c.json({ projects });
}
