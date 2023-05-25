import React from "react";
import { PreviewFileConfig } from "./util";
import { EmbedState } from "./index";
export declare const ReactViewAdobe: (props: Partial<EmbedState> & {
    previewConfig: Partial<PreviewFileConfig>;
} & Partial<Omit<HTMLDivElement, 'style'>> & {
    style?: React.HTMLAttributes<HTMLDivElement>["style"];
}) => JSX.Element;
