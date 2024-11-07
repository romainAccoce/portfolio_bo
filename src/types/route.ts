import { ReactElement } from "react";
import { RouteObject } from "react-router-dom";

export type customRouteObject = RouteObject & {
    icon?: ReactElement
}