import * as React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { Page } from "components";
import { useDispatch, useSelector } from "react-redux";
import { demoActions } from "actions";
import { StoreState, demoState } from "reducers";
import "./demo.less";

export interface DemoPageProps extends RouteConfigComponentProps { }

export const DemoPage: React.SFC<DemoPageProps> = props => {
    const dispatch = useDispatch();
    const { demoProps } = useSelector<StoreState, demoState>(
        (state) => state.demo
    );

    return (
      <Page {...props} name="demo">
        <div
          onClick={() => {
            dispatch(
              demoActions.updateProps({
                test: demoProps.test + 1,
              })
            );
          }}
          className="header-menu"
        >
          {demoProps.test}
        </div>
        <div
          onClick={() => {
            dispatch(
              demoActions.fetchData({
                test: demoProps.test + 1,
              })
            );
          }}
          className="header-menu"
        >
          fetch {demoProps.test}
        </div>
      </Page>
    );
};
