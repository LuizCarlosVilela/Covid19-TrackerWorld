import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="primary" gutterBottom>
          <h2>{title}</h2>
        </Typography>

        {cases > 0 ? (
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {cases} Hoje
          </h2>
        ) : (
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {cases}
          </h2>
        )}

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
