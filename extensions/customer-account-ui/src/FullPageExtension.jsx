import {
  BlockSpacer,
  Button,
  Form,
  Grid,
  GridItem,
  Page,
  Select,
  Text,
  TextField,
  View,
  reactExtension,
  useApi
} from "@shopify/ui-extensions-react/customer-account";
import { useState } from "react";

export default reactExtension("customer-account.page.render", () => (
  <FullPageExtension />
));

function FullPageExtension() {
  const { extension, i18n } = useApi();
  function getOrderIdFromUrl() {
    // Get the current URL
    const url = new URL(window.location.href);

    // Use the URLSearchParams API to get the value of 'order-id'
    const orderId = url.searchParams.get("order-id");

    return orderId;
  }

  // Example usage:
  const orderId = getOrderIdFromUrl();
  console.log(orderId);

  const [value, setValue] = useState(1);

  return (
    <Page title={i18n.translate("fullPageTitle")}>
      {/* <Banner>{i18n.translate('welcome', {target: extension.target})}</Banner> */}
      <Text>
        Need to Return Your Frame? We're sorry to hear that, but we understand
        sometimes it's necessary to part with your masterpiece. Though, there
        may be a way to solve your problem. Have you checked out our helpful
        troubleshooting page? If you'd like to do so, please follow this link.
        We try to make the returns process as easy and painless as possible.
        Please complete the following form and we will be in touch within 1-2
        business days with further instructions.
      </Text>
      {/* <BlockSpacer spacing="base" /> */}
      <Text>
        Returns are accepted within 30 days from the date of delivery.
      </Text>

      <Form onSubmit={() => console.log("onSubmit event")}>
        <Grid columns={["50%", "50%"]} spacing="base">
          <View>
            <TextField label="First name" required="true" />
          </View>
          <View>
            <TextField label="Last name" required="true" />
          </View>
        </Grid>
        <BlockSpacer spacing="base" />
        <Grid columns={["33%", "33%", "33%"]} spacing="base">
          <View>
            <TextField label="Order Number" required="1" />
          </View>
          <View>
            <TextField label="Email" required="true" />
          </View>
          <View>
            <TextField label="Phone Number" required="true" />
          </View>
        </Grid>
        <BlockSpacer spacing="base" />
        <GridItem columnSpan={2}>
          <Select
            label="Request Type"
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
            options={[
              {
                value: "1",
                label: "Please select",
              },
              {
                value: "2",
                label: "Return",
              },
              {
                value: "3",
                label: "Replace",
              },
              {
                value: "4",
                label: "Exchange",
              },
            ]}
          />
        </GridItem>
        <BlockSpacer spacing="base" />
        <GridItem columnSpan={2}>
          <TextField label="Additional Notes" multiline="true" />
        </GridItem>
        <BlockSpacer spacing="base" />
        <Button accessibilityRole="submit">Submit</Button>
      </Form>
    </Page>
  );
}
