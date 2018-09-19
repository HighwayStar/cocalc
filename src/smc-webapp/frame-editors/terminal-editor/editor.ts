/*
Top-level React component for the terminal
*/

import { createEditor } from "../frame-tree/editor";
import { TerminalFrame } from "./terminal";
import { set } from "../generic/misc";

export const terminal = {
  short: "Terminal",
  name: "Terminal",
  icon: "terminal",
  component: TerminalFrame,
  buttons: set([
    "print",
    "decrease_font_size",
    "increase_font_size",
    "find",
    "paste",
    "copy"
  ])
};

const EDITOR_SPEC = {
  terminal
};

export const Editor = createEditor({
  format_bar: false,
  editor_spec: EDITOR_SPEC,
  display_name: "TerminalEditor"
});
