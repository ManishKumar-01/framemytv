import {
  Button,
  reactExtension,
  useApi,
  Page,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order.action.menu-item.render",
  () => <MenuActionExtension />,
);

function MenuActionExtension() {
  const { i18n, orderId, fulfillmentId } = useApi();
  console.log(orderId, fulfillmentId);

  function extractOrderId(shopifyId) {
    // Use a regular expression to match the numeric part of the Shopify ID
    const match = shopifyId.match(/Order\/(\d+)/);

    // If a match is found, return the numeric part, otherwise return null
    return match ? match[1] : null;
  }
  return (
    <Button to={"extension:/return?order-id=" + extractOrderId(orderId)}>
      {i18n.translate("menuItem.button")}
    </Button>
  );
}
