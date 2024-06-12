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
    const { i18n } = useApi();
    return (
      <>
        {/* <Page></Page> */}
        <Button to="https://framemytv.com/pages/return-request?order_number=4564">
          {i18n.translate("menuItem.button")}
        </Button>
        ;
      </>
    );
  }
  