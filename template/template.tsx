import * as React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { Page } from "components";
import { useDispatch, useSelector } from "react-redux";
import { templateActions } from "actions";
import { StoreState, templateState } from "reducers";
import "./template.less";

export interface templatePageProps extends RouteConfigComponentProps {}

export const TemplatePage: React.SFC<templatePageProps> = (props) => {
  const dispatch = useDispatch();
  const { templateProps } = useSelector<StoreState, templateState>(
    (state) => state.template
  );

  return (
    <Page {...props} name="template">
      <div
        onClick={() => {
          dispatch(
            templateActions.updateProps({
              demo: templateProps.demo + 1,
            })
          );
        }}
      >
        {templateProps.demo}
      </div>
    </Page>
  );
};