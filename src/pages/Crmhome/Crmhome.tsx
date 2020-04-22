import * as React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { Page } from "components";
import { useDispatch, useSelector } from "react-redux";
import { crmhomeActions } from "actions";
import { StoreState, crmhomeState } from "reducers";
import "./crmhome.less";

export interface crmhomePageProps extends RouteConfigComponentProps {}

export const CrmhomePage: React.SFC<crmhomePageProps> = (props) => {
  const dispatch = useDispatch();
  const { crmhomeProps } = useSelector<StoreState, crmhomeState>(
    (state) => state.crmhome
  );

  return (
    <Page {...props} name="crmhome">
      <div
        onClick={() => {
          dispatch(
            crmhomeActions.updateProps({
              demo: crmhomeProps.demo + 1,
            })
          );
        }}
      >
        {crmhomeProps.demo}
      </div>
    </Page>
  );
};
