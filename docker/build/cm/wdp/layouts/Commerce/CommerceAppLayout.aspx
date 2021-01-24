 <%@ Page Language="C#" %>
 <%@ Import Namespace="Sitecore" %>
 <%@ Import Namespace="Sitecore.Data.Items" %>
 <%@ Import Namespace="Sitecore.Diagnostics" %>
 <%@ Import Namespace="Sitecore.Text" %>

 <script language="c#" runat="server">

  override protected void OnInit([NotNull] EventArgs e)
  {
    Assert.ArgumentNotNull(e, "e");
  
    var url = new UrlString("/sitecore/shell/Applications/Content Manager/default.aspx");
  
    // Get the root item to display in the Content Manager window.  
    Item rootItem = Client.ContentDatabase.GetItem("{CA2E00B1-0917-44A5-AD05-5FC3167AAA0C}");
  
    if (rootItem == null)
    {
      return;
    }
  
    url.Add("he", "Blog Editor");
    url.Add("pa", "0");
    url.Add("ic", "people/16x16/user1_message.png");
    url.Add("ro", rootItem.ID.ToString());
    url["mo"] = "templateworkspace";
  
    Response.Redirect(url.ToString());
  }

</script>
