import * as React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { Page } from "components";
import { useDispatch, useSelector } from "react-redux";
import { templateActions } from "actions";
import { StoreState, demoState } from "reducers";
import "./demo.scss";

export interface templatePageProps extends RouteConfigComponentProps {}

export const templatePage: React.SFC<templatePageProps> = (props) => {
  const dispatch = useDispatch();
  const { templateProps } = useSelector<StoreState, demoState>(
    (state) => state.template
  );

  return (
    <Page {...props} name="template">
      <div
        onClick={() => {
          dispatch(
            templateActions.updateProps({
              test: templateProps.test + 1,
            })
          );
        }}
      >
        {templateProps.test}
      </div>
    </Page>
  );
};