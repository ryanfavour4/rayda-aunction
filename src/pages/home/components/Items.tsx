import React, { useContext, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  styled,
  Button,
} from "@mui/material";
import { store } from "../../../store/Root-store";
import { observer } from 'mobx-react-lite';

function Items() {
  const { itemStore } = useContext(store);
  const { Item } = itemStore;

  const Image = styled("img")({
    width: "50%",
    height: "auto",
  });

  useEffect(() => {
    itemStore.fetchItems();
  }, [itemStore])

  return (
    <div>
      <Grid container spacing={2} marginTop={4}>
        {/* EACH ITEM STARTS */}
        {
            Item.map((data, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{ border: "1px inset silver", padding: "10px" }}>
                      <div
                        style={{
                          background: "silver",
                          padding: "10px",
                          borderRadius: 10,
                        }}
                      >
                        <Image src={data.image} alt="My image" />
                      </div>
                      <CardContent style={{ padding: "10px 0", textAlign: "left" }}>
                        <div
                          className="highest_bider"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            className="avatar"
                            style={{
                              background: "silver",
                              padding: "10px",
                              borderRadius: "50%",
                              fontWeight: 600,
                              marginRight: 10,
                            }}
                          >
                            {data.name.split(" ").map((n)=>n[0]).join("")}
                          </div>
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            color="textSecondary"
                            component="p"
                          >
                            {data.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            (Highest Bider)
                          </Typography>
                        </div>
                        <h3
                          className="item_name"
                          style={{
                            margin: 0,
                          }}
                        >
                          {data.title}
                        </h3>
                        <div
                          className="price_div"
                          style={{ display: "flex", alignItems: "center", gap: 5 }}
                        >
                          <p className="grey">Current Bid :</p>
                          <h5>{data.bid}</h5>
                        </div>
                        <hr />
                        <Button
                          style={{
                            backgroundColor: "#004CCC",
                            width: "100%",
                            color: "white",
                          }}
                        >
                          Add to wishlist
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                )
            })
        }
        {/* EACH ITEM ENDS */}
      </Grid>
    </div>
  );
}

export default observer(Items);
