# **Shopify Snippets**

### **ATC Redirect** ~theme.js (search for /cart.js and/or /add)
window.location.href="/cart";

### **Accelerated Payments** ~Cart template
window.location.href="/cart";

### **Inject CSS** Useful for Shopify Order Complete page
<script>
  var styles = `.class { property: value;}`

  var styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
</script>


####Shopify ReCharge
https://support.rechargepayments.com/hc/en-us/articles/360008830653-Installing-the-ReCharge-integration-manually

####Stamped Reviews
https://help.stamped.io/article/142-setup-widget-2-0-without-shopify-product-review-spr-app#widget

####Judge.me Reviews
https://support.judge.me/support/solutions/articles/44001699621-judge-me-manual-installation-guide

####Back In Stock Product Alerts
https://swym.it/help/how-to-install-back-in-stock-product-alerts-on-your-shopify-dev-theme/
